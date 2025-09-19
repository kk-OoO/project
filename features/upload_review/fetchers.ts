import { UploadReviewForm } from "./types";

export async function uploadReview(review: UploadReviewForm) {
  const reviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getReviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ review }),
  });

  if (!reviews?.ok) {
    return null;
  }

  return reviews.json();
}
