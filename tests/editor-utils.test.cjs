const test = require("node:test");
const assert = require("node:assert/strict");
const { safeFileName, countWords, escapeHtml, buildHtmlDocument } = require("../editor-utils.js");

test("word count ignores whitespace-only content", () => {
  assert.equal(countWords("  \n  "), 0);
  assert.equal(countWords("Hello   world\nagain"), 3);
});
test("filename sanitation removes illegal path characters", () => {
  assert.equal(safeFileName('  Notes: / November?  '), "Notes-November");
  assert.equal(safeFileName("   "), "untitled-document");
});
test("escape HTML prevents markup injection", () => {
  assert.equal(escapeHtml('<script>"&</script>'), '&lt;script&gt;&quot;&amp;&lt;/script&gt;');
});
test("HTML export escapes the document title", () => {
  const html = buildHtmlDocument('<img src=x>', '<strong>Hello</strong>');
  assert.ok(html.includes("&lt;img src=x&gt;"));
  assert.ok(html.includes("<strong>Hello</strong>"));
  assert.ok(!html.includes("<title><img"));
});
