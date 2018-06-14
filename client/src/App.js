import React, { Component } from "react";
import "./App.css";
import DogCards from "./components/DogCards/DogCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogCards />
      </div>
    );
  }
}

export default App;
