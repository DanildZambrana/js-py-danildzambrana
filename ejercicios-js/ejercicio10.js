/**
 * Genera un string de entre 16 y 40 caracteres aleatorios con letras y números.
 * @result {str} La contrasña generada
 */
function generateString() {
    const length = Math.floor(Math.random() * 24) + 16;
    let password = '';

    while (password.length < length) {
        password += Math.random().toString(36).substring(2);
    }

    return password.slice(0, length);
}

const generatedStr = generateString();

console.log(`La contraseña generada es: '${generatedStr}' y tiene ${generatedStr.length} caracteres`);