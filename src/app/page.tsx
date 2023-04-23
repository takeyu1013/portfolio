import { Test } from "./test";

const Home = () => {
  return (
    <main>
      <h1>Takeyu&apos;s portfolio</h1>
      <h2>プロフィール</h2>
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
      <Test />
    </main>
  );
};

export default Home;
