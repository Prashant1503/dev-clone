import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      return alert("All fields are mandatory..");
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main" onSubmit={this.add}>
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              value={this.state.name}
            ></input>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              value={this.state.email}
            ></input>
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
