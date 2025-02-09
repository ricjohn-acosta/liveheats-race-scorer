import { useState, useEffect } from "react";
import { Race } from "@/types/race";

export const useRaceGallery = () => {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
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

    setRaces(liveHeatsRaceScorerRaces);
  }, []);

  return {
    data: { races },
    operations: { setRaces },
  };
};
