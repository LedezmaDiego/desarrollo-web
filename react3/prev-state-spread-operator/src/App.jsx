import { useState } from 'react'
import './App.css'

function App() {

  const [num, setNum] = useState([1, 2, 3])
  const [persona, setPersona] = useState({
    nombre: 'Pepito',
    edad: 30
  })

  // Spread Operator
  function myFunction(){
    setNum([...num, 12]) // '...variable' es el spread operator, es igual al array creado
  }

  // Tarea: Hacer que el setNum agregue numeros consecutivos -> 3 puntos
  function agregarNumerosConsecutivos() {
    setNum([...num, num[num.length - 1] + 1]) // Agrega el siguiente número consecutivo
  } 


  // Agregar una propiedad al objeto persona usando spread operator -> 4 puntos
  // y que al hacer click en un boton dispare la funcion y la muestre por consola
    function agregarPropiedad() {
      setPersona({
        ...persona,
        ocupacion: 'Desarrollador Frontend'
      });
      console.log(persona);
    }
    
    // Opcional 3 puntos
    // Partiendo de {nombre: "Pepito", edad: 30}, cambiá solo nombre a "Luis" usando spread operator
    function cambiarNombreALuis() {
      setPersona({
        ...persona,
        nombre: 'Luis'
      });
      console.log(persona);
    }

  return (
    <>
      <div>
        {num.map((item, index) => (
          <p>{item}</p>
        ))}
        <button onClick={myFunction}>Agregar número 12</button>
        <br />
        <button onClick={agregarNumerosConsecutivos}>Agregar número consecutivo</button>
        <br/>
        <button onClick={agregarPropiedad}>Agregar propiedad al objeto persona</button>
        <br />
        <button onClick={cambiarNombreALuis}>Cambiar nombre a Luis</button>
      </div>
    </>
  )
}

export default App
