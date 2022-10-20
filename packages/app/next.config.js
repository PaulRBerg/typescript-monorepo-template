/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    /** https://github.com/belgattitude/nextjs-monorepo-example#step-33-next-config */
    externalDir: true,
  },
  compiler: {
    /** https://styled-components.com/docs/advanced#with-swc  */
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  trailingSlash: true,
};

module.exports = nextConfig;
