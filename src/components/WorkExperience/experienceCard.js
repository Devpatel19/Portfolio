import React from "react";
import Card from "react-bootstrap/Card";

const ExperienceCard = (props) =>{
  return (
    <Card className="project-card-view">
       <Card.Header as="h5">{props.title}</Card.Header>
       
      <Card.Body>
        <Card.Title><strong className="purple">{props.name}</strong></Card.Title>
        <Card.Text>
          {props.jobtitle}
        </Card.Text>
        <Card.Text>{props.startdate} - {props.enddate}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
