"use client";

import { useActionState } from "react";
import { UploadReviewAction } from "../actions";
import { reviews } from "@prisma/client";

export default function UploadReviewFormComponent(review: reviews) {
  const [state, action, pending] = useActionState(
    UploadReviewAction,
    undefined
  );

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">レビューを投稿する</h2>

      <div className="mb-2">
        <label>役割:</label>
        <select id="role" name="role">
          <option value="">選択してください</option>
          <option value="guest">招待客</option>
          <option value="host">主催者</option>
        </select>
      </div>

      <div className="mb-2">
        <label>評価（1〜5）:</label>
        <input id="rating" name="rating" type="number" min={1} max={5} />
      </div>

      <div className="mb-4">
        <label>レビュー内容:</label>
        <textarea
          className="border w-full p-2"
          id="comment"
          name="comment"
          rows={4}
        />
      </div>

      <button
        disabled={pending}
        type="submit"
        className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
      >
        更新
      </button>
    </div>
  );
}
