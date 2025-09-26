import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, chapelId } = await req.json();

  try {
    const favorite = await prisma.favorites.create({
      data: { user_id: userId, chapel_id: Number(chapelId) },
    });
    return Response.json(favorite);
  } catch (error) {
    console.error("お気に入り追加エラー:", error);
    return new Response("お気に入り追加に失敗しました", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { userId, chapelId } = await req.json();

  try {
    await prisma.favorites.delete({
      where: {
        user_id_chapel_id: {
          user_id: userId,
          chapel_id: Number(chapelId),
        },
      },
    });
    return new Response("削除成功", { status: 200 });
  } catch (error) {
    console.error("お気に入り削除エラー:", error);
    return new Response("削除に失敗しました", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const chapelId = searchParams.get("chapelId");

  if (!userId || !chapelId) {
    return Response.json({ exists: false });
  }

  const favorite = await prisma.favorites.findMany({
    where: { user_id: userId, chapel_id: Number(chapelId) },
  });

  return Response.json({ exists: favorite.length > 0 });
}
