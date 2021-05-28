import React, { Component } from "react";
import "./register.css";

import { Avatar } from "../../../assets/index";
import {
  GoogleButton,
  Input,
  Button,
  DevRoleSelector,
} from "../../../components/index";

export default class Register extends Component {
  render() {
    return (
      <div className="card mx-auto">
        <img src={Avatar} id="user-icon" className="mx-auto"></img>
        <h3 id="card_title">Register here</h3>

        <div className="card-body">
          <form>
            <Input
              className="form-control input"
              type="text"
              placeholder="example_123"
              label="Display name"
            />

            <Input
              className="form-control input"
              type="email"
              placeholder="example@123.com"
              label="email"
            />

            <DevRoleSelector ariaLabel="Choose" />
            <Input
              className="form-control input"
              type="password"
              placeholder="12345678"
              label="Password"
            />
            <Button
              title="Register developer"
              className="btn btn-light"
              id="login_button"
            />

            <span>or</span>
          </form>

          {/* auth section */}
          <div className="row">
            <a>Already have an account?</a>
          </div>
        </div>
      </div>
    );
  }
}
