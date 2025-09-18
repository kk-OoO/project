import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, username, profile_image, region, age, gender } = body.profile;

    if (!id) {
      return new Response(JSON.stringify({ message: "ユーザーIDが必要です" }), {
        status: 400,
      });
    }

    const updatedProfile = await prisma.profiles.update({
      where: { id },
      data: {
        username,
        profile_image,
        region,
        age: age ? Number(age) : null,
        gender,
      },
    });

    return Response.json(updatedProfile);
  } catch (err) {
    console.error("プロフィール更新エラー:", err);
    return new Response(JSON.stringify({ message: "保存に失敗しました" }), {
      status: 500,
    });
  }
}
