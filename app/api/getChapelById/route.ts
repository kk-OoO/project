import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

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
    const { id } = await req.json();

    const searchMethod: Prisma.chapelsFindUniqueArgs = {
      where: { id: id },
    };
    const chapel = await prisma.chapels.findUnique(searchMethod);
    const serializedChapels = serializeBigInt(chapel);

    return Response.json(serializedChapels);
  } catch (err) {
    return new Response(JSON.stringify({ message: String(err) }), {
      status: 500,
    });
  }
}
