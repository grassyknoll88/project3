import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
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

import SearchDash from "./Pages/SearchDash";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/searchdash" component={SearchDash} />
        <Route component={SignUp} />
      </Switch>
    </div>
  </Router>

);

export default App;