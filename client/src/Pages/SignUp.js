import React, { Component } from "react";
import Container from "../components/Container";
import FooterPage from "../components/Footer/Footer";
import SignUpForm from "../components/SignUpForm/SignUpForm";

class SignUp extends Component {
  state = {
    test1: "One",
    test2: "Two"
  };

  render() {
    return (
      <Container>
        <SignUpForm />
      </Container>
    );
  }
}

export default SignUp;
