import React from 'react'
import Proyect from './Proyect'

const Proyects = () => {
  const proyectDetails = [
    {name: "MyRoutine", Description: "Es una aplicacion basada en suscripciones, con alguna similaridad a 'OnlyFans', pero en base a rutinas de gimnasio", programmingLenguague: ["React-native", "Firebase"], githubUrl: null, visitPage: null, image: ""},
  ]

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <Proyect 
        name={proyectDetails[0].name}
        description={proyectDetails[0].Description}
        programmingLenguague={proyectDetails[0].programmingLenguague}
        githubUrl={proyectDetails[0].githubUrl}
        visitPage={proyectDetails[0].visitPage}
        image={proyectDetails[0].image}
      />
    </div>
  )
}

export default Proyects