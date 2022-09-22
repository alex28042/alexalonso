import React, { createContext } from 'react'

const ThemeContext = createContext({
    theme: "bg-slate-600",
    setTheme: () => {}
})

export default ThemeContext