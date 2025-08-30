"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { FormState, SignupFormSchema } from "./types";
import z from "zod";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/home");
}

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    // Zod v4: Use z.treeifyError instead of .flatten()
    const treeifiedError = z.treeifyError(validatedFields.error);

    return {
      errors: {
        name: treeifiedError.properties?.name?.errors,
        email: treeifiedError.properties?.email?.errors,
        password: treeifiedError.properties?.password?.errors,
      },
    };
  }

  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const inputData = {
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    options: {
      data: {
        username: validatedFields.data.name,
      },
    },
  };

  const { error } = await supabase.auth.signUp(inputData);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function getProfile(id?: string) {
  const profile = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getProfile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!profile?.ok) {
    return null;
  }

  return profile.json();
}
