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
  description: "plan, Build, and more ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="">
            <Toaster />
            <Analytics />
            <SpeedInsights />
            <Navbartop />

            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
