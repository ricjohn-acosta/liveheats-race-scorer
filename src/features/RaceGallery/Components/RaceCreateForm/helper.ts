import { z } from "zod";

export const RaceCreateFormSchema = z.object({});

export type RaceCreateForm = z.infer<typeof RaceCreateFormSchema>;
