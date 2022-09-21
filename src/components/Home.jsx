import React from "react";
import "../index.css";
import "./button/button.css";
import { motion } from "framer-motion";


const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      yoyo: Infinity,
      from: 0,
      duration: 0.2,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋
  </motion.div>
);


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <img src={require('/home/alex/Escritorio/PortaFolio/alexalonso/src/assets/photo.jpg')} className="h-72 rounded-2xl mb-10 shadow-xl"/>
      <h1 className="text-2xl font-bold	">Alejandro Alonso García</h1>
      <h2 className="text-lg mb-4">Software Developer</h2>
      <button>
        <span class="text">Contact me</span>
      </button>
      <h1 className="mt-5 text-xl">
        Hi <WavingHand />  !
      </h1>
    </div>
  );
};



export default Home ;
