import React from "react";

const Child = props => {
  let handleClick = e => {
    props.handleColor(e.target.value);
  };
  return (
    <div>
      <button value="red" onClick={handleClick}>
        Click
      </button>
      <button value="brown" onClick={handleClick}>
        click
      </button>
      <button value="purple" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default Child;
