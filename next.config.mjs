/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
