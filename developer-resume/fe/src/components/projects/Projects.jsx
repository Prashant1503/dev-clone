import React, { Component } from "react";
import "./project.css";

import { Card } from "../index";
import { CovidAppImgOne, EcomImgOne } from "../../constants/contants";

export default class Projects extends Component {
  render() {
    const projectArr = [
      {
        title: "Covid-19 Android App",
        description: "An App that show's current covid-19 cases records",
        img: CovidAppImgOne,
      },

      {
        title: "Ecommerce Clone",
        description: "An ecommerce clone android app",
        img: EcomImgOne,
      },
    ];
    return (
      <div id="service" className="container mt-3 mb-5">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Projects</h3>
          <hr className="w-50 mx-auto pb-0"></hr>
        </div>

        {/* card  */}
        <div className="row">
          {projectArr.map((item, key) => {
            return (
              <Card
                key={key}
                title={item.title}
                image={item.img}
                description={item.description}
              />
            );
          })}
        </div>

        <button className="knowMore button w-50mx-auto mb-5">
          <a href="#">Know More</a>
        </button>
      </div>
    );
  }
}
