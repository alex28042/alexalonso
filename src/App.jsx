import React, { useContext, useEffect, useState } from "react";
import Abilitys from "./components/Abilitys";
import LoadingDots from "./components/button/LoadingDots";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Proyects from "./components/Proyects";
import SectionAnimation from "./components/SectionAnimation";
import ThemeContext from "./Context/ThemeContext";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("bg-slate-600");
  const [loading, setLoading] = useState(true);
  const value = { theme, setTheme };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="flex bg-slate-600 flex-col items-center justify-center w-full h-screen">
            <LoadingDots />
          </div>
        </>
      ) : (
        <>
          <ThemeContext.Provider value={value}>
            <Layout>
              <NavBar />
              <Home />
              <Proyects />
              <Abilitys />
              <SectionAnimation orientation={false}>
                <Hobbies />
              </SectionAnimation>
            </Layout>
          </ThemeContext.Provider>
        </>
      )}
    </>
  );
};

export default App;
