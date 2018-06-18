import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
// import Nav from "./components/Nav/Nav";
// import DogCards from "./components/DogCards/DogCards";
import HeroPic from "./components/HeroPic/HeroPic";
import JoinButton from "./components/JoinButton/JoinButton";
import picture from "./assets/dogs.jpg";

const App = () => (
  <HeroPic backgroundImage={picture}>
    <h1>PupLife</h1>
    <h2>Does your pup need some new friends? You came to the right place!</h2>
    <JoinButton />
  </HeroPic>
);

export default App;
