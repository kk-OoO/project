export default function Login() {
  return (
    <div className="bg-gray-200 flex w-4xl mx-auto  p-20 mt-10 justify-between">
      <div className="flex flex-col items-center p-5">
        <h1 className="text-center m-5">ログイン</h1>
        <input
          type="text"
          placeholder="aaa@aaa"
          className="border-b-2 m-2"
        />
        <input
          type="password"
          placeholder="password"
          className="border-b-2 m-2"

        />
        <button className="w-30 h-30 rounded-full border flex items-center justify-center">ログイン</button>
      </div>
      <div className="p-5">
        <h1 className="text-center m-5 mb-25">新規登録</h1>
        <div>
          <button className="w-30 h-30 rounded-full border flex items-center justify-center">こちらから</button>
        </div>
      </div>
    </div>
  )
}