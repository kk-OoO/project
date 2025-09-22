import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function serializeBigInt(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

// レビュー投稿
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { chapelId, userId, role, rating, comment } = body.review;

    if (!chapelId || !userId || !role || !rating) {
      return new Response(
        JSON.stringify({ message: "必須項目が不足しています" }),
        { status: 400 }
      );
    }

    const uploadReview = await prisma.reviews.create({
      data: {
        chapel_id: Number(chapelId),
        user_id: userId,
        role,
        rating: Number(rating),
        comment,
      },
    });
    const serializedUploadReview = serializeBigInt(uploadReview);

    return Response.json(serializedUploadReview);
  } catch (err) {
    console.log(err);
    console.error("レビュー投稿エラー:", err);
    return new Response(JSON.stringify({ message: "投稿に失敗しました" }), {
      status: 500,
    });
  }
}

// レビュー一覧取得
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const chapel_id = searchParams.get("chapel_id");

    if (!chapel_id) {
      return new Response(JSON.stringify({ message: "chapel_id が必要です" }), {
        status: 400,
      });
    }

    const getReviews = await prisma.reviews.findMany({
      where: { chapel_id: Number(chapel_id) },
      include: {
        profiles: {
          select: { id: true, username: true },
        },
      },
      orderBy: { created_at: "desc" },
    });

    return Response.json(getReviews);
  } catch (err) {
    console.error("レビュー取得エラー:", err);
    return new Response(JSON.stringify({ message: "取得に失敗しました" }), {
      status: 500,
    });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, rating, comment, role } = body;

    if (!id) {
      return new Response(JSON.stringify({ message: "レビューIDが必要です" }), {
        status: 400,
      });
    }

    const updatedReview = await prisma.reviews.update({
      where: { id },
      data: {
        rating: rating ? Number(rating) : undefined,
        comment: comment ?? undefined,
        role: role ?? undefined,
      },
    });

    return Response.json(updatedReview);
  } catch (err) {
    console.error("レビュー更新エラー:", err);
    return new Response(JSON.stringify({ message: "更新に失敗しました" }), {
      status: 500,
    });
  }
}
