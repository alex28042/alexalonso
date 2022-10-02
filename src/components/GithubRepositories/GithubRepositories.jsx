import React, { useEffect, useState } from "react";
import GithubRepositorie from "./GithubRepositorie";

const GithubRepositories = () => {
  const [repoDetailsJson, setRepoDetailsJson] = useState();

  useEffect(() => {
    try {
      fetch(`https://api.github.com/users/alex28042/repos`)
        .then((res) => res.json())
        .then((res) => setRepoDetailsJson(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(repoDetailsJson)

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl mb-44 font-bold">More Projects</h1>
      <div className=" flex md:grid md:grid-cols-2 flex-col">
        {repoDetailsJson?.map((e, i) => (
          <GithubRepositorie key={i} repo={e} />
        ))}
      </div>
    </div>
  );
};

export default GithubRepositories;
