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
      // Redirect legacy pre-migration paths (no /docs/ prefix) to their new location
      {
        source: '/guides/:path*',
        destination: '/docs/guides/:path*',
      },
      {
        source: '/validators/:path*',
        destination: '/docs/guides/:path*',
      },
      {
        source: '/developers/:path*',
        destination: '/docs/guides/:path*',
      },
      {
        source: '/connect/:path*',
        destination: '/docs/connect/:path*',
      },
      {
        source: '/overview/:path*',
        destination: '/docs/overview/:path*',
      },
    ];
  },
};

export default withMDX(config);