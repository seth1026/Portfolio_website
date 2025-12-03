import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Embedded Systems Engineer 🛠️",

          "FPGA Engineer 🔬",

          "AI/ML Engineer 🤖",

          "Signal Processing Engineer 🎛️",

          "IoT Developer 🌐",

          "Full-Stack Developer 💻",

          "PERN Stack Developer (PostgreSQL, Express.js, React.js, Node.js) 🚀",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
