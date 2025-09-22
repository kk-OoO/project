"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { FormState, UploadReviewFormSchema } from "./types";
import z from "zod";
import { createClient } from "@/lib/supabase/server";
import { uploadReview } from "./fetchers";

export async function UploadReviewAction(state: FormState, formData: FormData) {
  const validatedFields = UploadReviewFormSchema.safeParse({
    role: formData.get("role"),
    rating: formData.get("rating"),
    comment: formData.get("comment"),
  });

  if (!validatedFields.success) {
    // Zod v4: Use z.treeifyError instead of .flatten()
    const treeifiedError = z.treeifyError(validatedFields.error);

    return {
      errors: {
        role: treeifiedError.properties?.role?.errors,
        rating: treeifiedError.properties?.rating?.errors,
        comment: treeifiedError.properties?.comment?.errors,
      },
    };
  }
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const inputData = {
    userId: data.user?.id as string,
    chapelId: formData.get("chapelId") as string, // get chapelId from formData
    role: validatedFields.data.role,
    rating: Number(validatedFields.data.rating),
    comment: validatedFields.data.comment,
  };
  const response = await uploadReview(inputData);

  if (!response) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect(`/chapel/${formData.get("chapelId")}`); // redirect to the chapel page using chapelId
}
