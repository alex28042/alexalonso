import React from "react";
import "../../index.css";
import "../Styles/button.css";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: "-20px",
      marginRight: "-45px",
      paddingBottom: "20px",
      paddingRight: "45px",
      display: "inline-block",
    }}
    animate={{ rotate: 20 }}
    transition={{
      yoyo: Infinity,
      from: 0,
      duration: 0.2,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    👋
  </motion.div>
);

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          src={require("C:/Users/Michele Ungolo/Desktop/PortaFolio/alexalonso/src/assets/photo.jpg")}
          className="h-72 rounded-2xl mb-10 shadow-xl"
        />
      </motion.div>
      <h1 className="text-2xl font-bold	">Alejandro Alonso García</h1>
      <div className="flex flex-row mt-2 mb-4">
        <h2 className="text-xl mr-1">I am</h2>
        <h2 className="text-xl">
          <TypewriterComponent
            options={{
              strings: ["a software developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      <a href="https://www.linkedin.com/in/alejandro-alonso-96b051224/">
        <button>
          <span class="text">Contact me</span>
        </button>
      </a>
      <motion.div
        initial={{ opacity: 1, scale: 2.5, y: -300 }}
        animate={{ opacity: 1, scale: 1.2, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="mt-5 text-xl">
          Hi <WavingHand /> !
        </h1>
      </motion.div>
    </div>
  );
};

export default Home;
