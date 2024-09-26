import "./App.css";
import { Saludo } from "./components/Saludo";
import { Saludo as Saludito } from "./components/Saludo";

function App() {
  return (
    <>
      {/* Soy un comentario en JS dentro del HTML retornado */}
      <h1>Holiwis desde el app</h1>
      <h2>FSJ25</h2>

      {/* LLamada a un componente */}
      <Saludo />
      <Saludito />
    </>
  );
}

export default App;
