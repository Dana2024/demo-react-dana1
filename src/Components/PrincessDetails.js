import React from "react";
import { useParams } from "react-router-dom";
import PrincessData from "../Data/PrincessData.json";
import {Main} from "./Main";

export default function PrincessDetails() {
  const { name } = useParams();

  const princess = PrincessData.princesses.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!princess) {
    return <div>Princess not found</div>;
  }
  const nameP = princess.name;
  const imagePath1 = `/Images1/${nameP}.jpeg`;
  return (
    <div className="wrapper">
      <Main />
      <div className="info, d-flex justify-between p-50 align-center">
        <img width={250} height={350} src={imagePath1} alt="princess"/>
        <div className="details p-50">
          <h2>{princess.name.toUpperCase()}</h2>
          <h2>{princess.character}</h2>
          <p>Film: {princess.film}</p>
          <p>Description: {princess.description}</p>
        </div>
      </div>
    </div>
 
  );
}
