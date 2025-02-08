import { z } from "zod";

export const RaceCreateFormSchema = z.object({
  raceId: z.string(),
  raceName: z.string().min(1, "Don't forget the race name!"),
  raceParticipants: z
    .array(
      z.object({
        lane: z.number(),
        participantName: z.string().min(1, "Please enter the athlete's name!"),
      }),
    )
    .min(2, "At least two participants are required."),
  status: z.string(),
  createdAt: z.date(),
});

export type RaceCreateForm = z.infer<typeof RaceCreateFormSchema>;
