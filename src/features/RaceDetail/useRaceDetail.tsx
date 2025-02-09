import { useEffect, useState } from "react";
import { Race } from "@/types/race";

export const useRaceDetail = (raceId: string) => {
  const [race, setRace] = useState<Race | null>();

  useEffect(() => {
    if (!raceId) return;
    const storedData = localStorage.getItem("liveHeatsRaceScorers");
    let liveHeatsRaceScorerRaces: Race[] = [];

    try {
      liveHeatsRaceScorerRaces = storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error(
        "Error parsing liveHeatsRaceScorers from localStorage:",
        error,
      );
      liveHeatsRaceScorerRaces = [];
    }

    const race = liveHeatsRaceScorerRaces.find(
      (race) => race.raceId === raceId,
    );
    setRace(race);
  }, [raceId]);

  return {
    data: {
      race,
    },
  };
};
