---
name: talkscript-content
description: >
  Generate the written part of TalkScript lessons.
  Trigger: Use when writing explanations, introductions, examples, notes, cards, common errors, practice, or any non-code lesson text.
metadata:
  version: "3.0.0"
  author: "Jordy Castro"
---

# TalkScript Written Content Generator

Generate Spanish-language educational content explaining English grammar in plain, accessible language. This skill handles prose and lesson structure only; any JavaScript visual example belongs to [talkscript-js-content](../talkscript-js-content/SKILL.md).

> Written-content rules live here, and the JavaScript visual rules live in talkscript-js-content.

---

## Templates — Read Before Writing

Before generating any content, read and follow these template files exactly:

- [`templates/frontmatter.md`](templates/frontmatter.md) — Frontmatter structure
- [`templates/common-errors.md`](templates/common-errors.md) — "Errores comunes" section
- [`templates/practice.md`](templates/practice.md) — "Práctica" section
- [`templates/examples.md`](templates/examples.md) — Inline text examples

---

## Core Principles

1. **Clarity over cleverness** — Direct, accessible explanations
2. **Brevity** — 3 to 5 minute read maximum per page
3. **Consistency** — Uniform section order across all pages
4. **Practical examples** — Real-world usage with Spanish translations
5. **Strategic tabs** — Use `<Tabs>` to reduce scrolling, not to decorate
6. **Separation of concerns** — Do not invent JavaScript blocks here; hand them off to talkscript-js-content

---

## Component Usage

### `<Aside>`

- Always include a descriptive `title` — never a generic label like "Nota" alone
- Allowed types: `note`, `tip`, `caution`, `danger`

### `<Card>` / `<CardGrid>`

- Only for grouping conceptual information

### Code Boundary

- If a page needs a JavaScript block, stop here and use talkscript-js-content for that snippet
- Do not write `javascript` fences in this skill
- Do not place any code inside `<Card>` components

### `<Tabs>` / `<TabItem>`

- Use to group related variations: affirmative/negative/interrogative, tenses, formality levels
- Each `<TabItem>` must be self-contained with its own explanation and examples
- If a tab needs code, generate that code with talkscript-js-content and keep the written explanation here

---

## Document Structure

Every content page must follow this exact section order:

### 1. Frontmatter

Follow [`templates/frontmatter.md`](templates/frontmatter.md).

### 2. Import Statement

Import only the components that appear in the file.

### 3. Introduction

One paragraph, minimum 3 lines and maximum 4 lines. Explain what the topic is, when it is used, and why it matters for the learner. Plain language only — no programming references.

### 4. Main Content

- **Simple topics** — 2 to 3 sections
- **Intermediate topics** — sections with strategic `<Tabs>`
- **Complex topics** — as many sections as needed, never pad

Separate major sections with `---`.

### 5. "Errores comunes"

Follow [`templates/common-errors.md`](templates/common-errors.md). Heading: `## Errores comunes`.

### 6. "Práctica"

Follow [`templates/practice.md`](templates/practice.md). Heading: `## Práctica`. Always last.

---

## Inline Text Examples

Follow [`templates/examples.md`](templates/examples.md). Place after explanations or code blocks.

- **Bold** only the word(s) illustrating the grammar point
- Spanish translation in parentheses at the end of each item
- 3 to 5 examples per block, varying subjects and contexts

---

## Text Formatting

- **Bold** for key grammar terms introduced for the first time
- `inline code` for short English examples embedded in prose
- Short paragraphs — 2 to 4 sentences maximum

---

## Validation Checklist

Run this before delivering any generated or modified file.

**Structure**

- [ ] Frontmatter matches [`templates/frontmatter.md`](templates/frontmatter.md)
- [ ] Only used components are imported
- [ ] Introduction is one paragraph between 3 and 4 lines
- [ ] Sections follow the required order
- [ ] "Errores comunes" matches [`templates/common-errors.md`](templates/common-errors.md)
- [ ] "Práctica" matches [`templates/practice.md`](templates/practice.md) and is last

**Content**

- [ ] Inline examples match [`templates/examples.md`](templates/examples.md)
- [ ] No code inside `<Card>` components
- [ ] No programming metaphors or developer jargon in prose
- [ ] All `<Aside>` components have descriptive titles

**Global compliance** (see [`AGENTS.md`](../../../AGENTS.md))

- [ ] All prose is in Spanish
- [ ] No prohibited elements (emojis outside "Errores comunes", strikethrough, native tables, native alerts)
- [ ] Valid MDX — blank lines around components, self-closing tags, correct nesting
