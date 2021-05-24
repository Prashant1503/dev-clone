import React, { Component } from "react";
import "./newsletter.css";

export default class NewsLetter extends Component {
  render() {
    return (
      <div className="sec1 container-fluid mt-5 pd-5">
        <h2 className="mt-5">NewsLetter</h2>
        <p>Subscribe to our newsletter to receive further updates.</p>
        <form className="form-inline mt-2">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              id="email"
            />
          </div>

          <button type="submit" className="btn btn-dark ml-2">
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}
