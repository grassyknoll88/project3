import React, { Component } from "react";
import Reviews from "../components/Reviews/Reviews";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import API from "../utils/API";

class Profile extends Component {
  state = { profile: {} };

  componentDidMount() {
    API.getProfile(this.props.match.params.id).then(response => {
      this.setState({
        profile: response.data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row" />
        <ProfilePage
          pet_name={this.state.profile.pet_name}
          city={this.state.profile.city}
          description={this.state.profile.description}
          imgurl={this.state.profile.imgurl}
        />
        <Reviews />
      </div>
    );
  }
}

export default Profile;
