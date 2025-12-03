import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer 💻",
          "PERN / MERN Stack Developer 🚀",
          "AI & ML Engineer 🤖",
          "Data & Research Analyst 📊",
          "Computer Vision (YOLO) Developer 🎯",
          "Backend & API Developer 🔧",
          "Database & System Design Engineer 🗄️",
          "Real-Time Dashboard Developer 📡",
          "DevOps & Docker Practitioner 🐳",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
