import React from 'react'
import GithubRepositories from './GithubRepositories'
import Proyect from './Proyect'

const Proyects = () => {
  const proyectDetails = [
    {name: "MyRoutine", Description: "Es una aplicacion basada en suscripciones, con alguna similaridad a 'OnlyFans', pero en base a rutinas de gimnasio", programmingLenguague: ["React-native", "Firebase"], githubUrl: null, visitPage: null, image: ""},
    {name: "WordlES", Description: "WordlES con +10k descargas en PlayStore, que está basada en aplicación Wordle", programmingLenguague: ["Flutter"], githubUrl: null, visitPage: null, image: ""},
  ]

  return (
    <div id='Projects'>
      {proyectDetails.map((e, i) => (
        <Proyect 
          name={e.name}
          description={e.Description}
          programmingLenguague={e.programmingLenguague}
          githubUrl={e.githubUrl}
          visitPage={e.visitPage}
          image={e.image}
          type={i % 2 === 0}
        />
      ))}
      <GithubRepositories />
    </div>
  )
}

export default Proyects