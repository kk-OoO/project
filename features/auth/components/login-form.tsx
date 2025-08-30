import Link from "next/link";
import { login } from "../fetchers";

export default function LoginForm() {
  return (
    <div className="bg-gray-200 flex w-4xl mx-auto  p-20 mt-10 justify-between">
      <div className="flex flex-col items-center p-5">
        <h1 className="text-center m-5">ログイン</h1>
        <form action={login}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="aaa@aaa"
            className="border-b-2 m-2"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="border-b-2 m-2"
          />
          <button
            className="w-30 h-30 rounded-full border flex items-center justify-center"
            type="submit"
          >
            ログイン
          </button>
        </form>
      </div>
      <div className="p-5">
        <h1 className="text-center m-5 mb-25">新規登録</h1>
        <div>
          <Link
            className="w-30 h-30 rounded-full border flex items-center justify-center"
            href={"/auth/signup"}
          >
            こちらから
          </Link>
        </div>
      </div>
    </div>
  );
}
