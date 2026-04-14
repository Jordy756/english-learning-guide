---
name: talkscript-js-content
description: >
  Generate the JavaScript visual layer for TalkScript lessons.
  Trigger: Use when writing JavaScript code blocks, code inside tabs or cards, visual data structures, helper functions, classes, arrays, objects, conditionals, or any JS-only example.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0.0"
---

# TalkScript JavaScript Content Generator

Generate JavaScript-only visual examples for TalkScript. These snippets are educational illustrations, not production logic. Use them to show structure, contrast, or progression in a way that supports the written explanation from [talkscript-content](../talkscript-content/SKILL.md).

> Written prose, examples in Spanish, and section order belong to talkscript-content. This skill owns the JavaScript layer only.

---

## When to Use

- Building a JavaScript block for a grammar lesson
- Adding code inside `<TabItem>` when the tab is used to separate visual patterns
- Creating code inside `<Card>` when the card is intentionally code-centered
- Replacing repetitive snippets with a clearer JS structure
- Choosing the best native JavaScript construct for the grammar idea

## Critical Patterns

1. Use JavaScript only, never TypeScript
2. Prefer `const` and `let`; do not use type annotations, interfaces, enums, generics, or other TS-only syntax
3. Keep identifiers in English and descriptive
4. Choose the JS structure that best visualizes the grammar idea; do not default to objects for everything
5. Keep snippets short and readable; target 10 lines or fewer unless the page needs one compact multi-line pattern
6. Use code to illustrate structure, comparison, or transformation, not to perform real application work
7. Vary the structure across the page so repeated blocks do not look identical
8. When code sits inside tabs or cards, make it self-contained and understandable without extra context

### Preferred Structures

| Grammar idea                     | Good JS shape                  |
| -------------------------------- | ------------------------------ |
| Forms, conjugations, or variants | `object` with descriptive keys |
| Order or sequencing              | `array` of strings             |
| Transformation rules             | `function` or arrow function   |
| Choice or context                | `if / else` or ternary         |
| Sentence templates               | template literal               |
| Categories or grouped rules      | object with nested arrays      |
| Reusable pattern with state      | `class`                        |
| Lookups or quick references      | object or `Map`                |

## Code Examples

```javascript
const forms = {
  affirmative: "She works",
  negative: "She does not work",
};
```

```javascript
const makeQuestion = (subject, verb) => `${subject} ${verb}?`;
```

```javascript
class Pattern {
  constructor(name) {
    this.name = name;
  }
}
```

## Component Guidance

### `<TabItem>`

- Use for comparing variations like affirmative, negative, interrogative, or before/after patterns
- Each tab must still make sense on its own
- Keep the code inside the tab focused on one visual idea

### `<Card>`

- Use only when the card genuinely helps group a code pattern or variation
- Keep the card centered on one code idea
- If the card is mostly prose, move that prose to talkscript-content

## Validation Checklist

- [ ] The code is JavaScript, not TypeScript
- [ ] Identifiers are in English
- [ ] The snippet is short and visually clear
- [ ] The structure matches the grammar idea
- [ ] Repeated blocks are not using the same shape without reason
- [ ] Code inside tabs or cards is self-contained
- [ ] The written explanation stays in talkscript-content
