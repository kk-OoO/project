import { chapels } from "@prisma/client";
import { getChapelById } from "@/features/chapel/fetchers";
import Image from "next/image";
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
      <h2 className="inline border-b text-2xl mt-6">{chapel?.name}</h2>
      <Image
        src={chapel.image || ""}
        alt={chapel.name}
        width={600}
        height={400}
      />
      <p className="text-3xl">住所：{chapel?.address}</p>
      <p>収容人数：{chapel?.capacity}人</p>
      <p>基本プラン：{chapel?.price}円から</p>
      <p>公式サイト：{chapel?.url}</p>
    </div>
  );
}
