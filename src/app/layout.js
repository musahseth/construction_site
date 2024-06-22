import { Inter } from "next/font/google";
import "./globals.css";
import Navbartop from "@/components/Navbar";
import { Providers } from "./Providers";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nyande construction company",
  description:
    "Plan, build, and more with Nyande Construction Company. We offer comprehensive construction services to meet all your needs.",
  keywords: "construction house building Tilling design",
  openGraph: {
    image: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="">
            <Toaster />
            <Analytics />
            <SpeedInsights />
            <Navbartop />

            <div>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
