import React, { Component } from "react";
import "./home.css";

import { About, Contact, NewsLetter, Project } from "../index";

import Logo from "../../assets/images/img-2.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <img className="img-fluid" src={Logo}></img>

        <div className="heading-content text-center">
          <h5>Hello,I'm</h5>
          <h1>Prashant Vani</h1>
        </div>

        <About />
        <Project />
        <NewsLetter />
        <Contact />
      </div>
    );
  }
}
