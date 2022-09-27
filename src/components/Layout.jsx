import React, { useContext } from "react";
import { useEffect } from "react";
import ThemeProvider from "./ThemeProvider";

const Layout = ({ children }) => {

  return (
    <div
      className={
        "bg-slate-600 w-full h-full items-center flex flex-col"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
