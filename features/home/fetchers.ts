export async function getFavoritesByUserId(user_id: number) {
  const favorites = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/getFavoritesByUserId`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    }
  );

  if (!favorites?.ok) {
    return null;
  }

  return favorites.json();
}
