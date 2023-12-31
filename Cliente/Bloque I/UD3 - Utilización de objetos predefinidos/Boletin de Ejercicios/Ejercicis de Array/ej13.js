//Elaborar un script que reciba un array con valores numéricos y devuelva otro array que contenga ordenados por un lado los números impares y por otro lado los pares. Si el número de elementos es impar, primero irán los impares ordenados y luego los pares ordenados; si el número es par, al contrario.
function ordenarImparesPares(array) 
{
    const impares = [];
    const pares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        } else {
            impares.push(array[i]);
        }
    }

    impares.sort((a, b) => a - b);
    pares.sort((a, b) => a - b);

    if (array.length % 2 === 0) {
        return [...pares, ...impares];
    } else {
        return [...impares, ...pares];
    }
}

const array = [5, 3, 2, 8, 1, 4];
console.log(ordenarImparesPares(array)); // [1, 3, 5, 2, 4, 8]