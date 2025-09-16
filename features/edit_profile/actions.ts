"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { updateProfile } from "../auth/fetchers";
import { FormState, UpdateProfileFormSchema } from "./types";
import z from "zod";
import { createClient } from "@/lib/supabase/server";

export async function UpdateProfileAction(
  state: FormState,
  formData: FormData
) {
  const validatedFields = UpdateProfileFormSchema.safeParse({
    username: formData.get("username"),
    profile_image: formData.get("profile_image"),
    region: formData.get("region"),
    age: formData.get("age"),
  });

  if (!validatedFields.success) {
    // Zod v4: Use z.treeifyError instead of .flatten()
    const treeifiedError = z.treeifyError(validatedFields.error);

    return {
      errors: {
        username: treeifiedError.properties?.username?.errors,
        profile_image: treeifiedError.properties?.profile_image?.errors,
        region: treeifiedError.properties?.region?.errors,
        age: treeifiedError.properties?.age?.errors,
      },
    };
  }
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const inputData = {
    id: data.user?.id as string,
    username: validatedFields.data.username,
    profile_image: validatedFields.data.profile_image,
    region: validatedFields.data.region,
    age: validatedFields.data.age ? Number(validatedFields.data.age) : null,
  };
  console.log("ssssssss");
  const response = await updateProfile(inputData);

  if (!response) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/mypage");
}
