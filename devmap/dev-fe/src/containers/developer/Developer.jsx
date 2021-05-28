import React, { Component } from "react";
import { DevProfile } from "..";
import { Button } from "../../components";
import "./developer.css";

export default class Developer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="row">
            <div className="col-lg-12 invitation-section">
              <p>No pending invitation</p>
              <button>Manage</button>
            </div>
          </div>
        </div>

        {/* 2nd row for developers list */}
        <div className="card ">
          <p>People you may know with similar roles</p>
          <button>See All</button>

          <div className="row">
            <DevProfile
              userName="Prashant vani"
              userHeadline="Intern at Techcoopers"
            />

            <DevProfile
              userName="Prashant vani"
              userHeadline="Intern at Techcoopers"
            />

            <DevProfile
              userName="Prashant vani"
              userHeadline="Intern at Techcoopers"
            />

            <DevProfile
              userName="Prashant vani"
              userHeadline="Intern at Techcoopers"
            />
          </div>
        </div>
      </div>
    );
  }
}
