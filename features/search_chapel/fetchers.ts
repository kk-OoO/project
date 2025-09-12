"use server";

export async function getChapels(region: string) {
  const chapels = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getChapels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region }),
  });

  if (!chapels?.ok) {
    return null;
  }

  return chapels.json();
}

export async function getChapel(name: string) {
  const chapel = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getChapel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!chapel?.ok) {
    return null;
  }

  return chapel.json();
}
