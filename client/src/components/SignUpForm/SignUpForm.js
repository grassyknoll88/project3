import React, { Component } from "react";
import "./SignUpForm.css";

class SignUpForm extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
    pet_name: "",
    location: "",
    breed: "",
    size: "",
    description: "",
    email: "",
    imgUrl: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //do axios post
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.username}`);
    this.setState({
      username: "",
      password: "",
      last_login: "",
      pet_name: "",
      location: "",
      breed: "",
      size: "",
      description: "",
      email: "",
      imgUrl: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>Hello {this.state.username}</p>
        <div className="container">
          <form className="form">
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter your email address"
            />
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter a username"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter a password"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Please enter a password"
            />
            <input
              value={this.state.pet_name}
              name="pet_name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What is your dog's name?"
            />
            <input
              value={this.state.location}
              name="location"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What is your zipcode?"
            />
            <input
              value={this.state.breed}
              name="breed"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What breed is your dog?"
            />
            <input
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange}
              type="text"
              placeholder="How would you describe your pet (in 300 characters)"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
