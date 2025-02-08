import { z } from "zod";

export const RaceCreateFormSchema = z.object({
  raceName: z.string().min(1, "Don't forget the race name!"),
  raceParticipants: z
    .array(
      z.object({
        lane: z.number(),
        participantName: z.string(),
      }),
    )
    .min(2, "At least two participants are required."),
});

export type RaceCreateForm = z.infer<typeof RaceCreateFormSchema>;
