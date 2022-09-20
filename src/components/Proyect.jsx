import React from "react";
import "../index.css";

const Proyect = (props) => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="ml-10">
          <h1 className="text-5xl font-bold">{props.name}</h1>
          <p className="py-6 w-80">{props.description}</p>
          <div className="flex flex-row mt-2 mb-4">
            {props.programmingLenguague.map((e, i) => (
                <>
                    <div className="badge ml-1">{e}</div>
                </>
            ))

            }
          </div>
          <div className="flex flex-row">
            <button
              onClick={window.open(props.githubUrl)}
              className="btn btn-primary justify-between mr-2 flex flex-row"
            >
              <svg
                className="h-9 w-9 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-code"
                viewBox="0 0 16 16"
              >
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
              </svg>
              <p>Código fuente</p>
            </button>
            <button
              onClick={window.open(props.visitPage)}
              className="btn btn-secondary justify-between flex flex-row"
            >
              <svg
                className="h-9 w-9 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-code"
                viewBox="0 0 16 16"
              >
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
              </svg>
              <p>Visitar Página</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
