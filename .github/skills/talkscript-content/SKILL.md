---
name: talkscript-content
description: Generate educational grammar content for TalkScript using JavaScript metaphors
metadata:
  version: "2.0.0"
  author: "Jordy Castro"
---

# TalkScript Content Generator

Generate Spanish-language educational content explaining English grammar through JavaScript programming metaphors for Spanish-speaking learners.

## Context

**Audience**: Spanish speakers learning English (beginner to advanced)
**Stack**: Astro + Starlight documentation framework
**Output Language**: Spanish (code identifiers in English)
**Philosophy**: Code visualizes patterns, not executable logic

## Core Principles

1. **Clarity over cleverness** - Direct, accessible explanations
2. **Brevity** - 3-5 minute read maximum per page
3. **Visual patterns** - Show structure through code examples
4. **Consistency** - Uniform structure across topics
5. **Practical examples** - Real-world English usage with Spanish translations
6. **Strategic organization** - Use tabs to prevent information overload

## JavaScript Metaphors

Use programming concepts when they clarify grammar:

- Objects → conjugation tables
- Arrays → word order
- Functions → transformations (affirmative → negative → question)
- Pattern matching → grammar rules
- Destructuring → sentence analysis
- Type systems → word categories

**Rule**: Only use code metaphors when they genuinely aid understanding.

## Component Usage

### Allowed Components

**Starlight built-in only**:

- `<Tabs>` / `<TabItem>` - Variations (tenses, forms, levels)
- `<Aside>` - Contextual information (tip, caution, danger, note)
- `<Card>` / `<CardGrid>` - Group related information
- `<Steps>` - Sequential instructions
- `<LinkCard>` - Navigation
- `<Badge>` - Inline labels

### Component Rules

**`<Aside>` Requirements**:
- Always include descriptive `title` attribute
- Title must explain the content, not just repeat the type
- Format: `<Aside type="type" title="Descriptive explanation of what this contains">`

**Code Block Rules**:
- Never place code blocks inside `<Card>` components
- Use code blocks directly in document flow or within `<TabItem>`
- Maximum 10 lines per block
- Maximum ~50 characters per line (avoid horizontal scroll)
- All identifiers in English (never Spanish)
- Include brief inline comments when helpful

**`<Tabs>` Strategy**:
- Group related variations (affirmative/negative/interrogative)
- Each `<TabItem>` must be self-contained
- Include code examples in each tab when applicable
- Reduces vertical scrolling and information overload

### Prohibited

- Custom interactive components
- Emojis or decorative symbols
- Native Markdown tables (use code blocks or components)
- Native Markdown alerts (use `<Aside>`)
- Complex executable functions
- More than 3 code blocks per major section

## Document Structure

### Required Frontmatter

```yaml
---
title: [Topic in Spanish]
description: [One-line description in Spanish]
---
```

### Required Import

```javascript
import { [components] } from '@astrojs/starlight/components';
```

### Introduction (1 paragraph maximum)

- Explain topic and relevance
- Include programming metaphor if natural

### Main Content

Adapt structure to topic complexity:

- **Simple topics**: 2-3 main sections
- **Intermediate topics**: Main sections + strategic tabs
- **Complex topics**: More sections as needed

Use `---` horizontal rules to separate major sections visually.

Use `<Tabs>` to group variations and reduce scrolling.

### Common Errors Section (Required)

**Section title**: "Errores comunes"

**Format**:
- Each error in separate `<Aside type="danger">` with descriptive title
- Use ⛔ for incorrect examples
- Use ✅ for correct examples
- Never use strikethrough (~~text~~)
- Include brief explanation in Spanish

**Requirements**:
- Include 1+ common mistakes
- Descriptive title format: "[Specific mistake description]"

### Practice Section (Required)

**Section title**: "Práctica"

**Format**:
- Use `<Aside type="tip" title="Ejercicio diario">`
- List 3-5 suggested practice activities in Spanish
- Not interactive exercises, just recommendations

**Place**: After "Errores comunes" section, at end of document.

## Code Guidelines

### When to Use Code

**DO**:
- Visualize patterns (conjugation tables, word order)
- Show structural comparisons
- Illustrate transformations

**DON'T**:
- Write executable logic
- Use for simple lists
- Place inside `<Card>` components

### Code Requirements

- Max 10 lines per block
- Max ~50 characters per line
- All identifiers in English
- JavaScript syntax highlighting: ```javascript
- Focus on data structures (objects, arrays)
- Each `<TabItem>` should include code when applicable

### Alternative to Code

For simple patterns, use plain text with visual indicators instead of code blocks.

## Content Standards

### Examples Requirements

**Code Examples** (inside content/tabs):
- Short and simple
- Clear structure
- Demonstrate pattern effectively
- Avoid horizontal scroll

**Real-World Examples** (after code blocks):
- 3-5 practical examples per concept
- Realistic, everyday contexts
- **Every English example must include Spanish translation**
- Format: `English text (Traducción en español)`
- Vary examples (different subjects/verbs)

### Tone

- Professional but approachable
- Direct and concise
- Encouraging but realistic
- Use "tú" form (informal second person) in Spanish

### Formatting

- **Bold** for key terms
- `code formatting` for English grammar terms/examples
- ✅ for correct examples
- ⛔ for incorrect examples
- Short paragraphs (2-4 sentences max)

## MDX Best Practices

### Valid MDX Format

**Self-closing tags**:
- Cards and LinkCards must be self-closing

**Component nesting**:
- Code blocks outside `<Card>` components (allowed)
- Code blocks inside `<TabItem>` (allowed)
- Code blocks inside `<Card>` (NOT allowed)

**Proper spacing**:
- Leave blank lines before and after component blocks

**Aside titles**:
- Always use descriptive titles, not generic type names

## Validation Checklist

**Structure**:
- [ ] Valid frontmatter (title, description)
- [ ] Components imported
- [ ] 1 paragraph introduction
- [ ] `<Tabs>` used strategically
- [ ] "Errores comunes" section at end
- [ ] "Práctica" section after errorstip

**Content**:
- [ ] 1+ common errors with descriptive titles
- [ ] ✅⛔ format for correct/incorrect examples
- [ ] No strikethrough (~~)
- [ ] No code inside `<Card>`
- [ ] Code blocks properly formatted
- [ ] All code identifiers in English
- [ ] Examples short (avoid horizontal scroll)
- [ ] 3-5 real-world examples with Spanish translations
- [ ] All `<Aside>` components have descriptive titles
- [ ] Practice recommendations provided

**Format**:
- [ ] Valid MDX syntax
- [ ] Proper component spacing
- [ ] Self-closing tags where required
- [ ] Spanish throughout (except code identifiers)
- [ ] No emojis or decorative symbols
- [ ] No native Markdown tables

## Generation Tips

- Adapt structure to topic complexity
- Code clarifies, not required everywhere
- Quality over rigid templates
- Focus on learner understanding
- Keep token usage efficient
- Prioritize scannable, digestible content