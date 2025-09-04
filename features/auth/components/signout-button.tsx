import { signOut } from "../fetchers";

export default async function SignoutButton() {
  return (
    <form action={signOut}>
      <button>ログアウト</button>
    </form>
  );
}
