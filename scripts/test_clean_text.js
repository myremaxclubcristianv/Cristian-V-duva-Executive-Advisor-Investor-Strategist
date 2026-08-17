function cleanText(input) {
  if (!input || typeof input !== "string") return "";

  let text = input;

  // 1. Decode common HTML entities
  text = text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—");

  // 2. Remove Markdown headers
  text = text.replace(/^[ \t]*#{1,6}[ \t]+/gm, "");
  text = text.replace(/(^|\s)#{1,6}[ \t]+/g, "$1");

  // 3. Remove Markdown blockquote symbols
  text = text.replace(/^[ \t]*>[ \t]*/gm, "");

  // 4. Remove bullet lists and numbered lists at line start
  text = text.replace(/^[ \t]*[-*+•][ \t]+/gm, "");
  text = text.replace(/^[ \t]*\d+\.[ \t]+/gm, "");

  // 5. Remove Markdown images and links
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // 6. Remove Markdown code blocks & inline backticks
  text = text.replace(/```[a-zA-Z]*\n([\s\S]*?)```/g, "$1");
  text = text.replace(/`([^`]+)`/g, "$1");
  text = text.replace(/`/g, "");

  // 7. Remove Markdown bold/italic
  text = text.replace(/\*\*\*([^*\n]+)\*\*\*/g, "$1");
  text = text.replace(/\*\*([^*\n]+)\*\*/g, "$1");
  text = text.replace(/___([^_\n]+)___/g, "$1");
  text = text.replace(/__([^_\n]+)__/g, "$1");
  text = text.replace(/\*([^*\n]+)\*/g, "$1");
  text = text.replace(/_([^_\n]+)_/g, "$1");

  // 8. Remove stray backslashes, artificial escaped syntax, and truncation markers
  text = text.replace(/\\n/g, " ");
  text = text.replace(/\\([*#_`[\]()\-+>|])/g, "$1");
  text = text.replace(/\\+$/gm, "");
  text = text.replace(/\[\.\.\.\]/g, "…");
  text = text.replace(/\(\.\.\.\)/g, "…");

  // 9. Remove any remaining isolated stray asterisks, hashes, or dashes
  text = text.replace(/(^|\s)\*{1,3}(\s|$)/g, "$1$2");
  text = text.replace(/(^|\s)#{1,6}(\s|$)/g, "$1$2");

  // 10. Normalize spaces, linebreaks, and trim
  text = text.replace(/\r\n|\r/g, "\n");
  text = text.replace(/[ \t]+/g, " ");
  text = text.replace(/\n\s+/g, "\n");
  text = text.replace(/\s+\n/g, "\n");
  text = text.replace(/\n{2,}/g, " ").trim();

  return text;
}

const testCases = [
  {
    input: "## Date Cheie de Piață\n- **Indicele BET**: Reprezintă evoluția principalelor companii.",
    expected: "Date Cheie de Piață\nIndicele BET: Reprezintă evoluția principalelor companii.",
  },
  {
    input: "### 1. Titlu Important\n* **Piața Imobiliară**: Creștere de *+8%* în 2026.",
    expected: "Titlu Important\nPiața Imobiliară: Creștere de +8% în 2026.",
  },
  {
    input: "#### Dispecerat Macro\n> Informații oficiale furnizate de [BNR](https://bnr.ro) `ROBOR 3M`.",
    expected: "Dispecerat Macro\nInformații oficiale furnizate de BNR ROBOR 3M.",
  },
  {
    input: "***Analiză Exclusivă***: Piața din București [...] rămâne solidă.\\n",
    expected: "Analiză Exclusivă: Piața din București … rămâne solidă.",
  },
  {
    input: "Articol cu entități &amp; ghilimele &quot;lux&quot; și apostrof &#x27;Nord&#x27;.",
    expected: "Articol cu entități & ghilimele \"lux\" și apostrof 'Nord'.",
  },
];

console.log("=== UNIT TESTING UNIVERSAL CONTENT SANITIZER ===");
let passed = 0;

testCases.forEach((tc, idx) => {
  const result = cleanText(tc.input);
  const ok = result === tc.expected;
  if (ok) {
    console.log(`✅ Case ${idx + 1} Passed: "${result.replace(/\n/g, '\\n')}"`);
    passed++;
  } else {
    console.log(`❌ Case ${idx + 1} Failed:`);
    console.log(`   Input:    "${tc.input.replace(/\n/g, '\\n')}"`);
    console.log(`   Expected: "${tc.expected.replace(/\n/g, '\\n')}"`);
    console.log(`   Actual:   "${result.replace(/\n/g, '\\n')}"`);
  }
});

console.log(`\nResult: ${passed}/${testCases.length} Passed`);
if (passed === testCases.length) {
  process.exit(0);
} else {
  process.exit(1);
}
