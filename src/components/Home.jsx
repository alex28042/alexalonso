import React from "react";
import "../index.css";
import "./button/button.css";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <img src={require('C:/Users/Michele Ungolo/Desktop/PortaFolio/alexalonso/src/assets/photo.jpg')} className="h-72 rounded-2xl mb-10 shadow-xl"/>
      <h1 className="text-2xl font-bold	">Alejandro Alonso García</h1>
      <h2 className="text-lg mb-4">Software Developer</h2>
      <button>
        <span class="text">Contáctame</span>
      </button>
    </div>
  );
};

export default Home;
