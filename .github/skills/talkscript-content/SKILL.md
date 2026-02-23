---
name: talkscript-content
description: Generate educational grammar content for TalkScript using JavaScript metaphors
metadata:
  version: "2.1.0"
  author: "Jordy Castro"
---

# TalkScript Content Generator

Generate Spanish-language educational content explaining English grammar through JavaScript programming metaphors for Spanish-speaking learners.

## Context

**Audience**: Spanish speakers learning English (beginner to advanced)
**Stack**: Astro + Starlight documentation framework
**Output language**: Spanish (code identifiers in English)
**Philosophy**: Code visualizes patterns, not executable logic

---

## Templates — Read Before Writing

Before generating any content, read the following template files and follow them exactly. These define the precise MDX blocks to use. Do not deviate from them.

- `templates/frontmatter.md` — Frontmatter structure and rules
- `templates/common-errors.md` — "Errores comunes" section format
- `templates/practice.md` — "Práctica" section format
- `templates/examples.md` — Inline text examples format

---

## Core Principles

1. **Clarity over cleverness** — Direct, accessible explanations
2. **Brevity** — 3 to 5 minute read maximum per page
3. **Visual patterns** — Show structure through code examples
4. **Consistency** — Uniform structure across all topics
5. **Practical examples** — Real-world English usage with Spanish translations
6. **Strategic organization** — Use tabs to prevent information overload

---

## JavaScript Metaphors

Use programming concepts only when they genuinely clarify grammar:

- Objects → conjugation tables
- Arrays → word order
- Functions → transformations (affirmative → negative → question)
- Pattern matching → grammar rules
- Destructuring → sentence analysis
- Type systems → word categories

Never force a metaphor. If it doesn't arise naturally, skip it.

---

## Component Usage

### Allowed Components

Starlight built-ins only:

- `<Tabs>` / `<TabItem>` — Variations (tenses, forms, formality levels)
- `<Aside>` — Contextual information (note, tip, warning, danger)
- `<Card>` / `<CardGrid>` — Grouping related concepts
- `<Steps>` — Sequential instructions
- `<LinkCard>` — Navigation links
- `<Badge>` — Inline labels

### `<Aside>` Rules

- Always include a descriptive `title` attribute
- Title must explain the specific content — never generic labels like "Tip" or "Nota" alone
- Allowed types: `note`, `tip`, `warning`, `danger`
- Content inside can be text, lists, or anything that fits the context

### `<Card>` and `<CardGrid>` Rules

- Never place code blocks inside `<Card>` components
- Never use icons of any kind inside `<Card>` components
- Use only for grouping conceptual information

### Code Block Rules

- Never place inside `<Card>` components
- Allowed directly in document flow or inside `<TabItem>`
- Maximum 10 lines per block
- Maximum ~50 characters per line — avoid horizontal scroll
- All identifiers in English, never Spanish
- JavaScript syntax highlighting (` ```javascript `)
- Focus on data structures (objects, arrays), not executable logic
- Add brief inline comments when helpful
- No more than 3 code blocks per major section

### `<Tabs>` Rules

- Use to group related variations: affirmative/negative/interrogative, formality levels, tenses
- Each `<TabItem>` must be self-contained with its own explanation and examples
- Include a code block in each tab when applicable

### Prohibited

- Custom interactive components
- Emojis or decorative symbols anywhere — except ✅ and ⛔ exclusively inside "Errores comunes"
- Native Markdown tables — use code blocks or components instead
- Native Markdown alerts — use `<Aside>` instead
- Strikethrough (~~text~~) anywhere
- Icons inside `<Card>` components
- Executable logic in code blocks

---

## Document Structure

### 1. Frontmatter

Follow `templates/frontmatter.md` exactly.

### 2. Import Statement

```javascript
import { [only the components actually used] } from '@astrojs/starlight/components';
```

Only import what is used in the file.

### 3. Introduction

One paragraph maximum. Explain the topic and its relevance for the learner. Include a programming metaphor only if it arises naturally.

### 4. Main Content

Adapt structure to topic complexity:

- **Simple topics**: 2 to 3 main sections
- **Intermediate topics**: Main sections with strategic `<Tabs>` usage
- **Complex topics**: As many sections as needed — never add padding

Use `---` horizontal rules to visually separate major sections.

### 5. "Errores comunes" Section

Follow `templates/common-errors.md` exactly.

Section heading: `## Errores comunes`

### 6. "Práctica" Section

Follow `templates/practice.md` exactly.

Section heading: `## Práctica`

Always the last section in the document, placed after "Errores comunes".

---

## Inline Text Examples

Follow `templates/examples.md` exactly.

Place after explanations or code blocks to show real-world usage. Rules summary:

- Bold only the word(s) illustrating the grammar point
- Spanish translation in parentheses at the end of each item
- No emojis of any kind
- 3 to 5 examples per block, varying subjects and contexts

---

## Content Standards

### Tone

- Professional but approachable
- Direct and concise
- Encouraging but realistic
- Always use "tú" form (informal second person) in Spanish

### Text Formatting

- **Bold** for key grammar terms
- `inline code` for English grammar terms or short examples within prose
- ✅ and ⛔ only inside "Errores comunes" section
- Short paragraphs — 2 to 4 sentences maximum

---

## MDX Best Practices

- Leave blank lines before and after all component blocks
- Self-closing tags for `<Card>` and `<LinkCard>`
- Close `</TabItem>` and `</Tabs>` without extra indentation
- Validate that every `<Aside>` has a descriptive `title`

---

## Validation Checklist

**Structure**:
- [ ] Frontmatter matches `templates/frontmatter.md`
- [ ] Only used components are imported
- [ ] Single introduction paragraph
- [ ] `<Tabs>` used where it reduces scrolling
- [ ] "Errores comunes" section present and matches template
- [ ] "Práctica" section present, matches template, and is last

**Content**:
- [ ] All inline text examples match `templates/examples.md`
- [ ] No code inside `<Card>` components
- [ ] No icons inside `<Card>` components
- [ ] All `<Aside>` components have descriptive titles
- [ ] No emojis anywhere except ✅ and ⛔ in "Errores comunes"
- [ ] No strikethrough (~~)
- [ ] All code identifiers in English
- [ ] Code blocks within line and length limits

**Format**:
- [ ] Valid MDX syntax
- [ ] Proper spacing around all components
- [ ] Self-closing tags where required
- [ ] All content (outside code) written in Spanish
