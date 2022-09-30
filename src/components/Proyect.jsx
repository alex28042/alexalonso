import React from "react";
import { useState } from "react";
import "../index.css";
import ErrorButton from "./button/ErrorButton";
import SectionAnimation from "./SectionAnimation";

const Proyect = (props) => {
  const [errorOnPress, setErrorOnPress] = useState(false);

 /* const errorPress = (message) => {
    setErrorOnPress(true);
    setTimeout(() => {
      return <ErrorButton msg={message} />;
    }, 500);
  };*/

  return (
    <>
      <SectionAnimation orientation={false}>
        {props.type ? (
          <>
            <div className="hero flex md:mt-0  flex-col items-center justify-center w-full h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={require(`/home/alex/Escritorio/PortaFolio/alexalonso/src/assets/${props.image}`)}
                  className="max-w-sm h-2/5  rounded-lg shadow-2xl"
                />
                <div className="ml-10">
                  <h1 className="text-5xl font-bold">{props.name}</h1>
                  <p className="py-6 w-80">{props.description}</p>
                  <div className="flex flex-row mt-2 mb-4">
                    {props.programmingLenguague.map((e, i) => (
                      <div className="badge ml-1 opacity-60">{e}</div>
                    ))}
                  </div>
                  <div className="flex md:flex-row flex-col md:w-48 w-48 md:mb-0 mb-36">
                    <button
                      onClick={window.open(props.githubUrl)}
                      className="btn btn-primary md:mr-2 mb-2 flex flex-row"
                    >
                      <svg
                        className="h-7 w-7 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                      </svg>
                      <p>Código fuente</p>
                    </button>
                    <button
                      onClick={window.open(props.visitPage)}
                      className="btn btn-secondary flex flex-row"
                    >
                      <svg
                        className="h-7 w-7 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                      </svg>
                      <p>Visitar Página</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hero flex flex-col md:mt-0 items-center justify-center w-full h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={require(`/home/alex/Escritorio/PortaFolio/alexalonso/src/assets/${props.image}`)}
                  className="max-w-sm h-2/5 ml-10 rounded-lg shadow-2xl"
                />
                <div className="mr-10">
                  <h1 className="text-5xl font-bold">{props.name}</h1>
                  <p className="py-6 w-80">{props.description}</p>
                  <div className="flex flex-row mt-2 mb-4">
                    {props.programmingLenguague.map((e, i) => (
                      <div className="badge ml-1 opacity-60">{e}</div>
                    ))}
                  </div>
                  <div className="flex md:flex-row flex-col md:w-48 w-48">
                    <button
                      onClick={window.open(props.githubUrl)}
                      className="btn btn-primary md:mr-2 mb-2 flex flex-row"
                    >
                      <svg
                        className="h-7 w-7 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                      </svg>
                      <p>Código fuente</p>
                    </button>
                    <button
                      onClick={window.open(props.visitPage)}
                      className="btn btn-secondary flex flex-row"
                    >
                      <svg
                        className="h-7 w-7 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                      </svg>
                      <p>Visitar Página</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </SectionAnimation>
    </>
  );
};

export default Proyect;
