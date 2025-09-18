"use client";

import { useActionState } from "react";
import { UpdateProfileAction } from "../actions";
import { profiles } from "@prisma/client";

export default function UpdateProfileForm(profile: profiles) {
  const [state, action, pending] = useActionState(
    UpdateProfileAction,
    undefined
  );

  return (
    <div>
      <h1>プロフィール編集</h1>
      <form action={action} className="flex flex-col items-center p-5">
        <div>
          <label>ユーザー名</label>
          <input id="username" name="username" value={profile.username || ""} />
        </div>
        {state?.errors?.username && <p>{state.errors.username}</p>}

        <div>
          <label>プロフィール画像URL</label>
          <input
            type="file"
            id="profile_image"
            name="profile_image"
            value={profile.profile_image || ""}
          />
        </div>
        {state?.errors?.profile_image && <p>{state.errors.profile_image}</p>}
        <div>
          <label>地域</label>
          <select id="region" name="region" defaultValue={profile.region || ""}>
            <option value={""}>選択してください</option>
            <option value={"北海道"}>北海道</option>
            <option value={"東北"}>東北</option>
            <option value={"関東"}>関東</option>
            <option value={"中部"}>中部</option>
            <option value={"近畿"}>近畿</option>
            <option value={"中国"}>中国</option>
            <option value={"四国"}>四国</option>
            <option value={"九州"}>九州</option>
            <option value={"沖縄"}>沖縄</option>
          </select>
        </div>

        {state?.errors?.region && <p>{state.errors.region}</p>}

        <div>
          <label>年齢</label>
          <input
            type="number"
            id="age"
            name="age"
            value={String(profile.age ?? "")}
          />
        </div>

        {state?.errors?.age && <p>{state.errors.age}</p>}

        <button
          disabled={pending}
          type="submit"
          className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
        >
          更新
        </button>
      </form>
    </div>
  );
}
