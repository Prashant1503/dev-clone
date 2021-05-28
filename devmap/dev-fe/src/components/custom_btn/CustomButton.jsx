import React from "react";
import "./custom_btn.css";

const CustomButton = () => {
  return (
    <button className="google_btn" style={{ color: "white" }}>
      <a className="fab fa-google"></a>Sign in with google
    </button>
  );
};

export default CustomButton;
