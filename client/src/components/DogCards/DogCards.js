import React from "react";
import "./DogCards.css";

const DogCards = props => {
  return (
    <div className="container">
      <div className="DogCards card">
        <div
          className="img-container"
          src="http://via.placeholder.com/300x300"
          alt="Card image cap"
        >
          {/* <div className="card-body">
                <h5 className="card-title">dogInfo</h5>
                <p className="card-text"></p> */}
        </div>
      </div>
    </div>
  );
};

export default DogCards;
