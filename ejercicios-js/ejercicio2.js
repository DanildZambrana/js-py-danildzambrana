/**
 * Genera un número aleatorio entre 0 y 100
 * @returns {number} el número generado
 */
function generateNumber() {
    return Math.floor(Math.random() * 100);
}


/**
 * Determina si un número es par o impar
 * @param {number} number el número a evaluar
 * @returns {boolean} true si el número es par, false si es impar
 */
function isEven(number) {
    return number % 2 === 0;
}



console.group('Números aleatorios');

for (let i = 0; i < 10; i++) {
    const number = generateNumber();
    console.log(`El número ${number} ${isEven(number) ? 'es par' : 'es impar'}`);
}

console.groupEnd();
