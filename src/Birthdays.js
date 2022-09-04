import React from "react";
import "./Birthday.css";

export default function Birthdays(props) {
  return (
    <div className="birthday-flex-container">
      <div className="image-container">
        <img
          className="user-image center"
          src={props.selfie}
          alt={`Selfie of person`}
        />
      </div>
      <div className="user-info center">
        <h4 className="name">{props.name}</h4>
        <span className="age">{props.age} years</span>
      </div>
      <div className="delete-birthday-container">
        <span onClick={() => props.deleteBirthday()}>X</span>
      </div>
    </div>
  );
}
