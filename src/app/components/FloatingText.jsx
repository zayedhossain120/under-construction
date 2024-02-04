"use client";

import React from "react";
import { motion } from "framer-motion";

const FloatingText = () => {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0], // Float up and down by adjusting the 'y' property
      }}
      transition={{
        duration: 1, // Duration of one cycle
        repeat: Infinity, // Repeat the animation indefinitely
        ease: "easeInOut", // Easing function for a smooth effect
      }}
    >
      <h1 className="text-center uppercase [font-size:_clamp(1.5em,4vw,2.7em)] md:tracking-[10px] lg:tracking-[15px] tracking-[8px] text-white font-krylon">
        Construction
      </h1>
    </motion.div>
  );
};

export default FloatingText;
