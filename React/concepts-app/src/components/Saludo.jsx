import { useState } from "react";

// Declaracion de un componente
export const Saludo = () => {
  // let nombre = "Adrian";
  const [nombre, cambiarNombre] = useState("Ernesto");

  return (
    <>
      <h3>Yo en realidad estoy en el componente Saludo jejox</h3>
      <h2>Hola {nombre}, como estas</h2>
      <button
        onClick={() => {
          cambiarNombre("Hector");
        }}
      >
        Magia
      </button>
    </>
  );
};
