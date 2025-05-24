// 1. Condicional para verificar si un número es positivo, negativo o cero
const numero = -1;
if (numero > 0) {
    console.log('Positivo');
}
else if (numero < 0) {
    console.log('Negativo');
}
else {
    console.log('Cero');
}

/* */

// 2. Suma de los números pares de un arreglo
const Array_Numerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma_de_pares = 0;

for (let i = 0; i < Array_Numerico.length; i++) { // Cambio aquí para recorrer los valores del arreglo
    if (Array_Numerico[i] % 2 === 0) {  // Asegúrate de comprobar el valor del arreglo
        suma_de_pares += Array_Numerico[i];  // Suma los números pares
    }
}

console.log(suma_de_pares);

/* */

// 3. Suma de múltiplos de 3, pero no de 5
const Array_Numerico20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let suma_de_multiplos_de_3 = 0;

for (let i = 0; i < Array_Numerico20.length; i++) {  // Cambio aquí también
    if (Array_Numerico20[i] % 3 === 0 && Array_Numerico20[i] % 5 !== 0) {  // Comprobamos el valor del arreglo
        suma_de_multiplos_de_3 += Array_Numerico20[i];  // Suma los múltiplos de 3, pero no de 5
    }
}

console.log(suma_de_multiplos_de_3);

/* */

// 4. Manipulación de un inventario de productos y filtrado
const Inventario = [];

Inventario.push(
    {Nombre: 'Yogurt', Precio: 100, Categoria: 'Comida'},
    {Nombre: 'Maceta', Precio: 250, Categoria: 'Jardinería'},
    {Nombre: 'Parlante', Precio: 700, Categoria: 'Electrónica'},
    {Nombre: 'Fideos', Precio: 500, Categoria: 'Comida'}
);

// Mostrar todos los productos en el inventario
Inventario.forEach((producto) => {  // Corregido para recorrer correctamente los objetos
    console.log(
        'Nombre:', producto.Nombre,
        'Precio:', producto.Precio,
        'Categoría:', producto.Categoria
    );
});
console.log(Inventario);

// Filtrar productos de la categoría "Electrónica"
const Categoria_Electrónica = Inventario.filter((producto) => producto.Categoria === 'Electrónica');
console.log(Categoria_Electrónica);

// Crear un nuevo array con solo los nombres de los productos
const Nombre_De_Los_Productos = Inventario.map((producto) => producto.Nombre);
console.log(Nombre_De_Los_Productos);

/* */

// 5. Agregar tres películas al arreglo Peliculas
const Peliculas = [];

Peliculas.push(
    {Titulo: 'On my Way', Director: 'Frank Sinatra', Año: 1995, Género: 'Documental'},
    {Titulo: 'Oggy y Las Cucarachas', Director: 'Steven Spielberg', Año: 1250, Género: 'Acción'},
    {Titulo: 'Better Call Saul', Director: 'Vince Gilligan', Año: 2015, Género: 'Drama'}
);

console.log(Peliculas);

/* */

// 6. Agregar un elemento al inicio de un arreglo con unshift
const Array_Propio = [];  // Suponiendo que este arreglo existe previamente

Array_Propio.unshift('Hice_un_juego');
console.log(Array_Propio);
