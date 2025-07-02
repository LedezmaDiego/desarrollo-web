import { useState } from "react";

export function CapturarInput() {
  // Estado para guardar el texto del input
  const [texto, setTexto] = useState("");

  // Función que actualiza el estado cada vez que cambia el input
  const handleInputChange = (evento) => {
    setTexto(evento.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
        placeholder="Escribí algo..."
      />
      <p>Texto ingresado: {texto}</p>
    </>
  );
}
