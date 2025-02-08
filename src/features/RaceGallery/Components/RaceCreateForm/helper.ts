import { z } from "zod";

export const RaceCreateFormSchema = z.object({
  raceName: z.string(),
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
