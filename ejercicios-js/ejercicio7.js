const words = [
    "Aceituna",
    "Murciélago",
    "Educación",
    "Hola",
    "Aeropuerto",
    "Otorrinolaringólogo",
    "Euforia",
    "Aceite",
    "Paleontólogo",
    "Arquitectura",
    "Hipopótamo",
]

// const word = words[Math.floor(Math.random() * words.length)].invert();

/**
 * Obtiene una palabra aleatoria de la lista
 * @returns {string} palabra aleatoria
 */
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

/**
 * Invierte una palabra
 * @param {string} word palabra a invertir
 * @returns {string} palabra invertida
 */
function invert(word) {
    return word.split('').reverse().join('');
}

const word = getRandomWord();

console.log(`La palabra '${word}' invertida es: '${invert(word).toLowerCase()}'`);