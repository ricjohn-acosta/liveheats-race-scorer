import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RaceCreateForm,
  RaceCreateFormSchema,
} from "@/features/RaceGallery/Components/RaceCreateForm/helper";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const useRaceCreateForm = (closeFormModal: () => void) => {
  const form = useForm<RaceCreateForm>({
    mode: "onChange",
    defaultValues: {
      raceName: "",
      raceParticipants: [{ lane: 1, participantName: "" }],
      status: "live",
      createdAt: new Date(),
    },
    resolver: zodResolver(RaceCreateFormSchema),
    shouldFocusError: true,
  });
  const [_, setRaces] = useLocalStorage("races", {});

  const raceParticipants = form.watch("raceParticipants");
  const raceName = form.watch("raceName");
  const status = form.watch("status");
  const createdAt = form.watch("createdAt");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "raceParticipants",
  });

  const handleCreateRace = async () => {
    setRaces({ raceParticipants, raceName, status, createdAt });
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
