import React from "react";
import GithubRepositories from "../GithubRepositories/GithubRepositories";
import SectionAnimation from "../Styles/SectionAnimation";
import Project from "./Project";

const Proyects = () => {
  const proyectDetails = [
    {
      name: "MyRoutine",
      Description:
        "It is a subscription based app, with some similarity to 'OnlyFans', but based on gym routines",
      programmingLenguague: ["React-native", "Firebase"],
      githubUrl: null,
      visitPage: null,
      image: "myroutine.png",
    },
    {
      name: "WordlES",
      Description:
        "WordlES with +10k downloads on PlayStore, which is based on Wordle app",
      programmingLenguague: ["Flutter"],
      githubUrl:"https://github.com/alex28042/Wordle-Flutter-app",
      visitPage: null,
      image: "wordles.png",
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
