import React, { useState } from "react";
import data from "../data";
import styles from "../styles/styles.css";

export const List = () => {
  const [state, setState] = useState();

  const order = data.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });


  const handleClick = () => {
    setState(order);
  };

  const handleClose = () => {
    setState();
  };

  return (
    <div className="container-list">
      <button onClick={() => handleClick()}>Listar</button>
      <div className={state ? "list" : null}>
        {state ? <button onClick={() => handleClose()}>X</button> : null}
        {state
          ? state.map((word) => {
              return <h2>{word.name}</h2>;
            })
          : null}
      </div>
    </div>
  );
};
