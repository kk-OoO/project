import { createClient } from "@/lib/supabase/server";

export default async function Plan() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  return (
    <div>
      <h1>結婚式プラン</h1>
    </div>
  );
}
