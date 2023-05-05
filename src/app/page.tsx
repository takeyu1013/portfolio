"use client";
import { Grid, List, ListItem, Metric, Subtitle, Title } from "@tremor/react";

const Home = () => {
  return (
    <main>
      <Grid className="place-items-center bg-teal-300 py-10 gap-4">
        <Metric className="text-white">Takeyu&apos;s portfolio</Metric>
        <Subtitle className="text-white">
          たけゆのポートフォリオページです
        </Subtitle>
      </Grid>
      <Grid className="max-w-5xl mx-auto p-4 gap-2">
        <Title className="border-b-[1px] text-black font-bold">
          プロフィール
        </Title>
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
        <Title className="border-b-[1px] text-black font-bold">趣味</Title>
      </Grid>
    </main>
  );
};
export default Home;
