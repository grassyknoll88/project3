import React, { Component } from "react";
import Container from "../components/Container";
import SignUpForm from "../components/SignUpForm/SignUpForm";

import API from "../utils/API";
// Requiring middleware for checking if a user is logged in
//const isAuthenticated = require("../../../config/middleware")

class SignUp extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  onSignUpSubmit = data => {
    API.signup(data)
      .then(response => {
        console.log(response);
        //send to profile page
      })
      .catch(err => {
        if (err.response) {
          alert(err.response.data.error[0].message);
        } else {
          alert("Something bad happened. Try again.");
        }
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <SignUpForm onFormSubmit={this.onSignUpSubmit} />
      </Container>
    );
  }
}

export default SignUp;
