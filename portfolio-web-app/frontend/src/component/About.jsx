import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function About() {
  const about = useContext(UserContext);

  return (
    <>
      <hr></hr>
      {about.personalInfo.map((value, key) => {
        return (
          <div key={key}>
            <h1>About Section</h1>
            <p>My age is {value.age}</p>
            <p>Contact Number : {value.contact}</p>
          </div>
        );
      })}
    </>
  );
}
