import React, { Component } from "react";
import Container from "../components/Container";
import FooterPage from "../components/Footer/Footer";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import ImageUpload from "../components/ImageUpload/ImageUpload";

// Requiring middleware for checking if a user is logged in
//const isAuthenticated = require("../../../config/middleware")

class SignUp extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  render() {
    return (
      <Container>
        <SignUpForm />
        <ImageUpload />
      </Container>
    );
  }
}

export default SignUp;
