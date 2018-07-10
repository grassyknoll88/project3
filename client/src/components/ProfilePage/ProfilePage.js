import React, { Component } from "react";
import "./ProfilePage.css";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "mdbreact";
import ModalPage from "../MessagingModal/MessagingModal";

class ProfilePage extends Component {
  render() {
    return (
      <Card className="dogCard" id="dCard" reverse>
        <CardImage className="img-fluid profileImg" src={this.props.imgurl} />
        <ModalPage />
        <CardBody>
          <CardTitle id="petName">{this.props.pet_name}</CardTitle>
          <CardText id="city">{this.props.city}</CardText>
          <CardText id="description">{this.props.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default ProfilePage;
