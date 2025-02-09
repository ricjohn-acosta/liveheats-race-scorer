export type RaceParticipant = {
  lane: number;
  participantName: string;
  place: number | null;
};

export type Race = {
  raceId: string;
  raceParticipants: RaceParticipant[];
  raceName: string;
  status: string;
  createdAt: string;
};

export type RaceResult = {
  place: number;
  lane: number;
};
