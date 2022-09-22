import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Layout = ({children}) => {
  const {theme} = useContext(ThemeContext)
  
  const bg = theme == "bg-slate-600" ? "bg-slate-600 w-full h-full items-center flex flex-col" : "bg-slate-200 w-full h-full items-center flex flex-col"
  
  return (
    <div className={bg}>
        {children}
    </div>
  )
}

export default Layout