"use client";
import { Metric, Subtitle } from "@tremor/react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Metric className="text-white">Takeyu&apos;s portfolio</Metric>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Subtitle className="text-white">
          たけゆのポートフォリオページです
        </Subtitle>
      </motion.div>
    </div>
  );
};
