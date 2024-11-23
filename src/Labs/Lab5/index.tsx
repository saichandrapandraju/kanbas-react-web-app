import React from "react";
import PathParameters from "./PathParameters";
import EnvironmentVariables from "./EnvironmentVariables";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";

export default function Lab5() {
  return (
    <div>
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href="http://localhost:4000/lab5/welcome" 
           className="list-group-item">
          Welcome
        </a>
      </div>
      <EnvironmentVariables />
      <PathParameters />
      <WorkingWithObjects />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArrays />
      <WorkingWithArraysAsynchronously />

    </div>
  );
}