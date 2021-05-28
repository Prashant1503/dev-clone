import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div className="mb-3">
      <label className="label">{props.label}</label>
      <input
        className={props.className}
        placeholder={props.placeholder}
        type={props.inputType}
        value={props.value}
      ></input>
    </div>
  );
};

export default Input;
