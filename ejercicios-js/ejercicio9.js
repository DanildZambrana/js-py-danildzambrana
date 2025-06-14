/**
 * Genera una lista de entre 1 y 20 números aleatorios
 * @param min
 * @param max
 */
function generateRandomNumbers(min, max) {
    const numbers = []
    const amount = Math.floor(Math.random() * 20) + 1;

    for (let i = 0; i < amount; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

const data = generateRandomNumbers(1, 100);

console.group(`Se generaron ${data.length} números aleatorios entre 1 y 100:`);

console.log(`Números generados: ${data.join(', ')}`);

console.log(`El número menor es: ${Math.min(...data)}`);
console.log(`El número mayor es: ${Math.max(...data)}`);
console.groupEnd();