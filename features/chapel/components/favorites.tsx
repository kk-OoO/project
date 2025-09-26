"use client";

import { getProfile } from "@/features/auth/fetchers";
import { createClient } from "@/lib/supabase/client";
import { profiles } from "@prisma/client";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  chapelId: number;
};

export default function FavoritesComponent({ chapelId }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [profile, setProfile] = useState<profiles | null>(null);

  useEffect(() => {
    const fetchProfileAndFavorite = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;

      const p: profiles = await getProfile(data.user.id);
      setProfile(p);

      const res = await fetch(
        `/api/favorites?userId=${p.id}&chapelId=${chapelId}`
      );
      const fav = await res.json();
      setIsFavorite(fav.exists); // API 側で { exists: true/false } を返すようにする
    };

    fetchProfileAndFavorite();
  }, [chapelId]);

  const toggleFavorite = async () => {
    if (!profile) return;

    if (isFavorite) {
      await fetch("/api/favorites", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: profile.id, chapelId }),
      });
      setIsFavorite(false);
    } else {
      await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: profile.id, chapelId }),
      });
      setIsFavorite(true);
    }
  };

  return (
    <div>
      <button
        onClick={toggleFavorite}
        className={`w-12 h-12 flex items-center justify-center rounded-full border shadow-md transition-colors ${
          isFavorite
            ? "bg-yellow-100 border-yellow-400"
            : "bg-gray-100 border-gray-300"
        }`}
      >
        <Star
          className={`w-6 h-6 transition-colors ${
            isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
}
