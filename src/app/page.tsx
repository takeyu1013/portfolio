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
      <section className="grid items-center container py-10 gap-4">
        <H2>プロフィール</H2>
        <div className="flex place-content-center">
          <table className="max-w-4xl grow">
            <tbody>
              {[
                ["名前", "たけゆ"],
                ["本名", "Yuto Takeuchi"],
                ["出身地", "兵庫県"],
                ["今住んでいるところ", "神奈川県"],
                ["職業", "セールスエンジニア"],
              ].map(([key, value], index) => {
                return (
                  <tr key={index} className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">{key}</td>
                    <td className="border px-4 py-2">{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <H2>趣味</H2>
        <p>WIP</p>
        <H2>スキル</H2>
        <p>WIP</p>
        <H2>興味がある技術</H2>
        <p>WIP</p>
        <H2>つくったもの</H2>
        <p>WIP</p>
        <H2>SNS</H2>
        <p>WIP</p>
      </section>
    </motion.main>
  );
};

export default Home;
