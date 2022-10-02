import React, { useContext } from "react";
import { useEffect } from "react";
import  { ThemeContext } from "../../Context/ThemeProvider";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme
          ? "bg-slate-200 w-full h-full items-center flex flex-col"
          : "bg-slate-600 w-full h-full items-center flex flex-col"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
