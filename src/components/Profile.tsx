"use client";
import { Grid, List, ListItem, Title } from "@tremor/react";
import { motion } from "framer-motion";

export const Profile = () => {
  return (
    <Grid className="gap-2">
      <Title className="border-b-[1px]">Profile</Title>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <List>
          {[
            ["名前", "たけゆ"],
            ["本名", "Yuto Takeuchi"],
            ["出身地", "兵庫県"],
            ["今住んでいるところ", "神奈川県"],
            ["職業", "セールスエンジニア"],
          ].map(([key, value], index) => {
            return (
              <ListItem key={index}>
                <span>{key}</span>
                <span>{value}</span>
              </ListItem>
            );
          })}
        </List>
      </motion.div>
    </Grid>
  );
};
