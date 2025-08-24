import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // output: 'export',
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true, // needed if you use next/image with static export
  },
};

// Wrap with both plugins
export default withNextIntl(nextConfig);
