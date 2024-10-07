import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../assets/firebase/config";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export const RegisterFormComponent = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const onSubmitForm = (data) => {
    console.log(data);
    console.log(data.email);

    createUserWithEmailAndPassword(auth, data.email, data.password)
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
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor="">Correo electrónico</label>
        <input type="text" id="email" placeholder="ejemplo@dominio.com" {...register("email")} />
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Mínimo 8 caracteres"
          {...register("password")}
        />
        <label htmlFor="">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Repita la contraseña"
          {...register("confirmPassword")}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
