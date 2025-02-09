import React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge/StatusBadge";

export const RaceDetail = () => {
  return (
    <>
      <div className={"text-[13px] text-[#3D444D] tracking-wide mb-4"}>
        <Link href={"/"}>
          <span>Race Manager</span>
        </Link>
        <span className={"mx-[8px] text-[16px]"}>/</span>
        <span>Usain Bolt vs Barry Allen</span>
      </div>

      <div className={"flex flex-row items-center gap-4"}>
        <h1 className={"text-3xl font-archivo font-semibold"}>Race details</h1>
        <StatusBadge>Live</StatusBadge>
      </div>
    </>
  );
};
