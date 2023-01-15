import React from "react";
import GithubRepositories from "../GithubRepositories/GithubRepositories";
import SectionAnimation from "../Styles/SectionAnimation";
import Project from "./Project";

const Proyects = () => {
  const proyectDetails = [
    {
      name: "Universitiers",
      Description:
        "Universitiers es una aplicación de citas enfocada en conectar a estudiantes universitarios y graduados, permitiendo crear perfiles con información de la universidad, carrera y intereses, y conectarse con personas de un ambiente académico similar.",
      programmingLenguague: ["React-native", "Firebase"],
      githubUrl: null,
      visitPage: null,
      image: "universitiers.png",
    },
    {
      name: "WordlES",
      Description:
        "WordlES es una aplicación con más de 10,000 descargas en PlayStore, la cual está basada en la aplicación Wordle.",
      programmingLenguague: ["Flutter"],
      githubUrl: "https://github.com/alex28042/Wordle-Flutter-app",
      visitPage: null,
      image: "wordles.png",
    },
    {
      name: "MyRoutine",
      Description:
        "MyRoutine es una aplicación de entrenamiento personalizado que ofrece rutinas de gimnasio para comprar o suscribirse. Los usuarios también pueden crear y vender sus propias rutinas. Incluye un seguimiento de progreso y consejos personalizados.",
      programmingLenguague: ["React-native", "Firebase"],
      githubUrl: null,
      visitPage: null,
      image: "myroutine.png",
    },
  ];

  return (
    <div id="Projects">
      {proyectDetails.map((e, i) => (
        <Project
          key={i}
          name={e.name}
          description={e.Description}
          programmingLenguague={e.programmingLenguague}
          githubUrl={e.githubUrl}
          visitPage={e.visitPage}
          image={e.image}
          type={i % 2 === 0}
        />
      ))}
      <SectionAnimation>
        <GithubRepositories />
      </SectionAnimation>
    </div>
  );
};

export default Proyects;
