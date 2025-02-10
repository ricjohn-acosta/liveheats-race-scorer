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
          "cursor-pointer w-full bg-white p-4 h-30 rounded-[16px] border-solid border-2 border-gray-300 gap-3"
        }
      >
        <StatusBadge className={"mb-2"}>{raceData.status}</StatusBadge>

        <div className={"flex flex-row gap-2"}>
          <div
            className={
              "bg-gray-200 p-2 px-8 font-bold rounded-[8px] text-center font-archivo"
            }
          >
            <span>
              {getMonthAbbreviation(new Date(raceData.createdAt)).toUpperCase()}
            </span>
            <br />
            <span>{new Date(raceData.createdAt).getDate().toString()}</span>
          </div>

          <div className="w-full flex flex-col gap-1">
            <div className="font-bold flex items-center justify-between">
              <span className="font-archivo truncate  max-w-[50%] md:max-w-[75%] lg:max-w-48">
                {raceData.raceName}
              </span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <UserRound size={14} />
              <span className="text-sm">
                {raceData.raceParticipants.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
