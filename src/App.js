import React from 'react'
import Abilitys from './components/Abilitys'
import Hobbies from './components/Hobbies'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'
import './index.css'

const App = () => {
  return (
    <>
      <NavBar /> 
      <Home />
      <Proyects />
      <Abilitys />
      <Hobbies />
    </>
  )
}

export default App