/**
 * cleanText - Comprehensive universal sanitizer to eliminate any raw Markdown syntax,
 * AI formatting artifacts, stray symbols, or unescaped HTML entities from user-visible dynamic content.
 */
export function cleanText(input?: string | null): string {
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

  // 2. Remove Markdown headers (e.g. "# Heading", "## Subheading", "### Date Cheie de Piață")
  text = text.replace(/^[ \t]*#{1,6}[ \t]+/gm, "");
  text = text.replace(/(^|\s)#{1,6}[ \t]+/g, "$1");

  // 3. Remove Markdown blockquote symbols ("> ")
  text = text.replace(/^[ \t]*>[ \t]*/gm, "");

  // 4. Remove bullet lists and numbered lists at line start ("- ", "* ", "+ ", "1. ", "• ")
  text = text.replace(/^[ \t]*[-*+•][ \t]+/gm, "");
  text = text.replace(/^[ \t]*\d+\.[ \t]+/gm, "");

  // 5. Remove Markdown images and links: ![alt](url) -> "" and [Label](url) -> "Label"
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // 6. Remove Markdown code blocks & inline backticks
  text = text.replace(/```[a-zA-Z]*\n([\s\S]*?)```/g, "$1");
  text = text.replace(/`([^`]+)`/g, "$1");
  text = text.replace(/`/g, "");

  // 7. Remove Markdown bold/italic (***bolditalic***, **bold**, *italic*, ___bolditalic___, __bold__, _italic_)
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
