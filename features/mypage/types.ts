import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type profiles = {
  id: number;
  username: string;
  region: string;
  created_at: Timestamp;
  age: number;
  gender: string;
  profile_image: string;
};
