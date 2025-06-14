/**
 * Genera un numero aleatorio entre 1 y 10
 *
 * @return un numero aleatorio entre 0 y 10
 */
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

const generatedNumber = randomNumber();
console.group(`Tabla de multiplicar del ${generatedNumber}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${generatedNumber} x ${i} = ${generatedNumber * i}`);
}
console.groupEnd();
