import React from "react";
import Container from "../components/Container";
import HeroPic from "../components/HeroPic";
import JoinButton from "../components/JoinButton/JoinButton";
import picture from "../assets/dogs.jpg";
import Nav from "../components/Nav/Nav";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";

const Home = () => (
  <Container>
    <div className="row">
      <Nav />
      <HeroPic backgroundImage={picture}>
        <h1>PupLife</h1>
        <h2>
          Does your pup need some new friends? You came to the right place!
        </h2>
        <JoinButton />
      </HeroPic>
      <div className="row">
        <InfoBoxes />
      </div>
    </div>
  </Container>
);

export default Home;
