import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import "./DogCards.css";

const DogCards = props => {
  console.log("PROPS: ", props);
  return (
    <div className="cardDiv">
      <Card>
        <CardImage src={props.imgurl} />
        <CardBody>
          <CardTitle>{props.pet_name}</CardTitle>
          <h5>{props.breed}</h5>
          <CardText>{props.city}</CardText>
          <Button href={"/profile/" + props.id}>Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default DogCards;
