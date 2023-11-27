import React from "react";



export function PrincessCard({ name, character, image }) {
  return (
    <>
      <div className="card">
        <h2 className="title">
         {name.toUpperCase()}
        </h2>

        <p className="character">
          {character}
        </p>

        <img width={210} height={350} src={image} alt="image" />
      </div>
    </>
  );
}

