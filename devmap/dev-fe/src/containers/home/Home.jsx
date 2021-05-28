import React, { Component } from "react";
import "./home.css";

import { Post, Profile } from "./common/index";

export default class Home extends Component {
  render() {
    return (
      <div className="container ">
        <Post />
      </div>
    );
  }
}
