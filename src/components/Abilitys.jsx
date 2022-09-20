import React from "react";
import Ability from "./Ability";

const Abilitys = () => {
  const abilitysDetails = [
    { name: "ReactJS", img: "" },
    { name: "Python", img: "" },
    { name: "React-Native", img: "" },
    { name: "Firebase", img: "" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold">Habilidades</h1>
      <div className="flex flex-row">
        {abilitysDetails.map((e, i) => (
          <>
            <Ability name={e.name} img={e.img} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Abilitys;
