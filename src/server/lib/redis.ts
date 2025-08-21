import { Redis } from '@upstash/redis'

declare global {
  var _redis: Redis | undefined;
}

// Initialize Redis once.
if ( !globalThis._redis ) {
  globalThis._redis = Redis.fromEnv();
  console.log( "Redis initialized" );
}

const redis = globalThis._redis;

export const GMAP_REVALIDATE_DUR = 60 * 60 * 24 * 7; // Every 7 days
export const GMAP_CACHE_KEY = "rcapt/gmap_api_data";

export default redis