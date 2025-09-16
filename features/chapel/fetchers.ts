export async function getChapelById(id: number) {
  const chapel = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/getChapelById`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }
  );

  if (!chapel?.ok) {
    return null;
  }

  return chapel.json();
}
