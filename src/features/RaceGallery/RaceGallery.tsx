"use client";

import React, { Fragment } from "react";
import { RaceCreateCard } from "@/features/RaceGallery/Components/RaceCreateCard/RaceCreateCard";
import { RaceCard } from "@/features/RaceGallery/Components/RaceCard/RaceCard";
import { useRaceGallery } from "@/features/RaceGallery/useRaceGallery";

const RaceGallery = () => {
  const {
    data: { races },
    operations: { setRaces },
  } = useRaceGallery();

  return (
    <div className={"mt-4 grid lg:grid-cols-3 gap-4"}>
      {races?.map((race, i) => (
        <Fragment key={i}>
          <RaceCard raceData={race} />
        </Fragment>
      ))}
      <RaceCreateCard setRaces={setRaces} />
    </div>
  );
};

export default RaceGallery;
