import { profiles } from "@prisma/client";

type Props = { profile: profiles };

export default function Profile({ profile }: Props) {
  return (
    <div>
      {profile.profile_image ? (
        <img src={profile.profile_image} alt="プロフィール画像" width={150} />
      ) : (
        <p>プロフィール画像が設定されていません</p>
      )}
      <p>{profile.username}</p>
      <p>年齢: {profile?.age ?? "未設定"}</p>
      <p>性別: {profile?.gender ?? "未設定"}</p>
      <p>地域: {profile?.region ?? "未設定"}地方</p>
    </div>
  );
}
