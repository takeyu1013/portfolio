"use client";
import { Grid, Title } from "@tremor/react";
import { motion } from "framer-motion";

export const Certification = () => {
  return (
    <Grid className="gap-2">
      <Title className="border-b-[1px]">Certification</Title>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              delayChildren: 0.25,
              staggerChildren: 0.25,
            },
          },
          hidden: { opacity: 0 },
        }}
        className="list-inside list-disc"
      >
        {[
          "AWS Certified Solutions Architect – Associate",
          "Fundamental Information Technology Engineer Examination",
        ].map((item, index) => {
          return (
            <motion.li
              key={index}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </Grid>
  );
};
