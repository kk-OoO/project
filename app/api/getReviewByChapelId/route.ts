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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const chapelId = body.chapel_id;

    if (!chapelId) {
      return new Response(JSON.stringify({ message: "chapelId が必要です" }), {
        status: 400,
      });
    }

    const reviews = await prisma.reviews.findMany({
      where: { chapel_id: chapelId },
      include: {
        profiles: {
          select: {
            id: true,
            username: true,
            profile_image: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });
    const serializedReviews = serializeBigInt(reviews);

    return Response.json(serializedReviews);
  } catch (err) {
    return new Response(JSON.stringify({ message: String(err) }), {
      status: 500,
    });
  }
}
