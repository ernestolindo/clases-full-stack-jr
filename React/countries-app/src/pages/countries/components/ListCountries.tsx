import { ICountry } from "../../../models/ICountry";

interface ICountriesProps {
  countries: ICountry[];
}

export const ListCountries: React.FC<ICountriesProps> = ({ countries }) => {
  return (
    <>
      {countries.length > 0 ? (
        countries.map((country: ICountry, index: number) => {
          return (
            <div key={index}>
              <h1>{country.name.common}</h1>
            </div>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
