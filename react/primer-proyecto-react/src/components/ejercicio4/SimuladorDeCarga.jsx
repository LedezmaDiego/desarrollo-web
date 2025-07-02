import { useEffect, useState } from "react";

export function SimuladorDeCarga() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <>{isLoading ? <h2>Cargando...</h2> : <h2>Listo</h2>}</>;
}
