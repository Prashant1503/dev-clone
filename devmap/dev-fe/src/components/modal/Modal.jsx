import React from "react";
import "./modal.css";

import { Link } from "react-router-dom";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="">
          {/* 1st modal item */}
          <li className="nav-item">
            <i className={props.icon}></i>
            <Link to={props.path}>{props.linkText} </Link>
          </li>

          <hr></hr>

          {/* 2nd modal item */}
          <li className="nav-item">
            <i className={props.icon}></i>
            <Link to={props.path}>{props.linkText} </Link>
          </li>

          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Modal;
