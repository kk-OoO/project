"use server";

export async function getReviews(chapel_id: number) {
  const reviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getReviews`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chapel_id }),
  });

  if (!reviews?.ok) {
    return null;
  }

  return reviews.json();
}

export async function getReviewByChapelId(chapel_id: number) {
  const reviews = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/getReviewByChapelId`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chapel_id }),
    }
  );
  if (!reviews?.ok) {
    return null;
  }

  return reviews.json();
}

export async function updatedReview(chapel_id: number, user_id: string) {
  const review = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getMyReview`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chapel_id, user_id }),
  });

  if (!review?.ok) {
    return null;
  }

  return review.json();
}

export async function deleteReview(id: number) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/deleteReview`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );

  if (!result?.ok) {
    return null;
  }

  return result.json();
}
