import "./assets/css/App.css";
import { Session } from "./pages/session/Session";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserDataContext";

function App() {
  return (
    <>
      <UserProvider>
        {/* Activamos la biblioteca react-router-dom */}
        <BrowserRouter>
          {/* Definimos las rutas adentro de esta etiqueta */}
          <Routes>
            {/* Definimos las rutas */}
            <Route path="/session" element={<Session />} />
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
