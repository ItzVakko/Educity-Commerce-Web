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
      {
        source: "/register",
        destination: "/Pages/RegisterPage",
      },
      {
        source: "/product/:id",
        destination: "/Pages/ClothesDetailsPage/[id]",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
