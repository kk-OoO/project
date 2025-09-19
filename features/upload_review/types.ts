import { z } from "zod";
export type UploadReviewForm = {
  role: string | undefined;
  rating: number;
  comment?: string | undefined;
};

export type FormState =
  | {
      errors?: {
        role?: string[];
        rating?: string[];
        comment?: string[];
      };
      message?: string;
    }
  | undefined;

export const UploadReviewFormSchema = z.object({
  role: z
    .string()
    .min(1, { message: "ロールを入力してください。" })
    .max(5, { message: "ロールは5文字以内で入力してください。" })
    .trim(),

  rating: z
    .string()
    .min(1, { message: "評価を入力してください。" })
    .max(5, { message: "評価は5文字以内で入力してください。" })
    .trim(),

  comment: z
    .string()
    .min(1, { message: "評価を入力してください。" })
    .max(500, { message: "評価は500文字以内で入力してください。" })
    .trim()
    .optional(), // 画像は任意にすると使いやすい
});
