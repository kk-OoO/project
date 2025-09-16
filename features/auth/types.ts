import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "名前は2文字以上で入力してください。" })
    .trim(),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください。" })
    .trim(),
  gender: z.string({
    message: "性別を選択してください。",
  }),
  password: z
    .string()
    .min(8, { message: "8文字以上で入力してください。" })
    .regex(/[a-zA-Z]/, {
      message: "少なくとも1つのアルファベットを含めてください。",
    })
    .regex(/[0-9]/, { message: "少なくとも1つの数字を含めてください。" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "少なくとも1つの記号を含めてください。",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        gender?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type Profile = {
  id: string;
  username: string;
  gender: string;
};
