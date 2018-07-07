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

class ProfilePage extends Component {
  render() {
    return (
      <Card reverse>
        <CardImage className="img-fluid" src={this.props.imgurl} />
        <CardBody>
          <CardTitle>{this.props.pet_name}</CardTitle>
          <CardText>{this.props.city}</CardText>
          <CardText>{this.props.description}</CardText>
          <Button />
        </CardBody>
      </Card>
    );
  }
}

export default ProfilePage;
