---
name: talkscript-content
description: Generate educational grammar content for TalkScript using JavaScript metaphors
metadata:
  version: "3.0.0"
  author: "Jordy Castro"
---

# TalkScript Content Generator

Generate Spanish-language educational content explaining English grammar through JavaScript programming metaphors.

> Global rules (language, tone, audience, MDX standards, prohibited elements) are defined in [`AGENTS.md`](../../../AGENTS.md). This skill covers only content-specific rules.

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
3. **Visual patterns** — Code shows structure, never executable logic
4. **Consistency** — Uniform section order across all pages
5. **Practical examples** — Real-world usage with Spanish translations
6. **Strategic tabs** — Use `<Tabs>` to reduce scrolling, not to decorate

---

## JavaScript Metaphors

Use programming concepts only when they genuinely clarify a grammar concept:

- Objects → conjugation tables
- Arrays → word order sequences
- Functions → form transformations (affirmative → negative → question)
- Pattern matching → grammar rules
- Type systems → word categories (noun, verb, adjective…)

Never force a metaphor. If it doesn't arise naturally, skip it.

---

## Component Usage

### `<Aside>`

- Always include a descriptive `title` — never a generic label like "Nota" alone
- Allowed types: `note`, `tip`, `warning`, `danger`

### `<Card>` / `<CardGrid>`

- Only for grouping conceptual information
- Never place code blocks inside `<Card>`

### Code Blocks

- Language: always `javascript`
- Maximum 10 lines per block, ~50 characters per line
- No more than 3 code blocks per major section
- Identifiers must be in English
- Allowed directly in document flow or inside `<TabItem>` — never inside `<Card>`

### `<Tabs>` / `<TabItem>`

- Use to group related variations: affirmative/negative/interrogative, tenses, formality levels
- Each `<TabItem>` must be self-contained — its own explanation and examples
- Include a code block per tab when applicable

---

## Document Structure

Every content page must follow this exact section order:

### 1. Frontmatter

Follow [`templates/frontmatter.md`](templates/frontmatter.md).

### 2. Import Statement

```javascript
import { ComponentA, ComponentB } from "@astrojs/starlight/components";
```

Import only components that appear in the file.

### 3. Introduction

One paragraph maximum. Explain the topic and its relevance. Add a JavaScript metaphor only if it arises naturally.

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
- [ ] Single introduction paragraph
- [ ] Sections follow the required order
- [ ] "Errores comunes" matches [`templates/common-errors.md`](templates/common-errors.md)
- [ ] "Práctica" matches [`templates/practice.md`](templates/practice.md) and is last

**Content**

- [ ] Inline examples match [`templates/examples.md`](templates/examples.md)
- [ ] No code inside `<Card>` components
- [ ] All `<Aside>` components have descriptive titles
- [ ] Code blocks within line and character limits
- [ ] All code identifiers in English

**Global compliance** (see [`AGENTS.md`](../../../AGENTS.md))

- [ ] All prose in Spanish, all code identifiers in English
- [ ] No prohibited elements (emojis outside "Errores comunes", strikethrough, native tables, native alerts)
- [ ] Valid MDX — blank lines around components, self-closing tags, correct nesting
