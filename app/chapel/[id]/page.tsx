"use server";

import { chapels } from "@prisma/client";
import { getChapelById } from "@/features/chapel/fetchers";
import ReviewsComponent from "@/features/chapel/components/review";
import Link from "next/link";
import DetailsComponent from "@/features/chapel/components/detail";

export default async function chapel({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const chapel: chapels = await getChapelById(id);

  return (
    <div className="flex between">
      <div>
        <DetailsComponent {...chapel} />
        <Link
          href={`/upload_review/${id}`}
          className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
        >
          レビューを投稿する
        </Link>
        <Link
          href={`/create_plan/${id}`}
          className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
        >
          プランを作成する
        </Link>
      </div>
      <div className="mt-8">
        <ReviewsComponent chapelId={id} />
      </div>
    </div>
  );
}
