import { Inter } from "next/font/google";
import "./globals.css";
import Navbartop from "@/components/Navbar";
import { Providers } from "./Providers";
import Footer from "@/components/Footer";

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
            <Navbartop />

            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
