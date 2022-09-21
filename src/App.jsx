import React, { useEffect, useState } from 'react'
import Abilitys from './components/Abilitys'
import LoadingDots from './components/button/LoadingDots'
import Hobbies from './components/Hobbies'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'
import './index.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      {loading ? 
        <>
          <div className="flex bg-slate-600 flex-col items-center justify-center w-full h-screen">
            <LoadingDots />
          </div>
        </>
      :
        <>
          <div className='  bg-slate-600 w-full h-full items-center flex flex-col'>
            <NavBar /> 
            <Home />
            <Proyects />
            <Abilitys />
            <Hobbies />
          </div>
        </>
      }
    </>
  )
}

export default App