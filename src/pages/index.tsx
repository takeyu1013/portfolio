import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="h-screen">
      <header className="bg-gradient-to-b from-green-200 to-green-500 h-1/3 items-center flex">
        <h1 className="mx-auto text-white text-4xl font-bold flex-shrink">
          takeyu1013's portfolio
        </h1>
      </header>
      <main className="flex flex-wrap">
        <div className="p-4 mx-auto w-1/3">
          <h2 className="text-center text-xl font-bold pb-2">プロフィール</h2>
          <table className="mx-auto">
            <tr className="border">
              <td>名前</td>
              <td>たけゆ</td>
            </tr>
            <tr className="border bg-green-100">
              <td>本名</td>
              <td>Yuto Takeuchi</td>
            </tr>
            <tr className="border">
              <td>出身地</td>
              <td>兵庫県</td>
            </tr>
            <tr className="border bg-green-100">
              <td>今住んでいるところ</td>
              <td>神奈川県</td>
            </tr>
            <tr className="border">
              <td>職業</td>
              <td>セールスエンジニア</td>
            </tr>
          </table>
        </div>
        <div className="mx-auto p-4 w-1/3">
          <h2 className="text-center text-xl font-bold pb-2">趣味</h2>
          <ul className="text-center pb-2">
            <li>プログラミング</li>
            <li>ゲーム（FPS、アクション）</li>
            <li>アニメ</li>
            <li>ガジェット（自作PC等）</li>
            <li>筋トレ</li>
            <li>キャンプ</li>
            <li>温泉</li>
            <li>読書</li>
          </ul>
        </div>
        <div className="mx-auto p-4 w-1/3">
          <h2 className="text-center text-xl font-bold pb-2">スキル</h2>
          <ul className="text-center pb-2">
            <li>C/C++（3年）</li>
            <li>Java（3年）</li>
            <li>Python（2年）</li>
            <li>JavaScript（2年）</li>
            <li>Linux(Ubuntu, CentOS)</li>
            <li>PostgreSQL</li>
            <li>Spring Boot</li>
          </ul>
        </div>
        <div className="mx-auto p-4 w-1/3">
          <h2 className="text-center text-xl font-bold pb-2">興味がある技術</h2>
          <ul className="text-center pb-2">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Unity</li>
            <li>Godot Engine</li>
            <li>Terraform</li>
            <li>GraphQL</li>
            <li>Procreate</li>
          </ul>
        </div>
        <div className="mx-auto p-4 w-1/3">
          <h2 className="text-center text-xl font-bold pb-2">つくったもの</h2>
          <a
            className="block text-center"
            href="http://todo-seven-beta.vercel.app/"
          >
            やることリスト
          </a>
        </div>
        <div className="mx-auto p-4 w-1/3">
          <h2 className="text-center text-xl font-bold pb-2">SNS</h2>
          <ul className="text-center pb-2">
            <li>GitHub</li>
            <li>Qiita</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagrem</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Index;
