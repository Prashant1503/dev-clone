import React from "react";

const Select = (props) => {
  return (
    <>
      <label>Select Your role</label>
      <select className="form-select selection" aria-label={props.ariaLabel}>
        <option>Sr.Backend developer</option>
        <option value="2">Jn.Backend developer</option>
        <option value="3">UI/UX Developer</option>
        <option value="4">Quality Analyst</option>
        <option value="5">Trainee</option>
      </select>
    </>
  );
};

export default Select;
