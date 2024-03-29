"use client";
import { Grid, Title } from "@tremor/react";
import { motion } from "framer-motion";

export const Works = () => {
  return (
    <Grid className="gap-2">
      <Title>Works</Title>
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
      >
        {[
          ["ToDoアプリ", "http://todo-seven-beta.vercel.app/"],
          ["Railsチュートリアルクローン", "https://study-t3.vercel.app/"],
        ].map(([title, href], index) => {
          return (
            <motion.li
              key={index}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              <a href={href} target="_blank" className="text-blue-500">
                {title}
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </Grid>
  );
};
