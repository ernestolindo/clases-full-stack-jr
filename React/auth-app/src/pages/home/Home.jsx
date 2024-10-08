import { Link as FalsoA } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <FalsoA to="/session">Ingresar</FalsoA>
    </>
  );
};
