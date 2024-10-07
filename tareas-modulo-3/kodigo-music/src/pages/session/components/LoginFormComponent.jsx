import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../assets/firebase/config";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export const LoginFormComponent = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const submitForm = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password) // Cambia 'mail' a 'email' y 'pass' a 'password'
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home"); // Redirige a la ruta /home
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="">Correo electrónico</label>
        <input
          type="text"
          id="email"
          placeholder="Ingresa tu correo electrónico"
          {...register("email")} // Asegúrate de que coincida con el registro
        />
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Introduce tu contraseña"
          {...register("password")} // Asegúrate de que coincida con el registro
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
