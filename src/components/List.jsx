import React, { useState } from "react";
import data from "../data.json";
import "../styles/styles.css";

export const List = () => {
  const [state, setState] = useState();

  const preSorted = data;

  function SortArray(x, y) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  }

  const sortedData = preSorted.sort(SortArray);

  const handleClick = () => {
    setState(sortedData);
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
          ? state.map((word, i) => {
              return <h2 key={i}>{word.name}</h2>;
            })
          : null}
      </div>
    </div>
  );
};
