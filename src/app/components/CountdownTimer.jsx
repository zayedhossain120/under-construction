import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const initialCountdown = "CONSTRUCTION";
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the countdown by removing the last character
      setCountdown((prevCountdown) => prevCountdown.slice(0, -1));

      // Stop the countdown when there are no characters left
      if (countdown.length === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h1 className="text-2xl text-white">Countdown Timer:</h1>
      {countdown.split("").map((char, index) => (
        <motion.span
          className="text-2xl text-white"
          key={index}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default CountdownTimer;
