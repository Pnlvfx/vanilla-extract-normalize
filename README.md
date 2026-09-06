# 🧼 Vanilla Extract Normalize

> A modern CSS normalization library built specifically for [Vanilla Extract](https://vanilla-extract.style/) projects.

[![npm version](https://img.shields.io/npm/v/vanilla-extract-normalize.svg)](https://www.npmjs.com/package/vanilla-extract-normalize)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📦 Installation

```bash
npm install vanilla-extract-normalize
# or
pnpm add vanilla-extract-normalize
```

> **Note**: This package requires `@vanilla-extract/css` as a peer dependency.

---

## 🚀 Usage

This package provides **two normalization options**:

| Import Path                                    | Description                                                 |
| ---------------------------------------------- | ----------------------------------------------------------- |
| `vanilla-extract-normalize/recommended`        | Modern-normalize inspired base (lighter, minimal)           |
| `vanilla-extract-normalize/tailwind/preflight` | Complete Tailwind preflight recreation (more comprehensive) |

### Option 1: Recommended (modern-normalize style)

```ts
// app.css.ts
import 'vanilla-extract-normalize/recommended';

// Your styles here...
export const container = style({
  padding: '1rem',
});
```

This is a direct port of [modern-normalize](https://github.com/sindresorhus/modern-normalize) — a lightweight, minimal normalization that only fixes browser inconsistencies without adding extra opinions.

### Option 2: Tailwind Preflight

```ts
// app.css.ts
import 'vanilla-extract-normalize/tailwind/preflight';

// Your styles here...
export const container = style({
  padding: '1rem',
});
```

This is a **complete 1:1 recreation of Tailwind's preflight** (`@preflight`). It's more opinionated and comprehensive, matching exactly what Tailwind applies under the hood.

---

## ✨ Features Comparison

| Feature | Recommended | Tailwind Preflight |
| ------------------------------ | :--------------------------: | :------------------------: | --- |
| **Box Sizing** | `border-box` on all elements | ✅ | ✅ |
| **Margin/Padding Reset** | ❌ | ✅ |
| **Border Reset** | ❌ | ✅ |
| **System Font Stack** | ✅ (system-ui) | ✅ (Tailwind's stack) |
| **Form Element Normalization** | Basic | Comprehensive |
| **Button Appearance Reset** | Basic | Full |
| **File Input Styling** | ❌ | ✅ |
| **Placeholder Styling** | ❌ | ✅ |
| **Hidden Attribute Support** | ❌ | ✅ (`until-found` support) |
| **Interactive Cursors** | ❌ | ✅ |
| **Media Element Defaults** | ❌ | ✅ |
| **List Style Reset** | ❌ | ✅ |
| **Table Border Inheritance** | ✅ | ✅ |
| **Bundle Size** | 🟢 Smaller | 🟡 Larger |

---

## 📋 Detailed Breakdown

### 🎨 Recommended (modern-normalize style)

Located at `src/recommended.css.ts`, this is a faithful port of [modern-normalize](https://github.com/sindresorhus/modern-normalize):

```ts
// What it includes:
- ✅ Universal box-sizing: border-box
- ✅ HTML/body font normalization
- ✅ Bold element consistency
- ✅ Monospace font stack for code elements
- ✅ Sub/sup positioning
- ✅ Table border color inheritance
- ✅ Form element font inheritance
- ✅ Button appearance normalization
- ✅ Progress element alignment
- ✅ WebKit spin button removal
- ✅ Search input normalization
- ✅ File upload button styling
- ✅ Summary display as list-item
```

### 🎯 Tailwind Preflight

Located at `src/tailwind/preflight.css.ts`, this is a **complete 1:1 recreation of Tailwind's preflight**:

```ts
// What it includes (everything from recommended, plus):
- ✅ Margin/padding reset on all elements
- ✅ Border reset to '0 solid'
- ✅ Tab size: 4
- ✅ Webkit tap highlight color: transparent
- ✅ HR element normalization
- ✅ Abbr[title] underline dotted
- ✅ Heading font size/weight inheritance
- ✅ Link color/text decoration inheritance
- ✅ Small text: 80%
- ✅ Textarea vertical resize only
- ✅ Placeholder opacity and color
- ✅ Disabled state cursor: default
- ✅ Button/interactive elements cursor: pointer
- ✅ Media elements: block + vertical-align: middle
- ✅ Images/video: max-width: 100%, height: auto
- ✅ List style: none
- ✅ Hidden attribute with until-found support
- ✅ :host selector support
- ✅ ::backdrop pseudo-element support
- ✅ ::file-selector-button support
- ✅ :where() selector usage
- ✅ Firefox focus ring handling
- ✅ Firefox :-moz-ui-invalid shadow removal
```

---

## 🎯 When to Use Which?

### Choose **Recommended** if:

- ✅ You want a minimal, lightweight normalization
- ✅ You prefer to add your own resets incrementally
- ✅ You're already using modern-normalize in CSS projects
- ✅ Bundle size is critical

### Choose **Tailwind Preflight** if:

- ✅ You're migrating from Tailwind CSS
- ✅ You want the exact same base as Tailwind
- ✅ You prefer a more opinionated, comprehensive reset
- ✅ You want to avoid writing additional resets
- ✅ You need features like placeholder styling and file input normalization

---

## 🏗️ Project Structure

```
vanilla-extract-normalize/
├── src/
│   ├── recommended.css.ts        # Modern-normalize style (lightweight)
│   └── tailwind/
│       └── preflight.css.ts      # Complete Tailwind preflight recreation
├── dist/                         # Compiled output
├── README.md                      # This file
└── package.json
```

---

## 🌐 Browser Support

| Browser        | Version |
| -------------- | ------- |
| Chrome         | ✅ 60+  |
| Firefox        | ✅ 52+  |
| Safari         | ✅ 12+  |
| Edge           | ✅ 79+  |
| iOS Safari     | ✅ 12+  |
| Android Chrome | ✅ 90+  |

---

## 📄 License

MIT © [Simone Gauli](https://github.com/simonegauli)

---

## 🙏 Acknowledgments

- **[modern-normalize](https://github.com/sindresorhus/modern-normalize)** by Sindre Sorhus — for the recommended base
- **[Tailwind CSS](https://tailwindcss.com/)** — for the preflight implementation
- **[Vanilla Extract](https://vanilla-extract.style/)** — for the amazing zero-runtime CSS-in-JS library

---

_Made with ❤️ for the Vanilla Extract community_
