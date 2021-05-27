import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-5 col-md-5 col-12 pb-5">
        <div className="card">
          <img
            className="card-img-top"
            alt="one"
            src={this.props.image}
            style={{ alignItems: "center" }}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <a href="#" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
