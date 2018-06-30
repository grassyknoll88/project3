import React, { Component } from "react";
import "./SignUpForm.css";
import ImageUpload from "../ImageUpload/ImageUpload";

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
    imgUrl: ""
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
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.props.onFormSubmit({
      ...this.state
    });
  };

  onComplete = imgUrl => {
    console.log(imgUrl);
    this.setState({ imgUrl: imgUrl });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1 className="signUpPageTitle">Create Your Profile Below: </h1>
        <div className="container">
          <form className="form">
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter your email address"
            />
            <br />
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter a username"
            />
            <br />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter a password"
            />
            <br />
            <input
              value={this.state.state}
              name="state"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What state do you live in?"
            />
            <br />
            <input
              value={this.state.city}
              name="city"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What city do you live in?"
            />
            <br />
            <input
              value={this.state.pet_name}
              name="pet_name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What is your dog's name?"
            />
            <br />

            <input
              value={this.state.breed}
              name="breed"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What breed is your dog?"
            />
            <br />
            <input
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange}
              type="text"
              placeholder="How would you describe your pet (in 300 characters)"
            />
            <br />
            <ImageUpload onComplete={this.onComplete} />
            <img className="renderedImg" src={this.state.imgUrl} />
            <button onClick={this.handleFormSubmit} className="signUpSubmitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
