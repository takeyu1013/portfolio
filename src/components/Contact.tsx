"use client";
import { Grid, Title } from "@tremor/react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <Grid className="gap-2">
      <Title className="border-b-[1px]">Contact</Title>
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
          ["GitHub", "https://github.com/takeyu1013"],
          ["Zenn", "https://zenn.dev/takeyu1013"],
          ["Qiita", "https://qiita.com/takeyu1013"],
          ["Facebook", "https://www.facebook.com/yuto.takeuchi.71/"],
          ["Twitter", "https://twitter.com/takeyu1013"],
          ["Instagram", "https://www.instagram.com/takeyu1013/"],
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
