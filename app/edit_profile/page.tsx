import { getProfile } from "@/features/auth/fetchers";
import UpdateProfileForm from "@/features/edit_profile/components/update-profile-form";
import { createClient } from "@/lib/supabase/server";
import { profiles } from "@prisma/client";

export default async function EditProfilePage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const profile: profiles = await getProfile(data.user?.id);

  return (
    <div>
      <UpdateProfileForm {...profile} />
    </div>
  );
}
