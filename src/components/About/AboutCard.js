import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhil Seth</span> 👋  
            <br />
            I am currently pursuing a B.Tech in Electronics and Communication Engineering  
            at **Indian Institute of Information Technology, Sricity**.  
            <br />
            I am passionate about **FPGA design, AI/ML, IoT, and problem-solving**,  
            always striving to build innovative and efficient solutions.
            <br />
            <br />
            <strong>Things I love to do:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> ❤️ Coding & building real-world tech solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> 🛠️ Working with FPGA, AI/ML, and IoT
            </li>
            <li className="about-activity">
              <ImPointRight /> 🚀 Exploring and optimizing algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> 💡 Designing innovative embedded systems
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎹 Built a piano using FPGA for fun!
            </li>
            <li className="about-activity">
              <ImPointRight /> 📚 Always learning & growing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"  
          </p>
          <footer className="blockquote-footer">Nikhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
