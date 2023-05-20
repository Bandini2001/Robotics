import React from "react";
import Card from "./Card";
import './Style.css';

function Services() {
  return (
    <>
      <h1 className="headind">Our Services </h1>
      <div class="firstcolomn">
        <div class="discription">
          <Card
            title=" Industrial Use"
            description="Polar robots are commonly used for die casting, injection molding, welding."
          />
          <Card 
            title="Open AI"
            description="OpenAI Gym provides a wide range of advantages for autonomous navigation, making it an ideal choice for developers"
          />
          <Card
            title="Robotic Article"
            description="Imagine trying to find a particular image within the National Football League’s historical archive of hundreds of thousands of videos"
          />
        </div>
        <div className="discription">
          <Card
            title=" Security"
            description="An automatic movement control system, based on technical vision systems and satellite"
          />
          <Card
            title="Privecy Policy"
            description="This Policy is applicable to data collected through datarobot.com, DataRobot Community, and other websites managed."
          />
          <Card
            title="Terms And Conditions"
            description="In order to use the Robot Application, it shall be required to install application made available on the customer computers as part."
          />
        </div>
      </div>
    </>
  );
}

export default Services;
