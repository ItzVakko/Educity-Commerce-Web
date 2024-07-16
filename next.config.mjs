/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/clothes",
        destination: "/Pages/ClothesPage",
      },
      {
        source: "/checkout",
        destination: "/Pages/CheckoutPage",
      },
      {
        source: "/login",
        destination: "/Pages/LoginPage",
      },
    ];
  },
};

export default nextConfig;
