import { Inter } from "next/font/google";
import Providers from "./reduxProviders";

import "./App.css";
import "./Fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Commercial Website",
  description: "Created by educity students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
