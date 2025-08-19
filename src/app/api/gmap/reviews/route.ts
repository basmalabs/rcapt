import { NextResponse } from "next/server";
import { getGMapData } from "@/server/utils/getGMapData";

// Ensure this route is static
export const dynamic = "force-static";

export async function GET() {
  const { reviews } = await getGMapData();
  return NextResponse.json( reviews );
}