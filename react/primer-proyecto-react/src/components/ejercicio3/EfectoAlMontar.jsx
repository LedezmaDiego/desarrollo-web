import { useEffect } from "react";

export function EfectoAlMontar() {
  useEffect(() => {
    console.log("El componente se montó"); // mensaje en consola
  }, []); // arreglo vacío: se ejecuta solo al montar

  return (
    <>
      <h2>Chequeá la consola del navegador</h2>
    </>
  );
}
