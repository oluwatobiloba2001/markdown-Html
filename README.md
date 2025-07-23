

# 📄 Markdown to HTML Converter

A simple web application that converts [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax into clean, readable HTML. It provides a live preview and raw HTML output as you type.

---

## ✨ Features

* Converts Markdown headings (`#`, `##`, `###`, etc.) to `<h1>` through `<h6>`
* Supports:

  * **Bold** (`**text**` or `__text__`)
  * *Italic* (`*text*` or `_text_`)
  * [Links](https://example.com)
  * ![Images](https://example.com/image.jpg)
  * > Blockquotes
* Real-time:

  * HTML code output
  * Rendered preview

---

## 🖥️ Live Demo

Paste Markdown in the **textarea**, and see:

* The raw HTML in one panel
* A live-rendered HTML preview in another

---

## 📁 Project Structure

```
project-folder/
│
├── index.html         # Main HTML structure
├── styles.css         # Responsive styling
└── script.js          # Markdown to HTML converter logic
```

---

## 🚀 How It Works

### 🧠 JavaScript (`script.js`)

The `convertMarkdown()` function:

* Uses **regular expressions** to:

  * Detect and convert headings
  * Replace Markdown symbols with their corresponding HTML tags
* Updates:

  * `#html-output` with raw HTML code
  * `#preview` with rendered HTML

### 🖼️ HTML (`index.html`)

* Input area (`<textarea>`) for Markdown
* Two output sections:

  * Raw HTML (`<div id="html-output">`)
  * Rendered HTML (`<div id="preview">`)

### 🎨 CSS (`styles.css`)

* Clean and responsive layout using Flexbox
* Media queries for larger screens
* Code-friendly output with `white-space: pre-wrap` for HTML

---

## 📦 Installation & Usage

1. **Clone or download** the repository
2. Open `index.html` in your browser
3. Start typing Markdown in the input box!

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (with responsive design)
* Vanilla JavaScript (ES6+)
* Regular Expressions for parsing

---

## 🧪 Example

### Input (Markdown):

```markdown
# Hello World
This is **bold**, *italic*, and a [link](https://example.com).
> Quote

![Alt](image.jpg)
```

### Output (HTML Preview):

```html
<h1>Hello World</h1>
<p>This is <strong>bold</strong>, <em>italic</em>, and a <a href="https://example.com">link</a>.</p>
<blockquote>Quote</blockquote>
<img alt="Alt" src="image.jpg">
```

---

## 📄 License

This project is open-source and free to use under the [MIT License](https://choosealicense.com/licenses/mit/).
