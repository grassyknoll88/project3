import React from "react";
import "./JoinButton.css";

const JoinButton = props => (
  <button onClick={props.onClick} className={"btn"}>
    JOIN TODAY
  </button>
);

export default JoinButton;
