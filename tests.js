/**
 * Primero, los verbos irregulares más comunes.
 * Estos NO siguen las reglas normales, por eso los verificamos primero.
 */
const irregularVerbs = {
  have: "has", // "He has a car"
  be: "is", // "She is happy"
  can: "can", // "He can swim" (permanece igual)
};

/**
 * Función conjugateThirdPerson:
 * Conjuga cualquier verbo para he/she/it siguiendo las reglas.
 */
const conjugateThirdPerson = (verb) => {
  // 1. Verificar si es irregular
  if (irregularVerbs[verb]) return irregularVerbs[verb];

  // 2. Regla: Verbos terminados en -s, -ss, -sh, -ch, -x, -z, -o
  if (/[sxz]$|[cs]h$|o$/.test(verb)) return verb + "es";

  // 3. Regla: Verbos terminados en consonante + y
  if (/[^aeiou]y$/.test(verb)) return verb.slice(0, -1) + "ies";

  // 4. Regla general: Todos los demás verbos
  return verb + "s";
};

// Ejemplos de uso
console.log(conjugateThirdPerson("work")); // "works"
console.log(conjugateThirdPerson("go")); // "goes" (irregular)
console.log(conjugateThirdPerson("watch")); // "watches" (termina en -ch)
console.log(conjugateThirdPerson("study")); // "studies" (consonante + y)
console.log(conjugateThirdPerson("play")); // "plays" (vocal + y, regla general)
console.log(conjugateThirdPerson("have")); // "has" (irregular)
