(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.TextEditorUtils = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  function safeFileName(input) {
    const cleaned = String(input || "").replace(/[\\/:*?"<>|\x00-\x1F]/g, "").trim().replace(/\s+/g, "-").slice(0, 75);
    return cleaned || "untitled-document";
  }
  function countWords(input) {
    const trimmed = String(input || "").trim();
    return trimmed ? trimmed.split(/\s+/u).length : 0;
  }
  function escapeHtml(input) {
    return String(input).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function buildHtmlDocument(title, bodyHtml) {
    return '<!doctype html>\n<html lang="en">\n<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' +
      escapeHtml(title) +
      '</title><style>body{font-family:Georgia,serif;max-width:760px;margin:60px auto;padding:0 24px;line-height:1.7;color:#222;overflow-wrap:anywhere}</style></head>\n<body>\n' +
      bodyHtml + '\n</body></html>';
  }
  return { safeFileName, countWords, escapeHtml, buildHtmlDocument };
});
