import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yelp from "../../Assets/Projects/yelp.png"
import airbnb from "../../Assets/Projects/airbnb.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works Ns.</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yelp}
              isBlog={false}
              title="Yelp Clone Application"
              description="Yelp is a web application designed to help users discover and interact with local businesses. Built with the PERN stack, it allows users to explore businesses, leave reviews, and rate their experiences. The app features a robust PostgreSQL database for efficient management of business details, user profiles, and reviews, ensuring a smooth and scalable user experience."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb clone Web Application"
              description="A full-stack web application that replicates Airbnb’s core features, built with Next.js for the frontend, Django for the backend, and Docker for containerization. It includes user authentication, property listings, search & filtering, and a booking system, ensuring seamless performance and scalability. The backend is powered by a Django REST API, while Docker enables smooth deployment across environments. 🚀"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mini To-Do Application"
              description=" A lightweight to-do application built with the Django framework, designed for users to efficiently manage their tasks. The application includes features for creating, updating, and deleting tasks, along with a secure user authentication system for personalized task management. Initially deployed locally, it is structured for scalability and future deployment on cloud platforms."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
