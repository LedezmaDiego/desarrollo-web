// Variable Global (no se recomienda usar var hoy en día)
var Variable_Nueva = "• Contenido de la variable •";

// let -> Variable local. Su valor puede cambiar.
let Mensaje_Importante = "• Sus valores pueden ser re-escritos/cambiados •";
Mensaje_Importante = 50;

// const -> Constante. Su valor no puede cambiar.
const Inamovible = 33;

/* Tipos de Datos */
const texto = "string";         // Texto
const numeros = 2;              // Número
const booleanos = true;         // Booleano
const indefinido = undefined;   // Valor no definido
const vacio = null;             // Valor vacío
const numeroGrande = BigInt(123456789012345678901234567890);

/* ---------------------- Operadores ---------------------- */
// Aritméticos: + - * / % 
// Comparación:
// ==   -> Compara solo el valor
// ===  -> Compara valor y tipo
// !=   -> Distinto valor
// !==  -> Distinto valor o tipo
// > < >= <= -> Comparaciones numéricas

/* ---------------------- Condicionales ---------------------- */

const edad = 20;
if (edad > 18) {
    console.log('Sos Mayor de Edad');
} else {
    console.log('Sos Menor de Edad');
}

// Switch
const dia = 2;
switch (dia) {
    case 1:
        console.log('Día lunes');
        break;
    case 2:
        console.log('Día martes');
        break;
    default:
        console.log('Día no registrado');
        break;
}

/* ---------------------- Funciones ---------------------- */

// Función clásica
function saludar(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar('Fede'));

// Arrow Function (función flecha)
// Return explícito
const saludo = (nombre) => {
    return `Hola ${nombre}`;
};

// Return implícito
const saludos = (nombre) => `Hola ${nombre}`;

/* ---------------------- Arreglos (Arrays) ---------------------- */

const Array_Propio = [1, 2, 'Pablo', false];
console.log(Array_Propio[2]); // Muestra "Pablo"

/* ---------------------- Objetos ---------------------- */

const MisObjetos = {
    clave: 'valor',
    nombre: 'Federico',
    edad: 29,
};
console.log(MisObjetos.nombre); // Muestra "Federico"

/* ---------------------- Iteraciones ---------------------- */

// for clásico
for (let i = 0; i < Array_Propio.length; i++) {
    console.log(Array_Propio[i]);
}

// Métodos de Array

// Push: Agrega al final
Array_Propio.push('Matias');
console.log(Array_Propio);

// Pop: Elimina el último
const ultimo_del_array = Array_Propio.pop();
console.log(ultimo_del_array);

// Unshift: Agrega al inicio
Array_Propio.unshift('Hice_un_juego');
console.log(Array_Propio);

// Shift: Elimina el primero
const elemento_borrado = Array_Propio.shift();
console.log(elemento_borrado);

// forEach: Recorre sin modificar
Array_Propio.forEach((item, index) => {
    console.log('index:', index, 'item:', item);
});

// map: Crea nuevo array modificando los valores
const nuevoArray = Array_Propio.map((item, index) => {
    const num = 2;
    console.log(index, 'item:', item);
    return item + num;
});
console.log('Array Modificado:', nuevoArray);

// filter: Crea nuevo array con elementos que cumplen condición
const ArrayNum = [2, 4, 5, 6];
const Numeros_Pares = ArrayNum.filter((item) => item % 2 === 0);
console.log(Numeros_Pares);
