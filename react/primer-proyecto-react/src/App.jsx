import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { RickAndMorty } from "./components/rickandmorty/RickAndMorty";

function App() {
  const [nombre, setNombre] = useState("");

  // Siempre que vayamos a hacer un click
  // el evento se va a llamar handle
  const handleClick = () => {
    console.log(nombre);
  };
  //la funcion "handleClick", no la ejecucion "handleClick()"

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        onChange={handleInputChange}
        value={nombre}
      />
      <button onClick={handleClick}>Mostrar</button>
      {nombre && <h2>{nombre}</h2>}

      {nombre === "" ? <>hola</> : <>chau</>}
    </>
  );
}

export default App;
