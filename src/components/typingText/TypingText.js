import React from "react";
import Typewriter from "typewriter-effect";

const TypingText = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Mobile Developer (Android & iOS)",
              "Web Developer (.JS)",
              "Passionate Blockchain Enthusiast",
              "Always Learning",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            delay: 30
          }}
        />
      )
}

export default TypingText