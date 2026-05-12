import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // LLMs redirect - must be before docs catch-all
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
      // Redirect broken doc links to appropriate category routes
      {
        source: '/guides/:path*',
        destination: '/docs/guides/',
      },
      {
        source: '/validators/:path*',
        destination: '/docs/guides/',
      },
      {
        source: '/developers/:path*',
        destination: '/docs/guides/',
      },
      {
        source: '/connect/:path*',
        destination: '/docs/connect/',
      },
      {
        source: '/overview/:path*',
        destination: '/docs/overview/',
      },
      // Catch-all for any other broken paths under /docs/
      {
        source: '/docs/:path*',
        destination: '/docs/',
      },
    ];
  },
};

export default withMDX(config);