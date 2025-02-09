import { useState } from "react";
import { RaceResult } from "@/types/race";

export const useRaceAthletesTable = () => {
  const [results, setResults] = useState<RaceResult[]>([]);

  const handlePlaceSelect = (lane: number, place: number) => {
    setResults((prev) => {
      const updatedResults = prev.map((result) =>
        result.lane === lane ? { ...result, place } : result,
      );

      if (!updatedResults.some((result) => result.lane === lane)) {
        updatedResults.push({ lane, place });
      }

      return updatedResults;
    });
  };

  return {
    data: { results },
    operations: { handlePlaceSelect },
  };
};
