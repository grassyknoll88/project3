import React, { Component } from "react";
import Container from "../components/Container";
import DogCards from "../components/DogCards/DogCards";
import SearchForm from "../components/SearchForm/SearchForm";
import passport from "passport";
import API from "../utils/API";

class SearchDash extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <SearchForm />
        <DogCards dogs={this.state.dogs} />
      </Container>
    );
  }
}

export default SearchDash;
