import React, { Component } from "react";
import Container from "../components/Container";
import DogCards from "../components/DogCards/DogCards";
import SearchForm from "../components/SearchForm/SearchForm";

class SearchDash extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  render() {
    return (
      <Container>
        <SearchForm />
        <DogCards
        // dogs={this.state.dogs}  example
        />
      </Container>
    );
  }
}
export default SearchDash;
