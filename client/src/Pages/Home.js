import React from "react";
// import Container from "../components/Container";
import HeroPic from "../components/HeroPic";
import JoinButton from "../components/JoinButton/JoinButton";
import picture from "../assets/dogs.jpg";
import Nav from "../components/Nav/Nav";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import FooterPage from "../components/Footer/Footer";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Modal from "../components/Modal/Modal";

const Home = () => (
  // <Container>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <Nav />
        <HeroPic backgroundImage={picture}>
          <h1 className="title">PupLife</h1>
          <h2 className="description">Does your pup need some new friends?</h2>
          <h3 className="description">You came to the right place!</h3>
          <JoinButton />
        </HeroPic>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <InfoBoxes />
      </div>
    </div>
    <FooterPage />
  </div>
);

export default Home;
