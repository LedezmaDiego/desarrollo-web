import { useState } from "react";

// Componente export nombrado
export function Contador() {
  // Estado para el contador
  const [numero, setNumero] = useState(0);

  // Función para sumar
  const handleSumarClick = () => {
    setNumero(numero + 1);
  };

  // Función para restar
  const handleRestarClick = () => {
    setNumero(numero - 1);
  };

  return (
    <>
      <h1>{numero}</h1>
      <button onClick={handleSumarClick}>Sumar</button>
      <button onClick={handleRestarClick}>Restar</button>
    </>
  );
}
