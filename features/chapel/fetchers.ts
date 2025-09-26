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
export async function favorite(id: number) {
  const chapel = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  if (!chapel?.ok) {
    return null;
  }

  return chapel.json();
}

export async function getFavorite(id: number) {
  const chapel = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getFavorite`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  if (!chapel?.ok) {
    return null;
  }

  return chapel.json();
}

export async function getChapelPlanByChapelId(chapelId: number) {
  const chapel = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/getChapelPlanByChapelId`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: chapelId }),
    }
  );

  if (!chapel?.ok) {
    return null;
  }

  return chapel.json();
}
