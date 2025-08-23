// import { NextConfig } from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';
// import createMDX from '@next/mdx';

// const withNextIntl = createNextIntlPlugin();
// const withMDX = createMDX({
//   // Add markdown plugins here, if you want
//   extension: /\.(md|mdx)$/,
// });

// /** @type {import('next').NextConfig} */
// const nextConfig: NextConfig = {
//   // output: 'export',
//   // Configure `pageExtensions` to include markdown and MDX files
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   images: {
//     unoptimized: true, // needed if you use next/image with static export
//   },
// };

// // Wrap with both plugins
// export default withNextIntl(
//   withMDX(nextConfig)
// );

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react', // so JSX in MDX works
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Add explicit MDX loader rule
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: require.resolve('@mdx-js/loader'),
          options: {
            providerImportSource: '@mdx-js/react',
          },
        },
      ],
    });
    return config;
  },
};

// Wrap with both plugins
export default withNextIntl(withMDX(nextConfig));
