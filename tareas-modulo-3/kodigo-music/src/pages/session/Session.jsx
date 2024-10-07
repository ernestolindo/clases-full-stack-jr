import { useState } from "react";
import { LoginFormComponent } from "./components/LoginFormComponent";
import { RegisterFormComponent } from "./components/RegisterFormComponent";

export const Session = () => {
  const [typeForm, setTypeForm] = useState("login");
  return (
    <>
      <img src="/Kodigo music.jpg" alt="Kodigo Music" style={{ width: "20vw", height: "auto" }} />
      <h1>Kodigo Music</h1>
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
