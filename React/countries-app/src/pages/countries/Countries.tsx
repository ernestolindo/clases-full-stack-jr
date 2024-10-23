import { useEffect, useState } from "react";
import { ICountry } from "../../models/ICountry";
import { ListCountries } from "./components/ListCountries";

const APIuri = "https://restcountries.com/v3.1/all";

export const Countries = () => {
  // Estado Countries
  const [countries, setCountries] = useState<ICountry[] | []>([]);

  // Funcion para traer los paises desde el servidor
  const getCountries = async () => {
    const response: Response = await fetch(APIuri);
    const data: ICountry[] = await response.json();
    console.log(data);
    // Setear estado countries
    setCountries(data);
  };

  useEffect(() => {
    // Hacer esto al cargar la pagina
    getCountries();
  }, []);

  return (
    <>
      Countries
      {/* Pasarle nuestro array de objetos: paises a ListCountries */}
      <ListCountries countries={countries} />
    </>
  );
};
