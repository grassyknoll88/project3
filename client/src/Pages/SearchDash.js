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

  // componentDidMount() {
  //   API.getDogs(data).then(data => {
  //     app.post(
  //       "/signup",
  //       passport.authenticate("local-signup", {
  //         successRedirect: "/profile",

  //         failureRedirect: "/signup"
  //       })
  //     );

  //     app.post(
  //       "/login",
  //       passport.authenticate("local-signin", {
  //         successRedirect: "/profile",
  //         failureRedirect: "/"
  //       })
  //     );
  //   });
  // }

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
