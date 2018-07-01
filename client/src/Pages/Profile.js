import React, { Component } from "react";
import Reviews from "../components/Reviews/Reviews";
import ProfilePage from "../components/ProfilePage/ProfilePage";

class Profile extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid">
        <div className="row" />
        <ProfilePage />
        <Reviews />
      </div>
    );
  }
}

export default Profile;
