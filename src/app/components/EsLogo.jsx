"use client";

import Logo from "@/asset/svg/Logo";
import { motion } from "framer-motion";

const EsLogo = () => {
  return (
    <motion.div drag>
      <Logo />
    </motion.div>
  );
};

export default EsLogo;
