import React from "react";
import Ability from "./Ability";
import SectionAnimation from "../Styles/SectionAnimation";

const Abilities = () => {
  const abilitysDetails = [
    "react",
    "Python",
    "React-Native",
    "Firebase",
    "AdobeXD",
    "Flutter",
    "Java",
    "Tailwind"
  ];
  return (
    <div
      id="Abilities"
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <h1 className="text-3xl mb-10 font-bold">Habilidades</h1>
      <SectionAnimation orientation={true}>
        <div className="md:flex md:flex-row grid grid-cols-3 ">
          {abilitysDetails.map((e, i) => (
            <Ability key={i} ability={e} />
          ))}
        </div>
      </SectionAnimation>
    </div>
  );
};

export default Abilities;
