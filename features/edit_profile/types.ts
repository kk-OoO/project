import { z } from "zod";
export type UpdateProfileForm = {
  username: string;
  profile_image?: string;
  region: string | undefined;
  age?: Number | null;
};

export type FormState =
  | {
      errors?: {
        username?: string[];
        profile_image?: string[];
        region?: string[];
        age?: string[];
      };
      message?: string;
    }
  | undefined;

export const UpdateProfileFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "名前は2文字以上で入力してください。" })
    .max(50, { message: "名前は50文字以内で入力してください。" })
    .trim(),

  profile_image: z
    .string()
    // .url({ message: "有効なURLを入力してください。" })
    .optional(), // 画像は任意にすると使いやすい

  region: z
    .string()
    .min(1, { message: "地域を入力してください。" })
    .max(100, { message: "地域は100文字以内で入力してください。" })
    .trim()
    .optional(), // 画像は任意にすると使いやすい

  age: z
    .string()
    .min(0, { message: "年齢は0以上で入力してください。" })
    .max(120, { message: "年齢は120以下で入力してください。" })
    .nullable(), // 年齢未設定も許す場合});
});
