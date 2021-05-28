import React, { Component } from "react";
import { Avatar } from "../../../assets/index";
import { Input, Button, GoogleButton } from "../../../components/index";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="card mx-auto">
        <img src={Avatar} id="user-icon" className="mx-auto"></img>
        <h3 id="card_title">Welcome Back</h3>
        <div className="card-body">
          <form>
            <Input
              className="form-control input"
              type="email"
              placeholder="example@123.com"
              label="Enter email address"
            />

            <Input
              className="form-control input"
              type="password"
              placeholder="12345678"
              label="Password"
            />
            <Button
              title="Login User"
              className="btn btn-light"
              id="login_button"
            />

            <span>or</span>
          </form>

          {/* auth section */}
          <div className="row">
            <GoogleButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
