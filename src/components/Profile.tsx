"use client";
import { List, ListItem, Title } from "@tremor/react";
import { motion } from "framer-motion";

export const Profile = () => {
  return (
    <>
      <Title className="border-b-[1px]">Profile</Title>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
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
    </>
  );
};
