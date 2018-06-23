import React, { Component } from "react";
import Container from "../components/Container";
import FooterPage from "../components/Footer/Footer";
import DogCards from "../components/DogCards/DogCards";
class SearchDash extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  render() {
    return (
      <Container>
        <p>This is a SEARCH DASH PAGE test: {this.state.test1}</p>
        <DogCards />
      </Container>
    );
  }
}
export default SearchDash;
