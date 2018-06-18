import React from "react";
import Container from "../Container/Container";
import "./InfoBoxes.css";

const InfoBoxes = props => (
  <div>
    <div className="row">
      <div className="col-12">
        <h1>About PupLife</h1>
      </div>
    </div>

    <Container>
      <div className="row">
        <div className="col-6">
          <h3>We love dogs!</h3>
        </div>
      </div>
    </Container>
  </div>
);

export default InfoBoxes;
