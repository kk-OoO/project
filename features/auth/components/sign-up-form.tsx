"use client";

import { useActionState } from "react";
import { signup } from "../fetchers";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className="bg-gray-200 max-w-4xl mx-auto p-20 mt-10">
      <form action={action} className="flex flex-col items-center p-5">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
            required
          />
        </div>
        {state?.errors?.name && <p>{state.errors.name}</p>}

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
            required
          />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}

        <div>
          <label htmlFor="gender">性別</label>
          <select
            id="gender"
            name="gender"
            className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
          >
            <option value="">選択してください</option>
            <option value="女">女</option>
            <option value="男">男</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="border-b border-b-black m-2 p-2 bg-transparent focus:outline-none"
            required
          />
        </div>
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          disabled={pending}
          type="submit"
          className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
