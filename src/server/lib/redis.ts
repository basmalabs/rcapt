import { Redis } from '@upstash/redis'

let redis: Redis;

declare global {
  var _redis: Redis | undefined;
}

// Initialize Redis once.
if ( !global._redis ) {
  global._redis = Redis.fromEnv();
  console.log( "Redis initialized" );
}

redis = global._redis;

export const GMAP_REVALIDATE_DUR = 60 * 60 * 24 * 7; // Every 7 days
export const GMAP_CACHE_KEY = "rcapt/gmap_api_data";

export default redis