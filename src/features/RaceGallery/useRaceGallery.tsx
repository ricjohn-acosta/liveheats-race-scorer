import { useState, useEffect } from "react";
import { Race } from "@/types/race";
import { customAlphabet } from "nanoid";

export const useRaceGallery = () => {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("liveHeatsRaceScorers");
    const initData = {
      raceId: customAlphabet("1234567890abcdef", 10)(),
      raceName: "Usain Bolt vs Barry Allen",
      raceParticipants: [
        { lane: 1, participantName: "Usain Bolt" },
        { lane: 2, participantName: "Barry Allen" },
      ],
      status: "live",
      createdAt: new Date().toDateString(),
    };

    if (!storedData) {
      localStorage.setItem("liveHeatsRaceScorers", JSON.stringify([initData]));
      setRaces([...races, initData]);
    }
  }, []);

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
