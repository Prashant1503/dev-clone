import React, { useState } from "react";

import { UserProvider } from "./component/UserContext";
import Home from "./component/Home";
import About from "./component/About";
export default function App() {
  const [user, setUser] = useState({
    name: "Prashant",
    email: "prashant1998vani@gmail.com",
    personalInfo: [
      {
        age: 21,
        contact: 9664932838,
        gender: "Male",
      },
    ],
  });

  const changeName = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      name: e.target.value,
    });
  };
  return (
    <UserProvider
      value={{
        user,
        updateName: changeName,
      }}
    >
      <Home />
    </UserProvider>
  );
}
