# TalkScript — Agent Orchestrator

TalkScript is a Spanish-language educational guide for developers learning English through JavaScript metaphors. Built with **Astro + Starlight**, all content lives as MDX files inside `src/content/docs/`.

---

## Skills

| Skill | File | Purpose |
|---|---|---|
| `talkscript-content` | `.github/skills/talkscript-content/SKILL.md` | Generate educational grammar content pages |

**Always read the skill file before generating content.** Skills define structure, templates, and topic-specific rules beyond what is listed here.

---

## Global Rules

These rules apply to every file in this project. Skills must not restate them.

### Language

- All educational content (prose, headings, UI labels) must be in **Spanish**
- Code identifiers (variables, keys, function names) must be in **English**
- Never mix languages within the same sentence or code block

### Audience

- Spanish-speaking developers learning English (CEFR A1–C2)
- Assume programming familiarity — leverage that to explain grammar concepts
- Content must always feel relevant to someone who thinks in code

### Tone

- Professional but approachable; direct and concise
- Encouraging but realistic — never condescending
- Always use **"tú"** (informal second person) in Spanish prose

### MDX Standards

- Leave a blank line **before and after** every component block
- Self-closing tags for `<Card>` and `<LinkCard>` — never add children unless the component requires them
- Only import components that are actually used in the file
- Use **Starlight built-in components only** — no custom interactive components, no third-party widgets

### Prohibited — Everywhere

The following are forbidden across the entire codebase unless a skill explicitly carves out an exception:

- Emojis or decorative symbols — the only exceptions are ✅ and ⛔, exclusively inside `## Errores comunes`
- Strikethrough (`~~text~~`)
- Native Markdown tables — use code blocks or Starlight components instead
- Native Markdown blockquote alerts — use `<Aside>` instead
- Icons inside `<Card>` components
- Executable logic in code blocks — code is for visual pattern illustration only

---

## Validation Mandate

**Before delivering any generated or modified file, verify it against all of the following:**

1. Global rules listed in this file
2. All skill-specific rules in the relevant skill file
3. Every template referenced by that skill

A file is not complete until it passes every applicable checklist item. If a rule is ambiguous, default to the most restrictive interpretation and flag it in a comment for human review.
