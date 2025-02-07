import React from "react";
import { RaceCreateCard } from "@/features/RaceGallery/Components/RaceCreateCard/RaceCreateCard";
import { RaceCard } from "@/features/RaceGallery/Components/RaceCard/RaceCard";

const RaceGallery = () => {
  return (
    <div className={"mt-4 grid grid-cols-3 gap-4"}>
      <RaceCard />
      <RaceCard />
      <RaceCreateCard />
    </div>
  );
};

export default RaceGallery;
