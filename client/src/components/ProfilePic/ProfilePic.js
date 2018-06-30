import React from "react";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "mdbreact";

const ProfilePic = () => {
  return (
    <Card reverse>
      <CardImage
        className="img-fluid"
        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        {/* <Button href="#">Button</Button> */}
      </CardBody>
    </Card>
  );
};

export default ProfilePic;
