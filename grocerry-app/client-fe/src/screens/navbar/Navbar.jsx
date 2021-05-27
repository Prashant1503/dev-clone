import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <a href="#">
                  Grocerry<span>Mart</span>
                </a>
              </div>

              {/* nav */}
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Promotion</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>

                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="#">
                      <i className="fa fa-shopping" aria-hidden="true"></i>
                      <span id="checkout_items" className="checkout_items">
                        2
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
