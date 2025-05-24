const button = document.getElementById("boton");
let contador = 0;

// setTimeout
// función que recibe por parametros dos valores
// recibe una función y recibe el tiempo que va
// a tardar en ejecutarse

// setTimeout(() => {}); // Función flecha anónima

// setTimeout(function(){}); // Función anónima clásica

button.addEventListener("click", () => {
  setTimeout(function () {
    alert("Hola, fuí clickeado hace 2 segundos");
  }, 2000); // milisegundos

  setInterval(() => {
    contador++;
    console.log(contador);
  }, 1000);
});

// setInterval()
// Ejecutar el codigo cada n cantidad de tiempo

//   setInterval(() => {
//     contador++;
//     console.log(contador);
//   }, 1000);

//

// Asincronía
// Petición a una api
// metodos: get, post, put, delete

// fetch
fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json()) // Siempre se manipulara con json, esta linea siempre esta presente
  .then((response) => console.log("response", response.results));

// En objetos se accede a elementos con response.results, donde results es el nombre de la clave
// O con response["results"], donde results en la clave

// Y para entrar en arrays se usa [0], donde 0 es el índice

// Async await
// Función flecha asíncrona:
// Siempre que queramos meter un dato asincrono, le vamos a meter un await
const asyncFunction = async () => {
  //try catch
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json(); // Importante
    const arrayFiltrado = data.results.filter((objetito) => objetito.id === 1);
    console.log(arrayFiltrado);

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};

asyncFunction(); // Para ejecutar una función
// debemos llamarla y poner parentesis y ';' al final

// Función regular asíncrona
async function asyncFunc() {}
