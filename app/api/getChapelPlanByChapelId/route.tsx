// /app/api/chapelPlans/route.ts
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

function serializeBigInt(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const chapelId = searchParams.get("chapelId");

  if (!chapelId) {
    return new Response(JSON.stringify({ message: "chapelId が必要です" }), {
      status: 400,
    });
  }

  try {
    const plans = await prisma.chapel_plans.findMany({
      where: { chapel_id: Number(chapelId) },
      orderBy: { created_at: "desc" },
    });
    const serializedPlans = serializeBigInt(plans);

    return Response.json(serializedPlans);
  } catch (err) {
    console.error("プラン取得エラー:", err);
    return new Response(JSON.stringify({ message: "取得に失敗しました" }), {
      status: 500,
    });
  }
}
