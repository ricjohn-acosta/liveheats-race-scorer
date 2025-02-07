"use client";

import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="h-[60px] flex items-center justify-between px-[16px] py-[4px] sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md border-b">
      <Image
        src={
          "https://liveheats.com/static/media/LockupHorizontalBrandRed.87dd46f84eda84658a198c99d5cf1e3f.svg"
        }
        width={136}
        height={136}
        alt={"Logo"}
      />

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    </header>
  );
};
