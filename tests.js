// Desconocidos, superiores, situaciones profesionales
const politePrefixes = ["Would you mind", "Would you mind if", "May"];

const makeRequest = (subject, verb, complement, index = 0) => {
  const chosenPrefix = politePrefixes[index % politePrefixes.length];
  subject = subject.toLowerCase();

  if (chosenPrefix === "May" && subject !== "i" && subject !== "we")
    return console.warn("Warning: 'May' normalmente se usa con 'I' o 'We'.");

  return chosenPrefix === "Would you mind"
    ? `${chosenPrefix} ${verb.replace(/e$/, "") + "ing"} ${complement}?`
    : `${chosenPrefix} ${subject} ${verb} ${complement}?`;
};

// Ejemplos de uso
console.log(makeRequest("John", "open", "the window", 0));
// "Would you mind opening the window?"

console.log(makeRequest("we", "leave", "early", 2));
// "May we leave early?"

console.log(makeRequest("they", "join", "us for dinner", 1));
// "Would you mind if they join us for dinner?"
