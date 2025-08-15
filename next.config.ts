import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [ new URL( 'https://res.cloudinary.com/farooqdotdev/**' ) ],
  },
};

export default nextConfig;
