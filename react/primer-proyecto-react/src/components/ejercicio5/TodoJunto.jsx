import { useState, useEffect } from "react";

export function TodoJunto() {
  // Estado para el nombre que escribe el usuario
  const [nombre, setNombre] = useState("");

  // Estado para el saludo que se mostrará al hacer clic
  const [saludo, setSaludo] = useState("");

  // Función que actualiza el nombre mientras escribís
  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  // Función que crea el saludo cuando hacés clic
  const handleCrearSaludoClick = () => {
    setSaludo(`¡Hola, ${nombre}!`);
  };

  // useEffect que se ejecuta cada vez que cambia el saludo
  useEffect(() => {
    if (saludo) {
      console.log("Saludo actualizado");
    }
  }, [saludo]); // se ejecuta solo cuando cambia saludo

  return (
    <>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={handleInputChange}
      />
      <button onClick={handleCrearSaludoClick}>Saludar</button>
      {saludo && <h2>{saludo}</h2>}
    </>
  );
}
