import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="offset container w-50 mt-5 mb-5">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Contact Us</h3>
          <hr className="w-50 mx-auto pb-0"></hr>
        </div>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" id="name"></input>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="email"></input>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
