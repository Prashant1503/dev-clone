import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.handleChange}
      id={props.id}
    >
      {props.title}
    </button>
  );
};

export default Button;
