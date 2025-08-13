import { Persona2 } from "./Persona2";

export function Persona({ nombre }) {
  const nombre = useContext(NombreContext);

  return (
    <>
      <h3>Este es el componente persona</h3>
      <div>Hola {nombre}</div>
      <Persona2 />
    </>
  );
}
