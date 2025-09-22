import { chapels } from "@prisma/client";
import Image from "next/image";

export default async function DetailsComponent(chapel: chapels) {
  return (
    <div>
      <Image
        src={chapel.image || "/no_image.png"}
        alt={chapel.name}
        width={600}
        height={400}
      />
      <h2 className="inline border-b text-2xl mt-6">{chapel?.name}</h2>

      <p>住所：{chapel?.address}</p>
      <p>収容人数：{chapel?.capacity}人</p>
      <p>基本プラン：{chapel?.price}円から</p>
      <p>公式サイト：{chapel?.url}</p>
    </div>
  );
}
