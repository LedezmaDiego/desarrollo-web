// Lenguaje de programacion client-side
// Actualmente orientado a funciones

var miVariable = 'contenido de la variable'; //no se usa

// let --> solamente vive en el scope declarado o en sus hijos
let miVariable2 = "pueden ser re-escritos sus valores";
miVariable2 = 9; // Reasignación del valor


// const --> variable constante no son reasignables los valores
const miVariable3 = 10;

/* Tipos de datos */
const text = 'string';
const numeros = 2; // number
const booleanos = true; // boolean
// undefined --> valor no definido
// null --> vacio

// Operadores

// Aritméticos: son todos los de matemáticas + - / % *

/* comparación:
doble igual == compara el valor del dato
triple igual === compara el valor y el tipo de dato
distinto el valor !=
distinto valor y el tipo !==
mayor, menor > <
mayor o igual >=
menor o igual <=
*/

// Condicionales
// if
const edad = 20;
if (edad > 18){
    console.log("Sos mayor de edad."); // Mostrar por consola
    // Es el print de Python
} else {
    console.log("Sos menor de edad.");
}

// switch
const dia = 8;


switch(dia){
    case 1: console.log('dia lunes'); break
    case 2: console.log('dia martes'); break
    default: console.log('Dia no registrado');
}

// Funciones
// Declaración función clásica
function saludar(nombre){
    return `Hola ${nombre}`;
};

console.log(saludar("Fede"));

// Arrow function:
// Return implícito
const saludoImplicito = (nombre) => (`Holitas ${nombre}`);
// Si el return implícito tiene ma de una linea va a estar
// envuelto en parentesis (`Hola ${nombre}`...)
console.log(saludoImplicito("Juanma"));

// Return explícito
const saludoExplicito = (nombre) => {
    return `Buenas ${nombre}`;
};
console.log(saludoExplicito("Juan Manuel"));

//Arreglos o arrays (listas en python)
const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]);

const miObjeto = {
    clave: "valor",
    nombre: "Federico",
    edad: 29,
};
console.log(miObjeto.nombre);

// Iteramos una lista con for
for (let i = 0; i < miArreglo.length; i++){
    console.log(miArreglo[i]); // Imprime, en pantalla, el arreglo con su posición
}