import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MESSAGES } from "../src/lib/i18n/messages.ts";

const locales = Object.keys(MESSAGES);
const source = MESSAGES.en;
const errors = [];

const getType = (value) => {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
};

const findPlaceholders = (value) => {
  if (typeof value !== "string") return [];
  const matches = value.match(/\{[a-zA-Z0-9_]+\}/g);
  return matches ? [...new Set(matches)].sort() : [];
};

const findEscapedUnicodeFiles = () => {
  const i18nRoot = new URL("../src/lib/i18n/", import.meta.url);
  const filesToScan = [new URL("messages.ts", i18nRoot)];
  const localesDirPath = fileURLToPath(new URL("messages/", i18nRoot));

  if (fs.existsSync(localesDirPath)) {
    const localeFiles = fs
      .readdirSync(localesDirPath)
      .filter((filename) => filename.endsWith(".ts"))
      .map((filename) => new URL(`messages/${filename}`, i18nRoot));
    filesToScan.push(...localeFiles);
  }

  return filesToScan
    .filter((fileUrl) => /\\u[0-9a-fA-F]{4}/.test(fs.readFileSync(fileUrl, "utf8")))
    .map((fileUrl) => path.basename(fileURLToPath(fileUrl)));
};

const isLikelyMojibake = (value) =>
  /(?:Ã[\u0080-\u00BF]|Â[\u0080-\u00BF]|â[\u0080-\u00BF]{1,2}|Ø[\u0080-\u00BF]|Ù[\u0080-\u00BF]|à[\u0080-\u00BF]|ç[\u0080-\u00BF]|ï¼|ã€|�)/u.test(
    value
  );

const skipEqualityPath = (path) =>
  path.endsWith(".id") ||
  path.endsWith(".slug") ||
  path.endsWith(".color") ||
  path.endsWith(".author") ||
  path.endsWith(".authorName") ||
  path.endsWith(".duration") ||
  path.endsWith(".emailPlaceholder");

const allowSameValue = (value) => {
  if (/^\s*$/.test(value)) return true;
  if (/^[.]+$/.test(value)) return true;
  if (/^(Sophie(\.ai)?|WhatsApp|AI|SBB|P1M|Sophie AI Inc\.|Alex Chen|Legal|M&G|SCF|Popular)$/.test(value)) return true;
  if (
    /^(Estoy embarazado\.|Tengo vergüenza\.|El museo es cerrado ahora\.|El museo está cerrado ahora\.|Ser vs Estar:|sophie@example\.com|hello@example\.com)$/.test(
      value
    )
  )
    return true;
  if (/^\$?\d[\d$+%/ .:-]*$/.test(value)) return true;
  if (/^support@speakwithsophie\.ai$/i.test(value)) return true;
  return false;
};

const scanCorruption = (node, localeId, path) => {
  const nodeType = getType(node);

  if (nodeType === "string") {
    if (node.includes("??")) {
      errors.push(`[${localeId}] Suspicious text at "${path}": contains "??"`);
    }

    if (isLikelyMojibake(node)) {
      errors.push(`[${localeId}] Possible mojibake at "${path}": "${node}"`);
    }

    if (/^[\u3010\[].*?[\u3011\]]\s*/u.test(node)) {
      errors.push(`[${localeId}] Fallback prefix left at "${path}": "${node}"`);
    }
    return;
  }

  if (nodeType === "array") {
    for (let i = 0; i < node.length; i += 1) {
      scanCorruption(node[i], localeId, `${path}[${i}]`);
    }
    return;
  }

  if (nodeType === "object") {
    for (const [key, value] of Object.entries(node)) {
      scanCorruption(value, localeId, `${path}.${key}`);
    }
  }
};

const walk = (baseNode, localeNode, localeId, path) => {
  const baseType = getType(baseNode);
  const localeType = getType(localeNode);

  if (baseType !== localeType) {
    errors.push(`[${localeId}] Type mismatch at "${path}": expected ${baseType}, received ${localeType}`);
    return;
  }

  if (baseType === "string") {
    const basePlaceholders = findPlaceholders(baseNode);
    const localePlaceholders = findPlaceholders(localeNode);
    if (basePlaceholders.join("|") !== localePlaceholders.join("|")) {
      errors.push(
        `[${localeId}] Placeholder mismatch at "${path}": expected [${basePlaceholders.join(", ")}], received [${localePlaceholders.join(", ")}]`
      );
    }

    if (baseNode === localeNode && !skipEqualityPath(path) && !allowSameValue(localeNode)) {
      errors.push(`[${localeId}] Unlocalized string at "${path}": "${localeNode}"`);
    }
    return;
  }

  if (baseType === "array") {
    if (baseNode.length !== localeNode.length) {
      errors.push(
        `[${localeId}] Array length mismatch at "${path}": expected ${baseNode.length}, received ${localeNode.length}`
      );
      return;
    }

    for (let i = 0; i < baseNode.length; i += 1) {
      walk(baseNode[i], localeNode[i], localeId, `${path}[${i}]`);
    }
    return;
  }

  if (baseType === "object") {
    const baseKeys = Object.keys(baseNode);
    const localeKeys = new Set(Object.keys(localeNode));

    for (const key of baseKeys) {
      if (!(key in localeNode)) {
        errors.push(`[${localeId}] Missing key at "${path}.${key}"`);
        continue;
      }
      walk(baseNode[key], localeNode[key], localeId, `${path}.${key}`);
      localeKeys.delete(key);
    }

    for (const extra of localeKeys) {
      errors.push(`[${localeId}] Unexpected key at "${path}.${extra}"`);
    }
  }
};

const escapedUnicodeFiles = findEscapedUnicodeFiles();
if (escapedUnicodeFiles.length > 0) {
  errors.push(
    `Escaped Unicode literals (\\uXXXX) found in: ${escapedUnicodeFiles.join(", ")}. Use direct UTF-8 script text.`
  );
}

for (const locale of locales) {
  scanCorruption(MESSAGES[locale], locale, "messages");
  if (locale === "en") continue;
  walk(source, MESSAGES[locale], locale, "messages");
}

if (errors.length > 0) {
  console.error("i18n audit failed:");
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

console.log("i18n audit passed: locale structure, placeholders, UTF-8 literals, and localization parity are valid.");
