"use client";

import React, { FC } from "react";
import { UserRound } from "lucide-react";
import { Race } from "@/types/race";
import Link from "next/link";
import { getMonthAbbreviation } from "@/lib/utils";
import { StatusBadge } from "@/components/StatusBadge/StatusBadge";

interface RaceCardProps {
  raceData: Race;
}

export const RaceCard: FC<RaceCardProps> = ({ raceData }) => {
  return (
    <Link href={`race/${raceData.raceId}`}>
      <div
        className={
          "cursor-pointer w-full bg-white p-4 h-24 rounded-[16px] border-solid border-2 border-gray-300 flex flex-row gap-3"
        }
      >
        <div
          className={
            "bg-gray-200 p-2 px-8 font-bold rounded-[8px] text-center font-archivo"
          }
        >
          {getMonthAbbreviation(new Date(raceData.createdAt)).toUpperCase()}
          <br />
          {new Date(raceData.createdAt).getDate().toString()}
        </div>

        <div className={"w-full flex flex-col gap-1"}>
          <div className={"font-bold flex items-center justify-between"}>
            <span className={"lg:w-32 truncate font-archivo"}>
              {raceData.raceName}
            </span>
            <StatusBadge>{raceData.status}</StatusBadge>
          </div>
          <div className={"flex items-center text-muted-foreground"}>
            <UserRound size={14} />
            <span className={"text-sm"}>
              {raceData.raceParticipants.length}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
