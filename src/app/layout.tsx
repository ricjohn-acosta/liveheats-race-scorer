import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Inter, Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: "Liveheats | Race Manager",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
    <body className={"bg-[#FCFCFD]"}>
      <Header />
      <div
        className={"w-full max-w-[1200px] px-[24px] mx-auto mt-4 font-inter"}
      >
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
