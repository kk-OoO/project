"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { getProfile } from "@/features/auth/fetchers";
import Link from "next/link";
import ChapelComponent from "@/features/search_chapel/components/chapel";
import { getChapelById } from "@/features/chapel/fetchers";

type props = {
  id: number;
  name: string;
  region: string;
  address: string;
  url: string;
  image: string;
  price: number;
  capacity: number;
};

export default function FavoriteChapelList() {
  const [chapels, setChapels] = useState<props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;

      // プロフィールを取得
      const profile = await getProfile(data.user.id);

      // APIからお気に入り一覧取得
      const res = await fetch(`/api/getFavoritesByUserId?userId=${profile.id}`);
      const favs = await res.json();

      const chapelData = await Promise.all(
        favs.map((f: { chapel_id: number }) => getChapelById(f.chapel_id))
      );

      // chapel 情報だけ取り出してセット
      setChapels(chapelData);
    };

    fetchData();
  }, []);

  if (chapels.length === 0) {
    return <p>お気に入りのチャペルはまだありません。</p>;
  }

  return (
    <div className="space-y-4">
      <ul className="space-y-2 flex">
        {chapels.map((chapel) => (
          <Link href={`/chapel/${chapel.id}`} key={chapel.id}>
            <ChapelComponent chapel={chapel} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
