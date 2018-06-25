import React, { Component } from "react";
import Container from "../components/Container";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import ImageUpload from "../components/ImageUpload/ImageUpload";

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
