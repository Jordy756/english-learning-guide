---
name: talkscript-content
description: Educational content generator for TalkScript - English grammar guide using JavaScript metaphors
metadata:
  version: "1.0.0"
  author: "Jordy Castro"
---

# TalkScript Content Generator

Generate educational content for TalkScript, an English grammar guide that explains concepts using JavaScript programming metaphors for Spanish-speaking learners.

## Project Context

**Target Audience**: Spanish speakers learning English (all levels: beginner to advanced)
**Tech Stack**: Astro + Starlight documentation framework
**Content Language**: Spanish (instructions may be in English)
**Core Philosophy**: Code as pattern visualization, not executable logic

## Content Principles

### Golden Rules

1. **Clarity over cleverness**: Explanations must be direct and accessible
2. **Brevity is key**: Keep sections scannable (3-5 minute read maximum)
3. **Show, don't tell**: Use visual patterns and examples over lengthy explanations
4. **Consistency matters**: Maintain uniform structure across all topics
5. **Practical focus**: Every concept needs real-world English examples

### JavaScript Metaphors

Use programming concepts naturally when they clarify grammar:

- Objects for conjugation tables
- Arrays for word order
- Functions for transformations (affirmative → negative → question)
- Pattern matching for grammar rules
- Destructuring for sentence analysis
- Type systems for word categories

**Important**: Only use code metaphors when they genuinely help understanding. Not every topic needs JavaScript.

## Technical Constraints

### Required Components

Use **only** Starlight built-in components:

- `<Tabs>` / `<TabItem>` - For variations (tense, form, etc.)
- `<Aside>` - For tips, warnings, notes (types: tip, caution, danger, note)
- `<Card>` / `<CardGrid>` - For grouping related information
- `<Steps>` - For sequential instructions
- `<LinkCard>` - For navigation suggestions
- `<Badge>` - For inline labels

### Prohibited

- Custom interactive components
- Emojis or decorative symbols
- Native Markdown alerts (use `<Aside>` instead)
- Complex executable JavaScript functions
- More than 3 code blocks per major section

## Document Structure Guidelines

### Frontmatter (Required)
```yaml
---
title: [Topic name in Spanish]
description: [One-line description in Spanish]
---
```

### Import Statement (Required)
```javascript
import { [needed components] } from '@astrojs/starlight/components';
```

### Introduction (Required)

- 1-2 paragraphs maximum
- Explain what the topic is and why it matters
- Include a programming metaphor if natural

### Main Sections (Flexible)

**Adapt structure to content complexity**:

- Simple topics: 2-3 main sections (no subsections needed)
- Complex topics: Use subsections (###) when genuinely needed
- Use `---` horizontal rules to separate major sections visually

### Common Errors Section (Required)

- Always end with "Errores comunes" section
- Include exactly **1 or more common mistakes**
- Use `<Aside type="danger">` for each error
- Format: Show incorrect ~~example~~ → Correct **example**

## Code Usage Guidelines

### When to Use Code Blocks

- **DO**: Visualize patterns (conjugation tables, word order rules)
- **DO**: Show structure comparisons (affirmative vs negative)
- **DO**: Illustrate transformations (statement → question)
- **DON'T**: Write executable logic or complex functions
- **DON'T**: Use code for simple lists or examples

### Code Block Requirements

- Maximum 10 lines per block
- **Keep examples short and simple** to avoid horizontal scrolling
- Limit line length to approximately 50 characters when possible
- Include brief inline comments when helpful
- Use JavaScript syntax highlighting
- Focus on data structures (objects, arrays) over functions
- **Inside `<Tabs>`: Each `<TabItem>` should include code examples**

### Alternative Formats for Simple Patterns

For very simple transformations or rules, use plain text with visual indicators instead of code blocks

## Content Quality Standards

### Examples

**Code/Pattern Examples (within tabs or main explanations)**:
- Keep code examples **short and simple** to avoid horizontal scroll
- Use concise variable names and clear structure
- Limit line length to avoid scrolling
- Every code example must demonstrate the pattern clearly

**Additional Real-World Examples (after code blocks)**:
- Provide 3-5 practical examples per concept in plain text
- Use realistic, everyday contexts
- **Every English example must include Spanish translation in parentheses**
- Format: English text (Traducción en español)
- Show Spanish → English translation when relevant
- Vary the examples (don't repeat same subject/verb patterns)

### Tone and Voice

- Professional but approachable (technical mentor)
- Direct and concise (no fluff)
- Encouraging but realistic about difficulty
- Use "tú" form (second person informal) in Spanish

### Formatting

- Use **bold** for emphasis on key terms
- Use `code formatting` for English grammar terms and examples
- Use ~~strikethrough~~ for incorrect examples
- Keep paragraphs short (2-4 sentences maximum)

## Adaptation Rules

### Topic Complexity Assessment

Before generating content, evaluate:

- **Basic topics** (Verb To Be, Articles): Simple structure, minimal code
- **Intermediate topics** (Tenses, Modals): Moderate structure, strategic code use
- **Advanced topics** (Conditionals, Reported Speech): Complex structure, more subsections

### Subsection Guidelines

Create subsections (###) only when:

- Topic has 2+ distinct sub-concepts
- Each sub-concept needs separate explanation
- Improves scannability and navigation

**Don't create subsections** for:

- Single concepts with variations (use `<Tabs>` instead)
- Simple lists or examples
- Minor distinctions that fit in one section

## Output Validation

Before delivering content, verify:
- [ ] Frontmatter is complete and correct
- [ ] Imports include all used components
- [ ] Introduction is 1-2 paragraphs maximum
- [ ] Structure matches topic complexity (not all topics are identical)
- [ ] Exactly 1 or more common errors at the end
- [ ] No emojis or decorative symbols
- [ ] Code blocks are justified and minimal
- [ ] Code examples are short to avoid horizontal scrolling
- [ ] Each TabItem contains code examples
- [ ] Examples are practical and varied
- [ ] All English examples include Spanish translation
- [ ] Spanish language throughout (except frontmatter keys)
- [ ] No custom components used

## Example Workflow

**Input**: "Create content for Simple Present tense"

**Process**:

1. Assess complexity: Intermediate (has rules for he/she/it, negatives, questions)
2. Determine structure: Main sections for affirmative, negative, interrogative
3. Choose metaphors: Object for conjugation rules, pattern matching for transformations
4. Create code examples within each TabItem (keep short, avoid horizontal scroll)
5. Provide 3-5 real-world examples after code blocks with Spanish translations
6. Identify common errors (forgetting -s, using auxiliars incorrectly, etc.)
7. Write in Spanish with appropriate Starlight components

**Output**: Complete `.mdx` file following all guidelines, adapted to topic complexity

## Notes

- Flexibility is important: Not every topic needs identical structure
- Code is a tool, not a requirement: Use when it clarifies, skip when it doesn't
- Quality over template adherence: A clear explanation beats following a rigid format
- Context matters: Beginner topics need simpler structure than advanced ones