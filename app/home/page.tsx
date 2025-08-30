import { getProfile } from "@/features/auth/fetchers";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const profile = await getProfile(data.user?.id);
  return (
    <div>
      <h1>こんにちは、{profile.username}</h1>
      <h1>Home</h1>
    </div>
  );
}
