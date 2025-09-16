import { getProfile } from "@/features/auth/fetchers";
import Profile from "@/features/mypage/components/profile";
import { createClient } from "@/lib/supabase/server";
import { profiles } from "@prisma/client";
import Link from "next/link";

export default async function MyPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const profile: profiles = await getProfile(data.user?.id);
  return (
    <div className="text-center">
      <h2 className="inline border-b text-2xl mt-6">マイページ</h2>
      <Profile profile={profile} />
      <div className="flex justify-center">
        <Link
          href="/edit_profile"
          className="w-32 h-32 rounded-full border border-black flex items-center justify-center mt-4 transition-colors"
        >
          編集
        </Link>
      </div>
    </div>
  );
}
