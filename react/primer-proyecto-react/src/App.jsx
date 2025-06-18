import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pepito from "./components/usuario/Usuario";
import { Proveedor } from "./components/proveedor/Proveedor";
import { useEffect, useState } from "react";

function App() {
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
      sdac asdcsc sdcsc afafa afafa afafaa d<br></br>
      <button>
        Si los papus fueran tomtoz no exisitirian los tilines del oeste
      </button>
      <br></br>
      <Pepito />
      <br></br>
      <Proveedor name={"Juanmita"} />
    </>
  );
}

export default App;
