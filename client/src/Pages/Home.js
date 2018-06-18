import React from "react";
// import Container from "../components/Container";
import HeroPic from "../components/HeroPic";
import JoinButton from "../components/JoinButton/JoinButton";
import picture from "../assets/dogs.jpg";
import Nav from "../components/Nav/Nav";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import ImageUpload from "../components/ImageUpload/ImageUpload";

const Home = () => (
  // <Container>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <Nav />
        <HeroPic backgroundImage={picture}>
          <h1>PupLife</h1>
          <h2>
            Does your pup need some new friends? You came to the right place!
          </h2>
          <JoinButton />
        </HeroPic>
      </div>
      <div className="row">
        <div className="col-12">
          <InfoBoxes />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
