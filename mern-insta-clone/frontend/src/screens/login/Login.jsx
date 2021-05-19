import React, { Component } from "react";
import { CustomButton } from "../../components/index";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("Email : " + this.state.password + "");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="root-container">
          <div className="card">
            <div className="row">
              <h5 className="card_title">
                Welcome User,<span>Sign In </span>
              </h5>
              <div className="input-container">
                <form onSubmit={this.handleSubmit}>
                  <div class="input-field col s12">
                    <input
                      placeholder="Enter email"
                      type="email"
                      className="custom-input"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div class="input-field col s12">
                    <input
                      label="Password"
                      placeholder="Enter password"
                      type="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </div>

                  {/* button */}

                  <button title="Sign In " onClick={this.handleSubmit}>
                    Login
                  </button>
                </form>
              </div>

              <div className="auth-container">
                <p>
                  <span>Forgot Password</span>
                </p>
                &nbsp; &nbsp; &nbsp;
                <p>New User</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
