import React, { Component } from "react";
import Reviews from "../components/Reviews/Reviews";

class Profile extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid">
        <div className="row" />
       
        <Reviews />
      </div>
    );
  }
}

export default Profile;
