import React, { Component } from "react";
import Container from "../components/Container";
import DogCards from "../components/DogCards/DogCards";

class SearchDash extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  render() {
    return (
      <Container>
        <DogCards />
      </Container>
    );
  }
}
export default SearchDash;
