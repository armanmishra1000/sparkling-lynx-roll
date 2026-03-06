import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MESSAGES } from "../src/lib/i18n/messages.ts";
import { localizeBrandInMessages } from "../src/lib/i18n/brand.ts";

const locales = Object.keys(MESSAGES);
const source = MESSAGES.en;
const errors = [];
const warnings = [];

const MIN_BASE_LENGTH_FOR_RATIO = 35;
const CLAUSE_MIN_BASE_LENGTH = 70;
const RATIO_THRESHOLDS = {
  zh: 0.2,
  hi: 0.38,
  es: 0.38,
  ar: 0.38
};

const SEMANTIC_ANCHORS = {
  "messages.era.learnAnyLanguage": {
    zh: [
      { label: "mentions English", regex: /\u82f1\u8bed/u },
      { label: "conveys no requirement", regex: /\u65e0\u9700|\u4e0d\u9700\u8981|\u65e0\u987b/u }
    ],
    hi: [
      {
        label: "mentions English",
        regex: /\u0905\u0902\u0917\u094d\u0930\u0947\u091c\u093c\u0940|\u0905\u0902\u0917\u094d\u0930\u0947\u095b\u0940|\u0905\u0902\u0917\u094d\u0930\u0947\u091c\u0940/u
      },
      {
        label: "conveys no requirement",
        regex:
          /\u092c\u093f\u0928\u093e|\u091c\u0930\u0942\u0930\u0924 \u0928\u0939\u0940\u0902|\u091c\u093c\u0930\u0942\u0930\u0924 \u0928\u0939\u0940\u0902|\u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0928\u0939\u0940\u0902|\u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0928\u0939\u0940\u0902/u
      }
    ],
    es: [
      { label: "mentions English", regex: /\bingl(?:\u00e9|e)s\b/i },
      { label: "conveys no requirement", regex: /\bsin\b/i }
    ],
    ar: [
      {
        label: "mentions English",
        regex: /\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629|\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629|\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629/u
      },
      {
        label: "conveys no requirement",
        regex: /\u062f\u0648\u0646|\u0628\u062f\u0648\u0646|\u0644\u0627 \u062d\u0627\u062c\u0629|\u0644\u0627 \u062a\u062d\u062a\u0627\u062c/u
      }
    ]
  }
};

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

const flattenStrings = (node, currentPath = "messages", out = []) => {
  const nodeType = getType(node);

  if (nodeType === "string") {
    out.push({ path: currentPath, value: node });
    return out;
  }

  if (nodeType === "array") {
    for (let i = 0; i < node.length; i += 1) {
      flattenStrings(node[i], `${currentPath}[${i}]`, out);
    }
    return out;
  }

  if (nodeType === "object") {
    for (const [key, value] of Object.entries(node)) {
      flattenStrings(value, `${currentPath}.${key}`, out);
    }
  }

  return out;
};

const stringLength = (value) => [...value].length;
const countClauseMarkers = (value) => (value.match(/[,:;.!?\uFF0C\u3002\uFF01\uFF1F\uFF1B\uFF1A]/gu) ?? []).length;
const hasQuestionIntent = (value) => /[?\uFF1F\u00BF\u061F]/u.test(value);
const hasExclamationIntent = (value) => /[!\uFF01]/u.test(value);

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
  /(?:\u00c3[\u0080-\u00BF]|\u00c2[\u0080-\u00BF]|\u00e2[\u0080-\u00BF]{1,2}|\u00d8[\u0080-\u00BF]|\u00d9[\u0080-\u00BF]|\u00e0[\u0080-\u00BF]|\u00e7[\u0080-\u00BF]|\u00ef\u00bc|\u00e3\u20ac|\uFFFD)/u.test(
    value
  );

const skipEqualityPath = (pathValue) =>
  pathValue.endsWith(".id") ||
  pathValue.endsWith(".slug") ||
  pathValue.endsWith(".color") ||
  pathValue.endsWith(".author") ||
  pathValue.endsWith(".authorName") ||
  pathValue.endsWith(".duration") ||
  pathValue.endsWith(".emailPlaceholder");

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

const shouldSkipBrandLeakPath = (pathValue) =>
  pathValue.endsWith(".id") ||
  pathValue.endsWith(".slug") ||
  pathValue.endsWith(".emailPlaceholder") ||
  pathValue.endsWith(".copyrightSuffix");

const hasEnglishBrandLeak = (value) =>
  /\bSophie\.ai\b/u.test(value) ||
  /\bSophie AI\b(?!\s+Inc\.)/u.test(value) ||
  /\bSophie\b/u.test(value) ||
  /\bSophia AI\b/u.test(value) ||
  /\bSophia\b/u.test(value);

const scanCorruption = (node, localeId, currentPath) => {
  const nodeType = getType(node);

  if (nodeType === "string") {
    if (node.includes("??")) {
      errors.push(`[${localeId}] Suspicious text at "${currentPath}": contains "??"`);
    }

    if (isLikelyMojibake(node)) {
      errors.push(`[${localeId}] Possible mojibake at "${currentPath}": "${node}"`);
    }

    if (/^[\u3010\[].*?[\u3011\]]\s*/u.test(node)) {
      errors.push(`[${localeId}] Fallback prefix left at "${currentPath}": "${node}"`);
    }
    return;
  }

  if (nodeType === "array") {
    for (let i = 0; i < node.length; i += 1) {
      scanCorruption(node[i], localeId, `${currentPath}[${i}]`);
    }
    return;
  }

  if (nodeType === "object") {
    for (const [key, value] of Object.entries(node)) {
      scanCorruption(value, localeId, `${currentPath}.${key}`);
    }
  }
};

const checkSemanticAnchors = (localeId, localeStringMap) => {
  for (const [messagePath, localeConfig] of Object.entries(SEMANTIC_ANCHORS)) {
    const anchors = localeConfig[localeId];
    if (!anchors) continue;

    const localizedValue = localeStringMap.get(messagePath);
    if (typeof localizedValue !== "string") continue;

    for (const anchor of anchors) {
      if (!anchor.regex.test(localizedValue)) {
        errors.push(
          `[${localeId}] Semantic anchor missing at "${messagePath}": ${anchor.label}. Value: "${localizedValue}"`
        );
      }
    }
  }
};

const checkPunctuationIntent = (localeId, sourceEntry, localeEntry) => {
  if (hasQuestionIntent(sourceEntry.value) && !hasQuestionIntent(localeEntry.value)) {
    errors.push(
      `[${localeId}] Question intent mismatch at "${sourceEntry.path}": source has question punctuation but translation does not.`
    );
  }

  if (hasExclamationIntent(sourceEntry.value) && !hasExclamationIntent(localeEntry.value)) {
    errors.push(
      `[${localeId}] Exclamation intent mismatch at "${sourceEntry.path}": source has exclamation punctuation but translation does not.`
    );
  }
};

const checkHeuristicWarnings = (localeId, sourceEntry, localeEntry) => {
  const threshold = RATIO_THRESHOLDS[localeId];
  const sourceLen = stringLength(sourceEntry.value);
  const localeLen = stringLength(localeEntry.value);

  if (threshold !== undefined && sourceLen >= MIN_BASE_LENGTH_FOR_RATIO) {
    const ratio = localeLen / sourceLen;
    if (ratio < threshold) {
      warnings.push({
        locale: localeId,
        type: "length_ratio",
        path: sourceEntry.path,
        ratio: Number(ratio.toFixed(3)),
        sourceLength: sourceLen,
        targetLength: localeLen,
        source: sourceEntry.value,
        target: localeEntry.value
      });
    }
  }

  if (sourceLen >= CLAUSE_MIN_BASE_LENGTH) {
    const sourceClauses = countClauseMarkers(sourceEntry.value);
    const localeClauses = countClauseMarkers(localeEntry.value);
    if (sourceClauses >= 3 && localeClauses <= sourceClauses - 2) {
      warnings.push({
        locale: localeId,
        type: "clause_density",
        path: sourceEntry.path,
        sourceClauses,
        targetClauses: localeClauses,
        source: sourceEntry.value,
        target: localeEntry.value
      });
    }
  }
};

const runSemanticChecks = (localeId, localeMessages) => {
  const sourceStrings = flattenStrings(source);
  const localeStrings = flattenStrings(localeMessages);
  const localeStringMap = new Map(localeStrings.map((entry) => [entry.path, entry.value]));

  checkSemanticAnchors(localeId, localeStringMap);

  for (const sourceEntry of sourceStrings) {
    const localeValue = localeStringMap.get(sourceEntry.path);
    if (typeof localeValue !== "string") continue;

    const localeEntry = { path: sourceEntry.path, value: localeValue };
    checkPunctuationIntent(localeId, sourceEntry, localeEntry);
    checkHeuristicWarnings(localeId, sourceEntry, localeEntry);
  }
};

const checkBrandLocalizationLeaks = (localeId, localizedMessages) => {
  if (localeId === "en") return;

  const localizedStrings = flattenStrings(localizedMessages);
  for (const entry of localizedStrings) {
    if (shouldSkipBrandLeakPath(entry.path) || allowSameValue(entry.value)) {
      continue;
    }

    if (hasEnglishBrandLeak(entry.value)) {
      errors.push(
        `[${localeId}] English brand token leaked at "${entry.path}" after localization: "${entry.value}"`
      );
    }
  }
};

const walk = (baseNode, localeNode, localeId, currentPath) => {
  const baseType = getType(baseNode);
  const localeType = getType(localeNode);

  if (baseType !== localeType) {
    errors.push(`[${localeId}] Type mismatch at "${currentPath}": expected ${baseType}, received ${localeType}`);
    return;
  }

  if (baseType === "string") {
    const basePlaceholders = findPlaceholders(baseNode);
    const localePlaceholders = findPlaceholders(localeNode);
    if (basePlaceholders.join("|") !== localePlaceholders.join("|")) {
      errors.push(
        `[${localeId}] Placeholder mismatch at "${currentPath}": expected [${basePlaceholders.join(", ")}], received [${localePlaceholders.join(", ")}]`
      );
    }

    if (baseNode === localeNode && !skipEqualityPath(currentPath) && !allowSameValue(localeNode)) {
      errors.push(`[${localeId}] Unlocalized string at "${currentPath}": "${localeNode}"`);
    }
    return;
  }

  if (baseType === "array") {
    if (baseNode.length !== localeNode.length) {
      errors.push(
        `[${localeId}] Array length mismatch at "${currentPath}": expected ${baseNode.length}, received ${localeNode.length}`
      );
      return;
    }

    for (let i = 0; i < baseNode.length; i += 1) {
      walk(baseNode[i], localeNode[i], localeId, `${currentPath}[${i}]`);
    }
    return;
  }

  if (baseType === "object") {
    const baseKeys = Object.keys(baseNode);
    const localeKeys = new Set(Object.keys(localeNode));

    for (const key of baseKeys) {
      if (!(key in localeNode)) {
        errors.push(`[${localeId}] Missing key at "${currentPath}.${key}"`);
        continue;
      }
      walk(baseNode[key], localeNode[key], localeId, `${currentPath}.${key}`);
      localeKeys.delete(key);
    }

    for (const extra of localeKeys) {
      errors.push(`[${localeId}] Unexpected key at "${currentPath}.${extra}"`);
    }
  }
};

const writeWarningsReport = () => {
  const reportDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../reports");
  fs.mkdirSync(reportDir, { recursive: true });

  const warningCountByLocale = {};
  for (const warning of warnings) {
    warningCountByLocale[warning.locale] = (warningCountByLocale[warning.locale] ?? 0) + 1;
  }

  const report = {
    generatedAt: new Date().toISOString(),
    warningCount: warnings.length,
    warningCountByLocale,
    warnings
  };

  const reportPath = path.join(reportDir, "i18n-semantic-report.json");
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  return reportPath;
};

const escapedUnicodeFiles = findEscapedUnicodeFiles();
if (escapedUnicodeFiles.length > 0) {
  errors.push(
    `Escaped Unicode literals (\\uXXXX) found in: ${escapedUnicodeFiles.join(", ")}. Use direct UTF-8 script text.`
  );
}

for (const locale of locales) {
  scanCorruption(MESSAGES[locale], locale, "messages");
  const localizedMessages = localizeBrandInMessages(MESSAGES[locale], locale);
  if (locale === "en") continue;
  walk(source, MESSAGES[locale], locale, "messages");
  runSemanticChecks(locale, MESSAGES[locale]);
  checkBrandLocalizationLeaks(locale, localizedMessages);
}

const reportPath = writeWarningsReport();
if (warnings.length > 0) {
  console.warn(`i18n semantic warnings: ${warnings.length}. Review report: ${reportPath}`);
}

if (errors.length > 0) {
  console.error("i18n audit failed:");
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

console.log("i18n audit passed: structure, placeholders, UTF-8 literals, and blocking semantic checks are valid.");
