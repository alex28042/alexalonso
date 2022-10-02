import React, { useEffect, useState } from "react";
import RepoCard from "react-repo-card";

const GithubRepositorie = (props) => {
  return (
    
    <div className="md:mr-4 mt-4" style={{width: "250px"}}>
      <RepoCard username="alex28042" repository={props.repo.name} />
    </div>
    

  );
};

export default GithubRepositorie;
