/**
 * Genera un numero aleatorio entre 1 y 100
 *
 * @return un numero aleatorio entre 0 y 100
 */
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


/**
 * Calcula el factorial de un número.
 * @param {number} number El número para calcular el factorial.
 * @returns {number} El factorial del número.
 */

function factorial(number) {
    if (number < 0) {
        return NaN;
    }

    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
}


const generatedNumber = randomNumber();

console.log(`${generatedNumber}! = ${factorial(generatedNumber)}`);