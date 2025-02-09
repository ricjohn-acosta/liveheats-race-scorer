"use client";

import React, { FC } from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge/StatusBadge";
import { useRaceDetail } from "@/features/RaceDetail/useRaceDetail";
import { getFormattedDate } from "@/lib/utils";

interface RaceDetailProps {
  raceId: string;
}

export const RaceDetail: FC<RaceDetailProps> = ({ raceId }) => {
  const {
    data: { race },
  } = useRaceDetail(raceId);

  return (
    <>
      <div className={"text-[13px] text-[#3D444D] tracking-wide mb-4"}>
        <Link href={"/"}>
          <span>Race Manager</span>
        </Link>
        <span className={"mx-[8px] text-[16px]"}>/</span>
        <span>Race details</span>
      </div>

      <div>
        <div className={"flex flex-row items-center mb-1"}>
          <span className={"mr-2 uppercase text-[13px] font-semibold"}>
            {getFormattedDate(race?.createdAt)}
          </span>
          <StatusBadge>{race?.status}</StatusBadge>
        </div>

        <h1 className={"text-3xl font-archivo font-semibold"}>
          {race?.raceName}
        </h1>
      </div>
    </>
  );
};
