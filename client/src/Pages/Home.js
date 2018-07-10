import React from "react";
// import Container from "../components/Container";
import HeroPic from "../components/HeroPic";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import ModalComponent from "../components/Modal/Modal";
import ModalPage from "../components/MessagingModal/MessagingModal";

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <HeroPic>
          <h1 className="title">PupLife</h1>
          <h2 className="description">Does your pup need some new friends?</h2>
          <h3 className="description">You came to the right place!</h3>
          {/* <JoinButton /> */}
          <ModalComponent />
        </HeroPic>
      </div>
    </div>
    <InfoBoxes />
  </div>
);

export default Home;
