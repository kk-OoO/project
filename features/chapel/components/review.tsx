"use client";

import { getReviewByChapelId } from "@/features/review/fetchers";
import { useEffect, useState } from "react";

type Review = {
  id: number;
  role: "主催者" | "招待客";
  rating: number;
  comment: string;
  profiles: {
    username: string;
    profile_image: string | null;
  };
};
export default function ReviewsComponent({ chapelId }: { chapelId: number }) {
  const [data, setData] = useState<Review[]>([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewByChapelId(chapelId);
      setData(data);
    };
    fetchData();
  }, [chapelId]);
  return (
    <div>
      {data.map((review) => (
        <div key={review.id} className="border p-4 mb-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            {review.profiles.profile_image ? (
              <img
                src={review.profiles.profile_image}
                alt={review.profiles.username}
                className="w-10 h-10 rounded-full mr-3"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                <span className="text-gray-600">N/A</span>
              </div>
            )}
            <div>
              <p className="font-bold">{review.profiles.username}</p>
              <p className="text-sm text-gray-600">{review.role}</p>
            </div>
          </div>
          <div className="mb-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < review.rating ? "text-yellow-400" : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
