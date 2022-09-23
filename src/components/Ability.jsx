import React from "react";

const Ability = (props) => {
  console.log(props.ability.img);
  return (
    <div className="flex flex-col ml-7 mt-5 items-center">
      <div className=" bg-slate-500 rounded-lg h-20 w-20 items-center justify-center opacity-10">
        {props.ability.img !== null ? (
          <img src={props.ability.img} className="h-10 w-10" />
        ) : (
          <></>
        )}
      </div>
      <h1 className="mt-1">{props.ability.name}</h1>
    </div>
  );
};

export default Ability;
