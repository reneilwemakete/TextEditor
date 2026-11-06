# TextEditor

A lightweight, browser-based rich text editor designed and developed by Reneilwe Makete.

## Features

- Bold and italic formatting on selected text, plus paragraph alignment
- Uppercase and lowercase conversion of selected text
- Create and edit documents directly in the browser
- Import plain text files up to 2 MB
- Download plain text or export an HTML document with formatting
- Automatically save the current draft in the browser using localStorage
- Word and character counts
- Responsive interface with keyboard-friendly controls

## Run locally

Open `index.html` in a browser. No build step, backend, framework or credentials are required. For local development you can also serve the folder with any static web server.

## Run tests

Requires Node.js 18 or later:

```sh
node --check home.js
node --test tests/editor-utils.test.cjs
```

The tests cover document utility functions. They do **not** replace manual browser checks of formatting, import/export, autosave and mobile layout.

## Important details

- The editor saves drafts only to the current browser's local storage. Browser storage can be cleared, so download important work.
- `.txt` exports contain plain text and do not retain formatting; `.html` exports retain supported basic formatting.
- The import feature accepts plain text files only. It never executes imported markup.
- Formatting uses the browser's built-in editing commands for broad compatibility. Those APIs are legacy, so browser testing remains important.
- This is a standalone frontend project, not a collaborative cloud document editor.

## Technologies

HTML, CSS, vanilla JavaScript, browser Selection API, localStorage, Node.js built-in test runner.
