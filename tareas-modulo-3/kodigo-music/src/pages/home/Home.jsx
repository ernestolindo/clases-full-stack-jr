import React from "react";

export const Home = () => {
  return (
    <>
      <img src="/Kodigo music.jpg" alt="Kodigo Music" style={{ width: "20vw", height: "auto" }} />
      <h1>Kodigo Music</h1>
      <div class="search-bar">
        <input type="text" placeholder="Escribe tu búsqueda aquí..." aria-label="Buscar" />
        <button type="submit">Buscar</button>
      </div>
      <button>Mi cuenta</button>
      <h2>¡Bienvenido!</h2>
      <p>
        ¡Gracias por registrarte! Ahora puedes disfrutar de todas las funciones de Kodigo Music.
      </p>
      <h2>Playlists para codear</h2>
      <div>
        <div>
          <img src="/bites.jpeg" alt="Bites" style={{ width: "20vw", height: "auto" }} />
          <h3>Bites</h3>
        </div>
        <div>
          <img
            src="/hacking-music.jpeg"
            alt="Hacking music"
            style={{ width: "20vw", height: "auto" }}
          />
          <h3>Hacking music</h3>
        </div>
        <div>
          <img
            src="/been-a-fine-day.jpeg"
            alt="Been a fine day"
            style={{ width: "20vw", height: "auto" }}
          />
          <h3>Been a fine day</h3>
        </div>
      </div>
      <h2>Los inmortales</h2>
      <div>
        <img
          src="//e.snmc.io/i/300/w/3a362e736aa2c8e3e9e2672b01c5fd04/12188855"
          alt="The Beatles - Abbey Road"
        />

        <h3>The Beatles - Abbey Road</h3>

        <img
          src="//e.snmc.io/i/300/w/86d4e5bbfc3c3bd5f792d9b9969572b9/11486295"
          alt="Michael Jackson - Thriller"
        />
        <h3>Michael Jackson - Thriller</h3>
        <img
          src="//e.snmc.io/i/300/w/393e991d1d736c5cb086841ef0b5b907/12206378"
          alt="Pink Floyd - The Dark Side of the Moon"
        />
        <h3>Pink Floyd - The Dark Side of the Moon</h3>
      </div>
    </>
  );
};
