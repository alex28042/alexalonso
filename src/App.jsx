import React, { useContext, useEffect, useState } from "react";
import Abilitys from "./components/Abilitys";
import LoadingDots from "./components/button/LoadingDots";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Proyects from "./components/Proyects";
import SectionAnimation from "./components/SectionAnimation";
import ThemeProvider from "./components/ThemeProvider";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);

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
        <ThemeProvider>
           <Layout>
              <NavBar />
              <Home />
              <Proyects />
              <Abilitys />
              <SectionAnimation orientation={false}>
                <Hobbies />
              </SectionAnimation>
            </Layout>
        </ThemeProvider>
           
        </>
      )}
    </>
  );
};

export default App;
