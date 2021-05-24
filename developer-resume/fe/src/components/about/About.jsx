import React, { Component } from "react";
import "./about.css";

import User from "../../assets/images/user.jpg";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="container-fluid mt-3 mb-5">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">About Me</h3>
          <hr className="w-50 mx-auto pb-0"></hr>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-5 col-11">
            <img src={User} className="" width="420px" height="320px" />
          </div>

          {/*  */}
          <div className="col-lg-6 col-md-6 col-12">
            <h2>Won't to know me ?</h2>
            <hr></hr>
            <p>
              I'm a enthausiastic full-stack developer,I'm having a skill set in
              backend technologies i.e (Node.js,express.js) and worked on
              React.Js also
            </p>

            <button className="btn w-50">
              <a to="/know-more" className="nav-items">
                Know More
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
