import { LoginFormComponent } from "./components/LoginFormComponent";
import { RegisterFormComponent } from "./components/RegisterFormComponent";

export const Session = () => {
  return (
    <>
      <h1>Manejo de session</h1>
      <RegisterFormComponent />
      <LoginFormComponent />
    </>
  );
};
