import React, { Component } from "react";

import { Navbar } from "./screens/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          Obj.name = result[i].name;
          Obj["username"] = result[i].username;
          Obj["email"] = result[i].email;

          Obj["city"] = result[i].address.city;

          console.log(Obj);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}
export default App;
