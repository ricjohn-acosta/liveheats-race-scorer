"use client";

import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-[60px] flex items-center justify-between px-[16px] py-[4px] bg-[#FCFCFD] sticky top-0 border-b border-[#DADEE2]">
      <Link href="/">
        <Image
          src={
            "https://liveheats.com/static/media/LockupHorizontalBrandRed.87dd46f84eda84658a198c99d5cf1e3f.svg"
          }
          width={136}
          height={136}
          alt={"Logo"}
        />
      </Link>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    </header>
  );
};
