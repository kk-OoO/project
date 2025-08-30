import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    const searchMethod: Prisma.profilesFindUniqueOrThrowArgs = {
      where: { id: id },
    };
    const profile = await prisma.profiles.findUniqueOrThrow(searchMethod);

    return Response.json(profile);
  } catch (err) {
    return new Response(JSON.stringify({ message: String(err) }), {
      status: 500,
    });
  }
}
