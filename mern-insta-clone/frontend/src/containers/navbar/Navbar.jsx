import React, { Component } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper white" role="navigation">
        <NavLink className="brand-logo" to="/">
          Social App
        </NavLink>
        <a href="#" data-target="mobile-nav" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        {/* nav-items */}
        <ul className="right hide-on-med-and-down ">
          <li>
            <NavLink to="/signup">Register User</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>

        <ul id="mobile-nav" className="sidenav">
          <li>
            <NavLink to="/signup">Register User</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
