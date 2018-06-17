import React from "react";
import "./HeroPic.css";

const HeroPic = props => (
  <div
    className="hero text-center"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>
);

export default HeroPic;
