import React, { useState } from "react";
import data from '../data'; 
import styles from "../styles/styles.css";

export const RandomWord = () => {

  const [state, setState] = useState();

  const handleClick = () => {
    const random = data[Math.floor(Math.random() * data.length)];
    setState(random);
  };


  const handleClose = () => {
    setState(); 
  }

  return (
    <div>
      <header>
        <h1>Definiciones y conceptos</h1>
      </header>
      <body>
        {state ? (
          <div className="description">
            <button onClick={() => handleClose()}>X</button>
            <h2>{state?.name}:</h2>
            <h4>{state?.description}</h4>
          </div>
        ) : null}
      </body>
      <button onClick={() => handleClick()}>Palabra aleatoria</button>
    </div>
  );
};
