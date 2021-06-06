import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="h-screen">
      <header className="bg-gradient-to-b from-green-200 to-green-500 h-1/3 items-center flex">
        <h1 className="mx-auto text-white text-4xl font-bold flex-shrink">
          takeyu1013's portfolio
        </h1>
      </header>
      <main>
        <div className="profile">
          <h2>プロフィール</h2>
          <table>
            <tr>
              <td>名前</td>
              <td>たけゆ</td>
            </tr>
            <tr>
              <td>本名</td>
              <td>Yuto Takeuchi</td>
            </tr>
            <tr>
              <td>出身地</td>
              <td>兵庫県</td>
            </tr>
            <tr>
              <td>今住んでいるところ</td>
              <td>神奈川県</td>
            </tr>
            <tr>
              <td>職業</td>
              <td>セールスエンジニア</td>
            </tr>
          </table>
        </div>
        <div className="cards">
          <div className="hobbeis">
            <h2>趣味</h2>
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
          </div>
          <div className="skills">
            <h2>スキル</h2>
            <ul>
              <li>C/C++（3年）</li>
              <li>Java（3年）</li>
              <li>Python（2年）</li>
              <li>JavaScript（2年）</li>
              <li>Linux(Ubuntu, CentOS)</li>
              <li>PostgreSQL</li>
              <li>Spring Boot</li>
            </ul>
          </div>
          <div className="future">
            <h2>興味がある技術</h2>
            <ul>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Unity</li>
              <li>Godot Engine</li>
              <li>Terraform</li>
              <li>GraphQL</li>
              <li>Procreate</li>
            </ul>
          </div>
          <div className="products">
            <h2>つくったもの</h2>
            <a href="http://todo-seven-beta.vercel.app/">やることリスト</a>
          </div>
          <div className="sns">
            <h2>SNS</h2>
            <ul>
              <li>GitHub</li>
              <li>Qiita</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagrem</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
