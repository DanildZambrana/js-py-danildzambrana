/**
 * Genera un numero aleatorio entre 1 y 100
 *
 * @return un numero aleatorio entre 0 y 100
 */
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

/**
 * Determina si un numero es primo
 * @param {number} number el numero a evaluar
 * @returns {boolean} true si el numero es primo, false si no lo es
 */
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }


    return true;
}


const generatedNumber = randomNumber();

console.log(`El número ${generatedNumber} ${isPrime(generatedNumber) ? "" : "no "}es primo`);

