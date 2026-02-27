# Template: Common Errors Section

Use one `<Aside type="danger">` per error. The title must describe the specific mistake, never be generic.

Inside each Aside: a brief explanation of why the error happens, followed by the example list with ⛔ and ✅ paired together.

## Exact Format

```mdx
## Errores comunes

<Aside type="danger" title="[Specific description of the mistake]">
[Brief explanation in Spanish of why this error occurs.]

- **[incorrect example]** ⛔
- **[correct example]** (Spanish translation) ✅
</Aside>
```

## Rules

- The emoji goes at the very end of the line, after everything including the translation
- Incorrect example ⛔: bold the incorrect word(s), no translation
- Correct example ✅: bold the correct word(s), translation in parentheses right before the emoji
- Minimum 1 error block, no maximum — include as many as the topic requires
- Each error gets its own separate `<Aside type="danger">` block

## Real Example

```mdx
## Errores comunes

<Aside type="danger" title="Usar 'I not' en lugar de 'I don't'">
En inglés no se puede negar un verbo simplemente agregando "not" después del sujeto. Se necesita el auxiliar "do".

- I **not know** the answer ⛔
- I **don't know** the answer (No sé la respuesta) ✅
</Aside>

<Aside type="danger" title="Omitir la 's' en tercera persona singular">
En presente simple, los verbos con he, she o it deben llevar una "s" al final.

- She **work** every day ⛔
- She **works** every day (Ella trabaja todos los días) ✅
</Aside>
```
