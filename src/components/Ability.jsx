import src from "daisyui";
import React from "react";

const Ability = (props) => {
  return (
    <div className="flex flex-col ml-7 mt-5 items-center">
      <div className=" bg-slate-500 rounded-lg h-20 w-20 flex items-center justify-center">
        <img   src={require(`/home/alex/Escritorio/PortaFolio/alexalonso/src/assets/${props.ability}.png`)} />
      </div>
      <h1 className="mt-1">{props.ability}</h1>
    </div>
  );
};

export default Ability;
