import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RaceCreateForm,
  RaceCreateFormSchema,
} from "@/features/RaceGallery/Components/RaceCreateForm/helper";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { customAlphabet } from "nanoid";

export const useRaceCreateForm = (closeFormModal: () => void) => {
  const form = useForm<RaceCreateForm>({
    mode: "onChange",
    defaultValues: {
      raceId: customAlphabet("1234567890abcdef", 10)(),
      raceName: "",
      raceParticipants: [{ lane: 1, participantName: "" }],
      status: "live",
      createdAt: new Date(),
    },
    resolver: zodResolver(RaceCreateFormSchema),
    shouldFocusError: true,
  });
  const [liveHeatsRaceScorerRaces, setLiveHeatsRaceScorerRaces] =
    useLocalStorage("liveHeatsRaceScorerRaces", []);

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
    const newRace = { raceId, raceParticipants, raceName, status, createdAt };
    if (liveHeatsRaceScorerRaces) {
      setLiveHeatsRaceScorerRaces([...liveHeatsRaceScorerRaces, newRace]);
    } else {
      setLiveHeatsRaceScorerRaces([newRace]);
    }

    closeFormModal();
  };

  return {
    data: {
      form,
      fields,
      createRaceDisabled: raceParticipants.length < 3 || raceName === "",
    },
    operations: { handleCreateRace, append, remove },
  };
};
