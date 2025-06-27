import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
        "AI/ML Enthusiast 🤖",
        "LangChain Developer 🔗",
        "GenAI Project Builder 🧠",
        "Python Programmer 🐍",
      ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
