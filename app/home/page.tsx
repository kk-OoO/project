import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  return (
    <div>
      <h1>こんにちは、{data.user?.email}</h1>
      <h1>Home</h1>
    </div>
  );
}
