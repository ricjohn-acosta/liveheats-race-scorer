import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Liveheats | Race scoring manager",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Header />
      <div className={"w-full max-w-[1200px] px-[24px] mx-auto mt-4"}>
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
