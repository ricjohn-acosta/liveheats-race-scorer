import { useState } from "react";
import { Race, RaceParticipant, RaceResult } from "@/types/race";
import { assignParticipantPlaces } from "@/features/RaceDetail/Components/RaceAthletesTable/helper";

export const useRaceAthletesTable = (race: Race) => {
  const [raceState, setRaceState] = useState<Race>(race);
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

  const handleFinishRace = () => {
    if (results.length === 0) return;

    const updatedRaceParticipants: RaceParticipant[] =
      raceState.raceParticipants
        .map((participant) => ({
          ...participant,
          place:
            assignParticipantPlaces(results).find(
              (result) => result.lane === participant.lane,
            )?.place ?? 0,
        }))
        .sort((a, b) => {
          return a.place - b.place;
        });

    const updatedRaceState = {
      ...raceState,
      status: "completed",
      raceParticipants: updatedRaceParticipants,
    };

    setRaceState(updatedRaceState);

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

    const updatedRaceIndex = liveHeatsRaceScorerRaces.findIndex(
      (storedRace) => storedRace.raceId === race.raceId,
    );
    liveHeatsRaceScorerRaces[updatedRaceIndex] = updatedRaceState;

    localStorage.setItem(
      "liveHeatsRaceScorers",
      JSON.stringify(liveHeatsRaceScorerRaces),
    );
  };

  return {
    data: { results, raceState },
    operations: { handlePlaceSelect, handleFinishRace },
  };
};
