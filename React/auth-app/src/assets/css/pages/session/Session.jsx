import { useForm } from "react-hook-form";

export const Session = () => {
  // Registrar cada uno de los input de los cuales queremos obtener datos
  const { register } = useForm();
  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" id="email" placeholder="Example: email@mail.com" />
        <label htmlFor="">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <label htmlFor="">Confirm Password</label>
        <input type="password" id="password" placeholder="Repeat your password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
