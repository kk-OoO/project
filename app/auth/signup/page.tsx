import { signup } from "../actions";

export default function SignUp() {
  return (
    <div className="bg-gray-200 max-w-4xl mx-auto p-20 mt-10">
      <form className="flex flex-col items-center p-5">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
          required
        />
        <button
          formAction={signup}
          className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
