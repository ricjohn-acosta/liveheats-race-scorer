import React from "react";
import { Plus } from "lucide-react";

export const RaceCreateCard = () => {
  return (
    <div
      className={
        "cursor-pointer w-full bg-white h-24 p-4 rounded-[16px] border-dashed border-2 border-gray-300 flex justify-center items-center text-muted-foreground " +
        "hover:bg-gradient-to-r from-red-500 to-orange-500 hover:border-none hover:text-white"
      }
    >
      <Plus className={"mr-1"} />
      <span className={"font-bold"}>Start a new race!</span>
    </div>
  );
};
