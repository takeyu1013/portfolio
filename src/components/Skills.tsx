"use client";
import { Grid, Title } from "@tremor/react";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <Grid className="gap-2">
      <Title className="border-b-[1px]">Skills</Title>
      <motion.ul
        initial="hidden"
        animate="visible"
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
          "TypeScript",
          "Python",
          "C++",
          "Java",
          "Next.js",
          "AWS",
          "Kubernetes",
          "PostgreSQL",
          "Spring Boot",
        ].map((skill, index) => {
          return (
            <motion.li
              key={index}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              {skill}
            </motion.li>
          );
        })}
      </motion.ul>
    </Grid>
  );
};
