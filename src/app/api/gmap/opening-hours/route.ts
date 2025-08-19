import { NextResponse } from "next/server";
import { getGMapData } from "@/server/utils/getGMapData";

export const revalidate = 60 * 60 * 24 * 7;

export async function GET() {
  const { openingHours } = await getGMapData();
  return NextResponse.json( openingHours );
}