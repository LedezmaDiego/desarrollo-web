import { useContext } from "react";
import { NombreContext } from "../main";

export function Persona2() {
  const nombre = useContext(NombreContext);

  return (
    <>
      <h3>Este es el componente persona</h3>
      <div>Hola {nombre}</div>
    </>
  );
}
