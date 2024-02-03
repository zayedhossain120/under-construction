"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function TypingText() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Hello genious people ❤",
    "Very warm welcome to the Expert Squad 😍 ",
    "Very soon we will introduce you our brand new website",
    "Let's make your self happy 😍",
    "You are in professional's touch 🤷‍♀️",
    "Get everything in one stop !",
    "UI/UX, Full Stack  Development with Native Apps ✔",
    "💰 Thank you  🐬",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center h-10">
      <motion.span className="text-center text-white text-xl">
        {displayText}
      </motion.span>
    </div>
  );
}
