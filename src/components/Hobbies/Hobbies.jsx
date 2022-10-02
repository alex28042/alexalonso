import React from "react";

const Hobbies = () => {
  return (
    <div
      id="Hobbies"
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <h1 className="text-3xl font-bold">Hobbies</h1>
      <img
        src={require("C:/Users/Michele Ungolo/Desktop/PortaFolio/alexalonso/src/assets/2222.jpg")}
        className="md:h-72 h-44 rounded-2xl mb-10 mt-10 shadow-xl"
      />
      <h2 className="md:w-3/12 w-3/4 mb-2">
        Parte de mi tiempo lo utilizo para ver Rick y Morty, serie de dibujos
        que me encanta debido al argumento de la serie que gira alrededor de la
        ciencia
      </h2>
    </div>
  );
};

export default Hobbies;
