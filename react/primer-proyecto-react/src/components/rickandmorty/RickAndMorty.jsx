import { useState, useEffect } from "react";

export function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  // const [variable, funcion actualizadora] = useState([valor inicial]);

  // el useEffect va a ejecutar el codigo que se encuentra
  // dentro, tantas veces como se actualicen sus dependencias
  // si no hay dependencias se ejecuta solo antes del primer
  // renderizado, render es cuando la página aparece

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  }, []);

  return (
    <>
      {characters ? (
        characters.map((item, index) => {
          return <p>{item.name}</p>;
        })
      ) : (
        <> cargando... </>
      )}
    </>
  );
}
