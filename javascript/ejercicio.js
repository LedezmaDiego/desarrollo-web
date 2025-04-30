// 1. IF
let numero = -5;
if (numero < 0) {
    console.log("Negativo");
} else if (numero === 0) {
    console.log("Cero");
} else {
    console.log("Positivo");
}

// 2. FOR
let sumaPares = 0;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= arr.length; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

console.log(`Suma de los números pares del 1 al 10: ${sumaPares}`);

// 3. FOR (versión intermedia)
let sumaMultiplos = 0;
arr.push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20)

for (let i = 0; i <= arr.length; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        sumaMultiplos += i;
    }
}

console.log("Suma de los múltiplos de 3 (pero no de 5) entre 1 y 20:", sumaMultiplos);
