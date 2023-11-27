import React from 'react';
import { Main } from './Main';
import { PrincessCard } from "./PrincessCard";
import { Link } from "react-router-dom";
import PrincessData from "../Data/PrincessData.json";
import { Search } from './Search';


export default function Home() {
  return (
    <div className="wrapper">
      <Main />
      <Search />
      
      <board className="content">
        {PrincessData.princesses.map((princess) => {
          const imageNameLowercase = princess.name.toLowerCase();
          const imagePath = `./Images1/${imageNameLowercase}.jpeg`;
          
          return (
            <Link key={princess.name} to={`details/${imageNameLowercase}`}>
              <PrincessCard name={princess.name} character={princess.character} image={imagePath} />
            </Link>
          );
        })}
      </board>
    </div>
  );
}


  // `./Images1/${princess.name.toLowerCase()}.jpeg`