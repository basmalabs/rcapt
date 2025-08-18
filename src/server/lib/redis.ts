import { Redis } from '@upstash/redis'

// Singleton pattern for Redis client
declare global {
  var _redis: Redis | undefined;
}

// Initialize Redis once.
const redis = global._redis || Redis.fromEnv();

if (!global._redis) {
  global._redis = redis;
}

export default redis