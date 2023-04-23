"use client";
import { motion } from "framer-motion";

export const Test = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      test
    </motion.div>
  );
};
