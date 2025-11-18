import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  amount?: number;
  delay?: number;
};

const FadeIn = ({ children, amount = 0.6 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
