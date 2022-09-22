import React, { useEffect, useState } from "react";

const GithubRepositorie = () => {
  const [repoDetails, setRepoDetails] = useState();

  useEffect(() => {
    try {
        fetch(`https://api.github.com/users/alex28042`)
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>GithubRepositorie</div>;
};

export default GithubRepositorie;
