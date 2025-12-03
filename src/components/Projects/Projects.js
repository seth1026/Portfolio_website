import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Existing images
import yelp from "../../Assets/Projects/yelp.png";
import airbnb from "../../Assets/Projects/airbnb.png";

// New project images (add your images in /Assets/Projects/)
import dbwhisper from "../../Assets/Projects/dbwhisper.png";
import aiassistant from "../../Assets/Projects/aiassistant.png";
import shipdetect from "../../Assets/Projects/shipdetect.png";
import muscle from "../../Assets/Projects/muscle.png";
import portfolio from "../../Assets/Projects/portfolio.png";

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
          {/* -------------------- EXISTING PROJECTS -------------------- */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yelp}
              isBlog={false}
              title="Yelp Clone Application"
              description="Yelp is a web application designed to help users discover and interact with local businesses. Built with the PERN stack, it allows users to explore businesses, leave reviews, and rate their experiences. The PostgreSQL database efficiently manages businesses, users, and reviews."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb Clone Web Application"
              description="A full-stack Airbnb clone built with Next.js, Django REST API, and Docker. Includes authentication, listings, filtering, and booking workflows. Designed for smooth performance and cross-environment deployment using Docker."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* -------------------- YOUR REAL PROJECTS -------------------- */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbwhisper}
              isBlog={false}
              title="DB-Whisperer – SQL Query Optimization Visualizer"
              description="A real-time query optimization dashboard built using the PERN stack. Tracks CPU/I/O latency, logs slow queries, shows execution metrics, and streams live updates using Socket.io. Deployed with GitLab CI/CD and Docker Compose."
              ghLink="https://github.com/seth2610/DB-Whisperer"
              demoLink="https://db-whisper.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiassistant}
              isBlog={false}
              title="AI Research Assistant Platform"
              description="A MERN-based research automation tool supporting PDF summarization, semantic search, and plagiarism detection using GPT models and the Semantic Scholar API. Uses GridFS for file storage and JWT for authentication."
              ghLink="https://github.com/seth2610/AI-Research-Assistant"
              demoLink="https://research-assistant.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shipdetect}
              isBlog={false}
              title="SAR Ship Detection & Camouflage Recognition (DRDO)"
              description="YOLOv11-based detection pipeline for identifying ships and camouflage in maritime SAR imagery (Sentinel-1, COD10K). Includes dataset preprocessing, augmentations, anchor tuning, and performance evaluation (mAP, IoU)."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muscle}
              isBlog={false}
              title="Muscle Imbalance Prediction Model"
              description="Statistical modeling + ensemble learning for predicting muscle imbalance using 1RM strength & fat-mass asymmetry. Achieved 70% accuracy and validated regression/ensemble consistency across datasets."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A production-grade MERN portfolio with dynamic project rendering, reusable UI components, and CI/CD using GitHub Actions. Deployed on Vercel with optimized performance and animation-rich UI."
              ghLink="https://github.com/seth2610/portfolio_nikhil"
              demoLink="https://nikhil-portfolio-lyart.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
