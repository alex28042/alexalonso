import React from "react";
import { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useLocalStorage(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
