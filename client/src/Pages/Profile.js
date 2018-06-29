import React, { Component } from "react";
import ProfilePic from "../components/ProfilePic/ProfilePic";
import Reviews from "../components/Reviews/Reviews";

class Profile extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid">
        <div className="row" />
        <ProfilePic />
        <Reviews />
      </div>
    );
  }
}

export default Profile;
