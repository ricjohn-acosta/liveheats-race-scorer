import { RaceResult } from "@/types/race";

export const assignParticipantPlaces = (results: RaceResult[]) => {
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
