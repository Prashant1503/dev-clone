import React, { Component } from "react";
import "./input.css";

export default class CustomInput extends Component {
  render() {
    return (
      <div>
        <label for="first_name">{this.props.label}</label>
        <input
          placeholder={this.props.placeholder}
          type={this.props.type}
          className="custom-input"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
