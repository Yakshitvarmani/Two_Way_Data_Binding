import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [state, setState] = useState({ color: "" });

  let handleColor = x => {
    setState({ color: x });
  };
  return (
    <div>
      <h2>{state.color}</h2> 
      <Child handleColor={handleColor} />
    </div>
  );
};

export default Parent;
