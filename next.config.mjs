/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This is the wildcard for all hosts
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
