import { revalidatePath } from "next/cache";
import redis, {GMAP_CACHE_KEY} from "@/server/lib/redis";

export async function GET() {
  revalidatePath( "/api/gmap/opening-hours" );
  await redis.del( GMAP_CACHE_KEY );
  console.log( "Revalidation triggered for /api/gmap/opening-hours. And Redis Cache invalidated for key: ", GMAP_CACHE_KEY );
};
