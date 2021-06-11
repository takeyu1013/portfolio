import type { NextPage } from "next";
import Card from "../components/Card";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <div className="h-screen">
      <header className="bg-gradient-to-b from-green-200 to-green-500 h-1/3 items-center flex">
        <h1 className="mx-auto text-white text-4xl font-bold flex-shrink">
          takeyu1013's portfolio
        </h1>
      </header>
      <main className="block justify-between w-screen max-w-5xl mx-auto lg:flex lg:flex-wrap">
        <Card title="プロフィール">
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
        </Card>
        <Card title="趣味">
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
        </Card>
        <Card title="スキル">
          <ul className="text-center pb-2">
            <li>C/C++（3年）</li>
            <li>Java（3年）</li>
            <li>Python（2年）</li>
            <li>JavaScript（2年）</li>
            <li>Linux(Ubuntu, CentOS)</li>
            <li>PostgreSQL</li>
            <li>Spring Boot</li>
          </ul>
        </Card>
        <Card title="興味がある技術">
          <ul className="text-center pb-2">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Unity</li>
            <li>Godot Engine</li>
            <li>Terraform</li>
            <li>GraphQL</li>
            <li>Procreate</li>
          </ul>
        </Card>
        <Card title="つくったもの">
          <Link href="http://todo-seven-beta.vercel.app/">
            <a className="block text-center text-blue-600">やることリスト</a>
          </Link>
        </Card>
        <Card title="SNS">
          <ul className="text-center pb-2">
            <li>
              <Link href="https://github.com/takeyu1013">
                <a className="text-blue-600">GitHub</a>
              </Link>
            </li>
            <li>
              <Link href="https://qiita.com/takeyu1013">
                <a className="text-blue-600">Qiita</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/yuto.takeuchi.71/">
                <a className="text-blue-600">Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/takeyu1013">
                <a className="text-blue-600">Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/takeyu1013/">
                <a className="text-blue-600">Instagrem</a>
              </Link>
            </li>
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default Index;
