import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";
if ( !MONGO_URI ) throw new Error( "DB Connection Error: MONGO_URI is not defined" );

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var _mongoose: MongooseCache;
}

const isDev = process.env.NODE_ENV !== "production";
let cached: MongooseCache;

if ( isDev ) {
  // Dev mode: using global cache
  if ( !globalThis._mongoose ) {
    globalThis._mongoose = { conn: null, promise: null };
  }
  cached = globalThis._mongoose;
} else {
  // Prod mode: using local cache
  cached = { conn: null, promise: null };
}

async function connectDB() {
  if ( cached.conn ) return cached.conn;

  if ( cached.promise === null ) {
    cached.promise = mongoose.connect( MONGO_URI ).then( (mongoose) => {
      cached.conn = mongoose;
      return cached.conn;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
