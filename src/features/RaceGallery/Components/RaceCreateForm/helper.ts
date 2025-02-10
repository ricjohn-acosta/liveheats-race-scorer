import { z } from "zod";

export const RaceCreateFormSchema = z.object({
  raceId: z.string(),
  raceName: z.string().min(1, "Don't forget the race name!"),
  raceParticipants: z
    .array(
      z.object({
        lane: z.number(),
        place: z.number(),
        participantName: z
          .string()
          .trim()
          .min(1, "Please enter the athlete's name!"),
      }),
    )
    .min(2, "At least two participants are required!")
    .refine(
      (participants) => {
        const names = participants.map((p) => p.participantName.toLowerCase());
        return new Set(names).size === names.length;
      },
      { message: "Participant names must be unique!" },
    ),
  status: z.string(),
  createdAt: z.string(),
});

export type RaceCreateForm = z.infer<typeof RaceCreateFormSchema>;
