import React, { Component } from "react";
import "./appbar.css";

import { Input } from "../../components/index";

import { NavLink, Link } from "react-router-dom";

export default class Appbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink class="navbar-brand" to="/home">
            Dev<span style={{ color: "green" }}>Skill</span>
          </NavLink>

          {/* search bar */}

          <div className="search-section">
            <i className="fas fa-search mr-auto"></i>
            <input placeholder="Search dev,skills and more"></input>
          </div>

          {/* toogler */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* on-collapse */}
          <div
            className="navbar-collapse collapse w-100 order-3 dual-collapse2"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {/* dashboard nav-item */}
              <li className="nav-item">
                <i className="fa fa-fw fa-home"></i>

                <NavLink to="/home" className="nav-links">
                  Home
                </NavLink>
                <span>|</span>
              </li>

              {/* developer nav-item */}
              <li className="nav-item">
                <i className="fas fa-code"></i>
                <Link to="/developer" className="nav-links">
                  Developer
                </Link>
                <span>|</span>
              </li>

              {/*  Account nav-item*/}
              <li className="nav-item account">
                <i className="fas fa-user-circle"></i>
                <Link to="/account" className="nav-links">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
