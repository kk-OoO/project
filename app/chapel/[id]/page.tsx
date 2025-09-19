import { chapels } from "@prisma/client";
import { getChapelById } from "@/features/chapel/fetchers";
import Image from "next/image";
import ReviewsComponent from "@/features/chapel/components/review";
import Link from "next/link";

export default async function chapel({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const chapel: chapels = await getChapelById(id);

  return (
    <div>
      <Image
        src={chapel.image || ""}
        alt={chapel.name}
        width={600}
        height={400}
      />
      <h2 className="inline border-b text-2xl mt-6">{chapel?.name}</h2>

      <p>住所：{chapel?.address}</p>
      <p>収容人数：{chapel?.capacity}人</p>
      <p>基本プラン：{chapel?.price}円から</p>
      <p>公式サイト：{chapel?.url}</p>
      <Link
        href="/upload_review"
        className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
      >
        レビューを投稿する
      </Link>

      <ReviewsComponent chapelId={id} />
    </div>
  );
}
