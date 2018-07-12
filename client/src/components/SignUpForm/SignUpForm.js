import React, { Component } from "react";
import "./SignUpForm.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const required = value => {
  if (!value.toString().trim().length) {
    return "require";
  }
};

const email = value => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }
};

class SignUpForm extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
    pet_name: "",
    state: "",
    city: "",
    breed: "",
    size: "",
    description: "",
    email: "",
    imgUrl: "",

  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log("name = ", name);
    console.log("value = ", value);

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    API.signup({
      username: this.state.username,
      password: this.state.password,
      pet_name: this.state.pet_name,
      state: this.state.state,
      city: this.state.city,
      breed: this.state.breed,
      size: this.state.size,
      description: this.state.description,
      email: this.state.email,
      imgUrl: this.state.imgurl
    }).then(res => {
      console.log("signup successful", res.data);
      window.location.pathname = `/profile/${res.data.id}`;

      
    });
  };

  onComplete = imgurl => {
    console.log(imgurl);
    this.setState({ imgurl: imgurl });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="searchForm">
        <h1 className="signUpPageTitle">Create Your Profile Below: </h1>
        <div className="container">
          <Form className="form">
            <Input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              validations={[required, email]}
              placeholder="Please enter your email address"
            />
            <br />
            <Input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter a username"
            />
            <br />
            <Input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Please enter a password"
            />
            <br />
            <Input
              value={this.state.state}
              name="state"
              onChange={this.handleInputChange}
              type="text"
              maxLength="2"
              placeholder="What state do you live in?"
            />
            <br />
            <Input
              value={this.state.city}
              name="city"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What city do you live in?"
            />
            <br />
            <Input
              value={this.state.pet_name}
              name="pet_name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What is your dog's name?"
            />
            <br />

            <Input
              value={this.state.breed}
              name="breed"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What breed is your dog?"
            />
            <br />
            <Input
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange}
              type="text"
              placeholder="How would you describe your pet (in 300 characters)"
            />
            <br />
            <ImageUpload onComplete={this.onComplete} />
            <img className="renderedImg" src={this.state.imgurl} />
            <button onClick={this.handleFormSubmit} className="signUpSubmitBtn">
              Submit
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
