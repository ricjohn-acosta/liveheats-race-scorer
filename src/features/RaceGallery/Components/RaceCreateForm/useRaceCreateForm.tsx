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
      raceName: undefined,
      raceParticipants: undefined,
    },
    resolver: zodResolver(RaceCreateFormSchema),
    shouldFocusError: true,
  });

  return {
    data: { form },
  };
};
