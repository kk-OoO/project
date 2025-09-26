"use client";

import { getReviewByChapelId } from "@/features/review/fetchers";
import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItems";

// Define the Review type if not imported from elsewhere
type Review = {
  id: number;
  rating: number;
  comment: string;
  role: "host" | "guest";
  created_at: string;
  profiles: {
    profile_image: string | null;
    username: string;
  };
};

export default function ReviewsComponent({ chapelId }: { chapelId: number }) {
  const [data, setData] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewByChapelId(chapelId);
      setData(data);
    };
    fetchData();
  }, [chapelId]);

  const averageRating =
    data.length > 0
      ? data.reduce((sum, review) => sum + review.rating, 0) / data.length
      : 0;

  return (
    <div>
      <div className="flex p-4">
        <div>
          <h2 className="text-xl font-bold mb-4 mt-8 text-center">
            主催者のレビュー
          </h2>
          {data
            .filter((review) => review.role === "host")
            .map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
        </div>
        <div className="w-px m-4 bg-black"></div>
        <div>
          <h2 className="text-xl font-bold mb-4 mt-8 text-center">
            招待客のレビュー
          </h2>
          {data
            .filter((review) => review.role === "guest")
            .map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
        </div>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={
              index < Math.round(averageRating)
                ? "text-yellow-400"
                : "text-gray-300"
            }
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-gray-600">
          {averageRating.toFixed(1)} / 5 （{data.length}件）
        </span>
      </div>
    </div>
  );
}
