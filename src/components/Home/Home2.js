import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Full-Stack Engineer</b> and 
              <b className="purple"> Data/Research Analyst</b> who loves building
              fast, scalable, and intelligent systems. I work across both
              engineering and applied AI domains — from real-time dashboards to
              ML research pipelines.
              <br />
              <br />
              I’m skilled in:
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React, Node.js, Python, SQL, PostgreSQL, MongoDB,
                  Flask, and Docker.
                </b>
              </i>
              <br />
              <br />
              My fields of interest include:
              <i>
                <b className="purple">
                  <br />
                  Full-Stack Web Development
                  <br />
                  AI/ML & NLP Systems
                  <br />
                  YOLO-based Computer Vision
                  <br />
                  Real-Time Dashboards & Visualization
                  <br />
                  Database Optimization & System Design
                  <br />
                  Research & Analytical Modeling
                </b>
              </i>
              <br />
              <br />
              I love building products with{" "}
              <b className="purple">Node.js</b>, and modern frameworks like{" "}
              <b className="purple">React.js</b> and <b className="purple">Next.js</b>,
              and I often integrate them with AI APIs, semantic search, and
              high-performance backend pipelines.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/seth2610"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/nikhil-seth-bb7986289"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
