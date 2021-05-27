import React, { Component } from "react";
import ComponentB from "./ComponentB";
import UserContext, { UserConsumer } from "./UserContext";

export default class Home extends Component {
  // static contextType = UserContext;

  render() {
    return (
      <UserConsumer>
        {(props) => {
          return (
            <div>
              <input
                placeholder="Enter your name"
                onChange={props.updateName}
              ></input>
              <h1>Hello I am ${props.user.name}</h1>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
