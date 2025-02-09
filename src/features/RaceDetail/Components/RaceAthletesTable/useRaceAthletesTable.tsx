import { useState } from "react";
import { Race, RaceParticipant, RaceResult } from "@/types/race";

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

  // Validate and handle ties when finishing race
  const assignParticipantPlaces = (results: RaceResult[]) => {
    const sortedResults = [...results].sort((a, b) => a.place - b.place);

    const adjustedPlaces: RaceResult[] = [];
    let currentPlace = 1;
    let skipped = 0;

    sortedResults.forEach((result, index) => {
      let newPlace;

      if (index > 0 && result.place === sortedResults[index - 1].place) {
        newPlace = currentPlace;
        skipped++;
      } else {
        currentPlace += skipped;
        newPlace = currentPlace;
        skipped = 1;
      }

      adjustedPlaces.push({
        lane: result.lane,
        place: newPlace,
      });
    });

    return adjustedPlaces;
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
