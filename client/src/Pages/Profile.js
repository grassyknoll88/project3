import React, { Component } from "react";
import ProfilePic from "../components/ProfilePic/ProfilePic";
class Profile extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid">
        <div className="row" />
        <ProfilePic />
      </div>
    );
  }
}

export default Profile;
