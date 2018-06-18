import React from "react";
import "./HeroPic.css";
import picture from "../../assets/dogs.jpg";

const HeroPic = props => (
  <div
    className="hero text-center"
    style={{ backgroundImage: `src=${picture}` }}
  >
    {props.children}
  </div>
);

export default HeroPic;
