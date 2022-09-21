import React from "react";
import Ability from "./Ability";

const Abilitys = () => {
  const abilitysDetails = [
    { name: "ReactJS", img: "/home/alex/Escritorio/PortaFolio/alexalonso/src/assets/react.png" },
    { name: "Python", img: null },
    { name: "React-Native", img: null },
    { name: "Firebase", img: null },
    { name: "AdobeXD", img: null },
    { name: "Flutter", img: null },
    { name: "Java", img: null },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl mb-10 font-bold">Habilidades</h1>
      <div className="flex flex-row w-3/4 justify-center">
        {abilitysDetails.map((e, i) => (
          <>
            <Ability key={i} name={e.name} img={e.img} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Abilitys;
