"use client";

import React, { FC } from "react";
import { UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Race } from "@/types/race";

interface RaceCardProps {
  raceData: Race;
}

export const RaceCard: FC<RaceCardProps> = ({ raceData }) => {
  return (
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
        JAN
        <br />
        18
      </div>

      <div className={"w-full flex flex-col gap-1"}>
        <div className={"font-bold flex items-center justify-between"}>
          <span className={"w-20 truncate font-archivo"}>
            {raceData.raceName}
          </span>
          <Badge className={"rounded-[4px] uppercase"}>{raceData.status}</Badge>
        </div>
        <div className={"flex items-center text-muted-foreground"}>
          <UserRound size={14} />
          <span className={"text-sm"}>{raceData.raceParticipants.length}</span>
        </div>
      </div>
    </div>
  );
};
