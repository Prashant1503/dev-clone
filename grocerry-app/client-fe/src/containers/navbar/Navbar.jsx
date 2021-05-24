import React, { Component } from "react";
import "./navbar.css";

import brandLogo from "../../assets/images/grocerry_logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="top-header">
            <div id="left-items">
              <div className="brand-logo">
                <img src={brandLogo} width="35px" height="35px"></img>
              </div>
              <div id="location">
                <span>
                  <i className="bi bi-geo-alt-fill"></i>
                </span>

                <span>Select location</span>
                <p>Maharashtra,India</p>
              </div>
              <div id="search_product-bar"></div>
            </div>
            <div id="right-items"></div>
          </div>
        </div>
      </div>
    );
  }
}
