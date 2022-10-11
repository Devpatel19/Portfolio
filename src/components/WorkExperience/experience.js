import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./experienceCard";

const Experience = () => {
    return(<Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My <strong className="purple">Work Experience </strong>
      </h1>
      <br />
      <ExperienceCard
        title="Digital Speciallist Engineer"
        name="Infosys Limited"
        jobtitle="Java and Angular Developer"
        startdate="06/2022"
        enddate="Present"
       />
       <br />
       <ExperienceCard
        title="Software Developer"
        name="La Net Team Software Solutions Pvt. LTD."
        jobtitle="Full Stack Web Developer"
        startdate="01/2022"
        enddate="05/2022"
       />
       <br />
       <ExperienceCard
        title="App Developer"
        name="BrainlyBeam Technologies Pvt. Ltd."
        jobtitle="Android App Development using Android studio & Flutter"
        startdate="05/2021"
        enddate="06/2021"
       />
    </Container>
  </Container>
    )

}

export default Experience;