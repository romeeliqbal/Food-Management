# AGENTS.md

## Project overview

This repository is a lightweight static front-end mockup for a food management and inventory interface. The app is built using plain HTML, CSS, and JavaScript with no framework, package manager, or build pipeline.

## Key files

- [index.html](index.html): main page structure and UI content.
- [style.css](style.css): all visual styling, layout, and component appearance.
- [script.js](script.js): optional JavaScript behavior; keep it minimal and DOM-based.
- [README.md](README.md): use it for additional description or context if needed.

## Working conventions

- Keep changes consistent with the existing static-site approach.
- Prefer editing markup in [index.html](index.html) and styling in [style.css](style.css); avoid introducing framework dependencies.
- Preserve the current design language: warm neutral backgrounds, bordered cards, soft shadows, serif headings, and simple rounded controls.
- If adding interactivity, keep it small and straightforward with vanilla JavaScript in [script.js](script.js).
- Maintain accessibility basics such as meaningful labels, alt text, and readable contrast.

## Validation workflow

- There is no automated test suite or build command configured for this project.
- Confirm UI changes by opening [index.html](index.html) in a browser or using a local preview extension such as Live Server.
- Check the layout visually at desktop widths before making responsive adjustments.

## Preferred change pattern

1. Update HTML structure in [index.html](index.html) for new sections or content.
2. Add or adjust visual styling in [style.css](style.css).
3. Use [script.js](script.js) only for lightweight behavior such as form actions or small UI improvements.

## Guardrails

- Do not add a framework or package setup unless the task explicitly requires it.
- Do not duplicate logic across files; keep structure, styling, and behavior separated.
- Keep the project easy to understand for a student or beginner-level static web assignment.
