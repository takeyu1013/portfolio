"use client";
import { H1, H2 } from "@/components/typography";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <section className="py-10 text-center bg-teal-400 gap-4 grid">
        <H1 className="text-white">Takeyu&apos;s portfolio</H1>
        <p className="text-white">たけゆのポートフォリオページです</p>
      </section>
      <section className="grid items-center container py-10">
        <H2>プロフィール</H2>
        <table>
          <tbody>
            {[
              ["名前", "たけゆ"],
              ["本名", "Yuto Takeuchi"],
              ["出身地", "兵庫県"],
              ["今住んでいるところ", "神奈川県"],
              ["職業", "セールスエンジニア"],
            ].map(([key, value], index) => {
              return (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <h2>趣味</h2>
      <p>WIP</p>
      <h2>スキル</h2>
      <p>WIP</p>
      <h2>興味がある技術</h2>
      <p>WIP</p>
      <h2>つくったもの</h2>
      <p>WIP</p>
      <h2>SNS</h2>
      <p>WIP</p>
    </motion.main>
  );
};

export default Home;
