import React, { useEffect, useState } from "react";
import RepoCard from "react-repo-card";

const GithubRepositorie = (props) => {
  return (
    <div className="mr-4" style={{width: "405px"}}>
      <RepoCard username="alex28042" repository={props.repo.name} />
    </div>
  );
};

export default GithubRepositorie;
