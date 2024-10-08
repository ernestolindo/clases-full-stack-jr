import { useState } from "react";
import { LoginFormComponent } from "./components/LoginFormComponent";
import { RegisterFormComponent } from "./components/RegisterFormComponent";
import { Link } from "react-router-dom";

export const Session = () => {
  const [typeForm, setTypeForm] = useState("login");
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Manejo de session</h1>
      <button
        onClick={() => {
          setTypeForm("login");
        }}
      >
        Iniciar sesion
      </button>
      <button
        onClick={() => {
          setTypeForm("register");
        }}
      >
        Registrarse
      </button>
      {typeForm === "login" ? <LoginFormComponent /> : <RegisterFormComponent />}
    </>
  );
};
