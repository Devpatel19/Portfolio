import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ftr from "../../Assets/Projects/ftr.jpeg";
import credential from "../../Assets/Projects/credential.jpeg";
import fakesms from "../../Assets/Projects/fakesms.jpeg";
import alumni from "../../Assets/Projects/alumni.jpeg";
import hostel from "../../Assets/Projects/hostel.jpeg";
import DevShop from "../../Assets/Projects/DevShop.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="College Alumni Portal"
              description="An alumni portal is a platform where the college, alumni and the college students can interact with each other for their benefit."
              ghLink="https://github.com/Devpatel19/College-Alumni-Portal.git"
              demoLink="https://collegealumniportal.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevShop}
              isBlog={false}
              title="E Commerce Website using MERN stack"
              description="The website that allows user to search product, buy a product, add to cart, edit profile, pay using paypal, login and signup. We build a Full Stack Web-App using MERN stack."
              ghLink="https://github.com/Devpatel19/DEVSHOP.git"
              demoLink="https://devshop19.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftr}
              isBlog={false}
              title="Freight Transport Region"
              description="Freight Transport Region application helps to manage the overall operations in a Harbor. Admin (Employees of FTR) and User (Vendor) can avail this application. FTR admin can manage the major details like managing terminals, loading and grounding operations etc."
              ghLink="https://github.com/Devpatel19/FTR.git"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostel}
              isBlog={false}
              title="Hostel And Mess Mangement"
              description="The application has two sites. In the first site student can log in, view the Mess menu and schedule, complain about hostel and mess and show status of complain, View Detail About hostel and mess. In the other site is Admin can Add student, Add menu, Add Schedule, Show complain and review, Add Hostel and mess Detail etc."
              ghLink="https://github.com/Devpatel19/Hostel.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credential}
              isBlog={false}
              title="User credentials encryption system"
              description="In this application, user can store their login credentials of the application and website in the encrypted form. Used Rail Fence encryption and decryption algorithm."
              ghLink="https://github.com/Devpatel19/Crypto.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakesms}
              isBlog={false}
              title="Fake-sms-detection"
              description="In this Project, used a spam sms collection dataset to clssified a sms is spam or not. In this project used a nltk libarary for classifed a various sms in th dataset"
              ghLink="https://github.com/Devpatel19/Fake-sms-detection.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
