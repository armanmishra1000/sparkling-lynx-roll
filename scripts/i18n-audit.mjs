import fs from "node:fs";
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

const hasEscapedUnicodeInSource = () => {
  const messagesSource = fs.readFileSync(new URL("../src/lib/i18n/messages.ts", import.meta.url), "utf8");
  return /\\u[0-9a-fA-F]{4}/.test(messagesSource);
};

const isLikelyMojibake = (value) => /Ã|Â|â€|â€™|â€œ|â€¢|â€”|â€“/.test(value);

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
  if (/^(Tengo vergüenza\.|El museo está cerrado ahora\.|sophie@example\.com|hello@example\.com)$/.test(value)) return true;
  if (/^\$?\d[\d$+%/ .:-]*$/.test(value)) return true;
  if (/support@speakwithsophie\.ai/i.test(value)) return true;
  return false;
};

const walk = (baseNode, localeNode, localeId, path) => {
  const baseType = getType(baseNode);
  const localeType = getType(localeNode);

  if (baseType !== localeType) {
    errors.push(`[${localeId}] Type mismatch at "${path}": expected ${baseType}, received ${localeType}`);
    return;
  }

  if (baseType === "string") {
    if (localeNode.includes("??")) {
      errors.push(`[${localeId}] Suspicious text at "${path}": contains "??"`);
    }

    if (isLikelyMojibake(localeNode)) {
      errors.push(`[${localeId}] Possible mojibake at "${path}": "${localeNode}"`);
    }

    if (/^[\u3010\[].*?[\u3011\]]\s*/u.test(localeNode)) {
      errors.push(`[${localeId}] Fallback prefix left at "${path}": "${localeNode}"`);
    }

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

if (hasEscapedUnicodeInSource()) {
  errors.push("messages.ts contains escaped Unicode literals (\\uXXXX). Use direct UTF-8 script text.");
}

for (const locale of locales) {
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
