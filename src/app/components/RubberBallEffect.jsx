"use client";

import { motion } from "framer-motion";

const RubberBallEffect = ({ text }) => {
  const characters = text.split("");

  return (
    <h1 style={{ display: "inline-block" }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, -10, 10, -5, 5, 0],
            transition: { duration: 0.3 },
          }}
          style={{
            display: "inline-block",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default RubberBallEffect;
