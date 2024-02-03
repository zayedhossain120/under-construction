// ParticleComponent.js
"use client";

import React from "react";
import Particles from "react-tsparticles";

const ParticleComponent = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#3498db",
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3498db",
            opacity: 0.4,
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticleComponent;
