const vowels = ['a', 'e', 'i', 'o', 'u'];
const words = [
    "Aceituna",
    "Murciélago",
    "Educación",
    "Aeropuerto",
    "Otorrinolaringólogo",
    "Euforia",
    "Aceite",
    "Paleontólogo",
    "Arquitectura",
    "Hipopótamo"
]


/**
 * Obtiene las vocales presentes en el string
 * @param str Palabra donde se buscaran las vocales
 * @returns {[]} lista de vocales encontradas, se toman en cuenta las que tienen acentos
 */
function getVowels(str) {
    let foundVowels = []

    for (let char of str) {
        const cleanedChar = char.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        if (vowels.includes(cleanedChar.toLowerCase())) {
            foundVowels.push(char.toUpperCase());
        }
    }
    return foundVowels;
}


/**
 * Obtiene una palabra aleatoria de la lista
 * @returns {string} palabra aleatoria
 */
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}


const word = getRandomWord();
const vowelsFound = getVowels(word);
console.log(`La palabra '${word}' tiene ${vowelsFound.length} vocales: ${vowelsFound.join(', ')}`);