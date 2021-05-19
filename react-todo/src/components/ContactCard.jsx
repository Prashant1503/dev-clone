import React from "react";
import User from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={User} alt="user"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>

        <i className="trash alternate outline icon"></i>
      </div>
    </div>
  );
};

export default ContactCard;
