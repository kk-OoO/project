type Review = {
  id: number;
  role: "host" | "guest";
  rating: number;
  comment: string;
  created_at: string;
  profiles: {
    username: string;
    profile_image: string | null;
  };
};

export default function ReviewItem({ review }: { review: Review }) {
  return (
    <div key={review.id} className="w-lg">
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
      <p className="text-gray-300">{review.created_at}</p>
    </div>
  );
}
