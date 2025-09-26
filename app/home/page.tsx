import FavoriteChapelList from "@/features/home/components/favorit_chapels";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  return (
    <div className="flex flex-col">
      <h1 className="inline mx-auto border-b-1 text-2xl mt-6">
        作成した結婚式プラン
      </h1>
      <h1 className="inline mx-auto border-b-1 text-2xl mt-6">
        お気に入りした式場
      </h1>
      <FavoriteChapelList />
    </div>
  );
}
