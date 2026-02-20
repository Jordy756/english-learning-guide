# TalkScript - AI Agent Instructions

## Project Overview

**TalkScript** is an English learning platform for Spanish speakers that teaches grammar through JavaScript programming metaphors. Built with Astro + Starlight documentation framework.

**Target Audience**: Spanish-speaking developers learning English (A1 to C2 levels)  
**Content Language**: Spanish (except code identifiers which are English)  
**Philosophy**: Code visualizes grammar patterns, not executable logic

## Architecture

### Content Structure

```
src/content/docs/
├── a1/, a2/, b1/, b2/, c1/, c2/  # CEFR levels
│   ├── 01-basics/                 # Foundational concepts
│   ├── 02-grammar/                # Grammar rules
│   └── 03-skills/                 # Practical skills
├── reference/                      # Quick reference sheets
└── erased/                         # Deprecated content (do not reference)
```

**File naming**: Use kebab-case with numeric prefixes (e.g., `01-pronunciation-basics.mdx`)  
**Routing**: Starlight auto-generates routes from file paths with autogenerate in sidebar config

### Tech Stack

- **Astro 5.6+** with Starlight 0.37+ (documentation framework)
- **Tailwind CSS 4.0+** (styling via `@tailwindcss/vite`)
- **starlight-ion-theme 2.3+** (custom theme)
- **pnpm** (package manager - NEVER use npm/yarn)
- **MDX** (content with JSX components)

### Component System

**Starlight Built-ins Only** (imported from `@astrojs/starlight/components`):

- `<Tabs>` / `<TabItem>` - For tense variations, formality levels
- `<Aside>` - Tips, warnings, notes (ALWAYS include descriptive `title` attribute)
- `<Card>` / `<CardGrid>` - Grouping info (NEVER put code blocks inside)
- `<Steps>` - Sequential instructions

**Custom Overrides** (`src/components/overrides/`):

- Minimal pass-through overrides of Starlight components
- Customizes: Head, Sidebar, Hero (Header, PageFrame commented out)

## Content Creation Workflow

### The TalkScript Skill System

**CRITICAL**: Before creating/editing grammar content, read the skill instructions:

```
.github/skills/talkscript-content/SKILL.md
```

This 259-line document defines:

- Content structure requirements
- JavaScript metaphor guidelines
- Component usage rules
- Code formatting standards
- Required sections ("Errores comunes", "Práctica")
- Examples format (all English must include Spanish translation)

### Content Requirements

**Frontmatter** (required):

```yaml
---
title: [Spanish title]
description: [One-line Spanish description]
---
```

**Import statement** (required):

```javascript
import { Tabs, TabItem, Aside } from "@astrojs/starlight/components";
```

**Structure**:

1. Introduction paragraph (1 max, with programming metaphor)
2. Main content sections (use `---` horizontal rules to separate)
3. **"Errores comunes"** section (required, use `<Aside type="danger">` with descriptive titles)
4. **"Práctica"** section (required, at end, use `<Aside type="tip" title="Ejercicio diario">`)

**Code Blocks**:

- Maximum 10 lines per block
- Maximum ~50 characters per line (avoid horizontal scroll)
- JavaScript syntax highlighting
- All identifiers in English
- Focus on data structures (objects, arrays), NOT executable functions
- NEVER place inside `<Card>` components
- OK inside `<TabItem>` or document flow

**Examples**:

- 3-5 per concept
- Every English example MUST include Spanish translation
- Format: `"English text" (Traducción en español)`

### Tabs Strategy

Use `<Tabs>` to reduce vertical scrolling and information overload:

- Group related variations (affirmative/negative/interrogative)
- Formality levels (informal/neutral/formal)
- Different tenses or forms
- Each `<TabItem>` must be self-contained with its own code/examples

## Development Commands

```bash
pnpm install           # Install dependencies
pnpm dev              # Dev server on localhost:4321 (auto-opens browser)
pnpm build            # Production build to ./dist/
pnpm preview          # Preview production build
```

**HMR**: Astro hot-reloads MDX changes instantly during `pnpm dev`  
**Type checking**: Run `pnpm astro check` for TypeScript/MDX validation

## Styling System

**Custom Fonts** (configured in `astro.config.mjs`):

- `--font-space-grotesk` (headings, body - weight 300)
- `--font-space-mono` (code, monospace - weights 400, 700)

**Tailwind Integration**:

- Theme configured in `src/styles/global.css` via `@theme` directive
- Starlight variables mapped to Tailwind: `--sl-font`, `--sl-font-mono`
- Don't edit Starlight's base styles directly

## Navigation Configuration

Sidebar auto-generated from folder structure via `autogenerate` directive in `astro.config.mjs`:

```javascript
sidebar: [
  {
    label: "A1 - Principiante",
    items: [
      { label: "Fundamentos", autogenerate: { directory: "a1/01-basics" } },
      // ...
    ],
  },
];
```

**Collapsed by default**: All levels except A1 start collapsed  
**Ordering**: Numeric prefixes determine order (01-, 02-, etc.)

## Common Pitfalls

1. **MDX Formatting**: Leave blank lines before/after component blocks; close `</TabItem>` tags without extra indentation
2. **Code in Cards**: NEVER put code blocks inside `<Card>` components (causes rendering issues)
3. **Aside Titles**: Always descriptive, never generic ("Truco de memoria" not just "Tip")
4. **Translation Failures**: Don't translate grammar expressions literally (e.g., "I don't know" ≠ "I not know")
5. **Package Manager**: Use `pnpm` exclusively (npm/yarn will create conflicts)
6. **Emojis**: NEVER use emojis or decorative symbols in content
7. **Strikethrough**: Don't use `~~text~~` for errors; use ⛔ symbol instead

## File References

**Key Config Files**:

- `astro.config.mjs` - Starlight config, sidebar, fonts, plugins
- `src/content.config.ts` - Content collections setup (uses Starlight's docsLoader)
- `src/styles/global.css` - Tailwind theme, custom scrollbar, font mappings
- `.github/skills/talkscript-content/SKILL.md` - Content generation rules (READ THIS FIRST)

**Example Content** (follow these patterns):

- `src/content/docs/a1/02-grammar/06-verb-to-be.mdx` - Tabs, code structure
- `src/content/docs/a2/02-grammar/01-simple-present.mdx` - Conjugation patterns
- `src/content/docs/a1/03-skills/02-common-expressions.mdx` - Fixed expressions, flashcards

## Content Conventions

- Use "tú" form (informal second person) in Spanish
- Bold key terms: **presente simple**
- Inline code for English grammar terms: `verb to be`
- ✅ for correct examples, ⛔ for incorrect
- Short paragraphs (2-4 sentences max)
- Professional but approachable tone
- Programming metaphors only when they genuinely clarify (not forced)
