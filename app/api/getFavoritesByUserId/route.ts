import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return Response.json({ exists: false });
  }

  try {
    const favorites = await prisma.favorites.findMany({
      where: { user_id: userId },
      orderBy: { created_at: "desc" },
    });

    return new Response(JSON.stringify(favorites), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("お気に入り取得エラー:", err);
    return new Response(JSON.stringify({ message: "取得に失敗しました" }), {
      status: 500,
    });
  }
}
