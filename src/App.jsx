import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "react-daisyui";
import Abilities from "./components/Abilities/Abilities";
import Hobbies from "./components/Hobbies/Hobbies";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Proyects from "./components/Projects/Proyects";
import LoadingDots from "./components/Styles/LoadingDots";
import SectionAnimation from "./components/Styles/SectionAnimation";
import ThemeProvider from "./Context/ThemeProvider";
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
        <div className="flex bg-slate-600 flex-col items-center justify-center w-full h-screen">
          <LoadingDots />
        </div>
      ) : (
        <ThemeProvider>
          <Layout>
            <Navbar />
            <Home />
            <Proyects />
            <Abilities />
            <SectionAnimation orientation={false}>
              <Hobbies />
            </SectionAnimation>
          </Layout>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
