import React, { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
