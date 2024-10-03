import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";

export const RegisterFormComponent = () => {
  // Registrar cada uno de los input de los cuales queremos obtener datos
  const { register, handleSubmit } = useForm();
  const onSubmitForm = (data) => {
    /* e.preventDefault();
    console.log("Se envio el form");
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.confirmPassword.value); */
    console.log(data);
    console.log(data.email);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      // El then es creer, es tener fe; si todo sale bien va a tener credenciales de usuario
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      // El catch es atrapar, es tener un plan B; si algo sale mal va a tener un error
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Example: email@mail.com"
          {...register("email")}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Repeat your password"
          {...register("confirmPassword")}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
