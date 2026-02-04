import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
    async rewrites() {
    return [
      // User service
      {
        source: '/api/users/:path*',
        destination: 'http://localhost:3001/api/:path*' 
      },
      // Orders service  
      {
        source: '/api/orders/:path*',
        destination: 'http://localhost:3002/api/:path*' 
      },
      // Payments service
      {
        source: '/api/payments/:path*', 
        destination: 'http://localhost:3003/api/:path*' 
      },
    ];
}
};


export default nextConfig;
