import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";

export const LoginFormComponent = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.mail, data.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="">Email</label>
        <input type="text" id="email" placeholder="Example: email@mail.com" {...register("mail")} />
        <label htmlFor="">Password</label>
        <input type="password" id="password" placeholder="*****" {...register("pass")} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
