import { chapels } from "@prisma/client";
import Image from "next/image";
import FavoritesComponent from "./favorites";
import ChapelPlansComponent from "./plans";

export default async function DetailsComponent(chapel: chapels) {
  return (
    <div>
      <div className="flex">
        <h2 className="inline border-b text-2xl mt-3 mr-3 items-center">
          {chapel?.name}
        </h2>
        <FavoritesComponent chapelId={Number(chapel.id)} />
      </div>

      <Image
        src={chapel.image || "/no_image.png"}
        alt={chapel.name}
        width={400}
        height={300}
      />

      <p>住所：{chapel?.address}</p>
      <p>収容人数：{chapel?.capacity}人</p>
      <p>基本プラン：{chapel?.price}円から</p>
      <p>公式サイト：{chapel?.url}</p>
      <ChapelPlansComponent chapelId={Number(chapel.id)} />
    </div>
  );
}
