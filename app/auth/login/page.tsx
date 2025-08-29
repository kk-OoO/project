import Link from "next/link";
import { login } from "../actions";

export default function Login() {
  return (
    <div className="bg-gray-200 flex max-w-4xl mx-auto p-20 mt-10 justify-center gap-48">
      <div className="flex flex-col items-center p-5">
        <h1 className="text-center m-5 border-b border-black text-2xl mt-6">
          ログイン
        </h1>
        <form className="flex flex-col items-center">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="aaa@aaa"
            className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
          />
          <button
            className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
            formAction={login}
          >
            ログイン
          </button>
        </form>
      </div>

      <div className="p-5">
        <h1 className="text-center m-5 mb-38 border-b border-black text-2xl">
          新規登録
        </h1>
        <div>
          <Link
            href={"/auth/signup"}
            className="w-32 h-32 rounded-full border border-black flex items-center justify-center transition-colors"
          >
            こちらから
          </Link>
        </div>
      </div>
    </div>
  );
}
