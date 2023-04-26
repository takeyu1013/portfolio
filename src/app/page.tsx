"use client";
import { H1, H2, Link, Td } from "@/components/typography";
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
                    <Td className="border px-4 py-2">{key}</Td>
                    <Td className="border px-4 py-2">{value}</Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <H2>趣味</H2>
        <ul>
          <li>プログラミング</li>
          <li>ゲーム（FPS、アクション）</li>
          <li>アニメ</li>
          <li>ガジェット（自作PC等）</li>
          <li>筋トレ</li>
          <li>キャンプ</li>
          <li>温泉</li>
          <li>読書</li>
        </ul>
        <H2>スキル</H2>
        <ul>
          <li>TypeScript（3年）</li>
          <li>C/C++（3年）</li>
          <li>Python（3年）</li>
          <li>Java（3年）</li>
          <li>Next.js</li>
          <li>Linux(Ubuntu, CentOS)</li>
          <li>PostgreSQL</li>
          <li>Spring Boot</li>
        </ul>
        <H2>興味がある技術</H2>
        <ul>
          <li>tRPC</li>
          <li>GraphQL</li>
          <li>Godot Engine</li>
          <li>Terraform</li>
        </ul>
        <H2>つくったもの</H2>
        <ul>
          <li>
            <Link href="http://todo-seven-beta.vercel.app/">Todoアプリ</Link>
          </li>
          <li>
            <Link href="https://study-t3.vercel.app/">
              Railsチュートリアルクローン
            </Link>
          </li>
        </ul>
        <H2>SNS</H2>
        <ul>
          <li>
            <Link href="https://github.com/takeyu1013">GitHub</Link>
          </li>
          <li>
            <Link href="https://qiita.com/takeyu1013">Qiita</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/yuto.takeuchi.71/">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/takeyu1013">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/takeyu1013/">Instagrem</Link>
          </li>
        </ul>
      </section>
    </motion.main>
  );
};

export default Home;
