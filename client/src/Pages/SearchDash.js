import React, { Component } from "react";
import Container from "../components/Container";

class SearchDash extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  render() {
    return (
      <Container >
        <p>This is a SEARCH DASH PAGE test: {this.state.test1}</p>
      </Container>
    );  }
}
export default SearchDash;
