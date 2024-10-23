import "./App.css";
const BASEurl = "https://reqres.in/";
function App() {
  const login = async (credentials) => {
    // REALIZAR LA CONSULTA - ENVIAR UN MENSAJERO
    const response = await fetch(BASEurl + "api/login", {
      method: "POST",
      // Configs o caracteristicas de nuestra peticion
      headers: {
        // Si enviamos dato le aclaramos el tipo de dato enviado
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    console.log(data);
  };

  const getUsers = async (token) => {
    const response = await fetch(BASEurl + "api/users?page=2", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // Esperar que la peticion se respuesta y luego lo parseamos a JSON y lo consologueamos
    const data = await response.json();
    console.log(data.data);
  };

  login({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  });

  getUsers("QpwL5tke4Pnpja7X4");

  return (
    <>
      <h1>Practica de metodos HTTP FETCH</h1>
    </>
  );
}

export default App;
