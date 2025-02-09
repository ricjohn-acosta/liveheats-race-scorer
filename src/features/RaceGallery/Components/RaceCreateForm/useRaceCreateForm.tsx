import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RaceCreateForm,
  RaceCreateFormSchema,
} from "@/features/RaceGallery/Components/RaceCreateForm/helper";
import { customAlphabet } from "nanoid";
import { Race } from "@/types/race";

export const useRaceCreateForm = (
  closeFormModal: () => void,
  setRaces: (races: Race[]) => void,
) => {
  const form = useForm<RaceCreateForm>({
    mode: "onChange",
    defaultValues: {
      raceId: customAlphabet("1234567890abcdef", 10)(),
      raceName: "",
      raceParticipants: [{ lane: 1, participantName: "" }],
      status: "live",
      createdAt: new Date().toDateString(),
    },
    resolver: zodResolver(RaceCreateFormSchema),
    shouldFocusError: true,
  });

  const raceId = form.watch("raceId");
  const raceParticipants = form.watch("raceParticipants");
  const raceName = form.watch("raceName");
  const status = form.watch("status");
  const createdAt = form.watch("createdAt");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "raceParticipants",
  });

  const handleCreateRace = async () => {
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

    const newRace = { raceId, raceParticipants, raceName, status, createdAt };
    const updatedRaces = [...liveHeatsRaceScorerRaces, newRace];

    localStorage.setItem("liveHeatsRaceScorers", JSON.stringify(updatedRaces));
    setRaces(updatedRaces);
    closeFormModal();
  };

  return {
    data: {
      form,
      fields,
      createRaceDisabled: raceParticipants.length < 2 || raceName === "",
    },
    operations: { handleCreateRace, append, remove },
  };
};
