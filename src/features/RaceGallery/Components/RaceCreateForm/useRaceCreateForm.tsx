import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RaceCreateForm,
  RaceCreateFormSchema,
} from "@/features/RaceGallery/Components/RaceCreateForm/helper";

export const useRaceCreateForm = () => {
  const form = useForm<RaceCreateForm>({
    mode: "onChange",
    defaultValues: {
      raceName: "",
      raceParticipants: [],
    },
    resolver: zodResolver(RaceCreateFormSchema),
    shouldFocusError: true,
  });

  const handleCreateRace = async () => {
    console.log("test");
  };

  return {
    data: { form },
    operations: { handleCreateRace },
  };
};
