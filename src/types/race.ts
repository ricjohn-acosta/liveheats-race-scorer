export type RaceParticipant = {
  lane: number;
  participantName: string;
};

export type Race = {
  raceId: string;
  raceParticipants: RaceParticipant[];
  raceName: string;
  status: string;
  createdAt: string;
};
