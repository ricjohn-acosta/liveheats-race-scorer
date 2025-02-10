import { assignParticipantPlaces } from "../helper"; // Adjust the import path

describe("assignParticipantPlaces", () => {
  it("assigns correct places when all results are different", () => {
    const results = [
      { lane: 1, place: 3 },
      { lane: 2, place: 1 },
      { lane: 3, place: 2 },
    ];

    const expected = [
      { lane: 2, place: 1 },
      { lane: 3, place: 2 },
      { lane: 1, place: 3 },
    ];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });

  it("correctly handles next available place in case of a tie", () => {
    const results = [
      { lane: 1, place: 1 },
      { lane: 2, place: 1 },
      { lane: 3, place: 2 },
    ];

    const expected = [
      { lane: 1, place: 1 },
      { lane: 2, place: 1 },
      { lane: 3, place: 3 },
    ];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });

  it("correctly handles skipping places for tied positions", () => {
    const results = [
      { lane: 1, place: 1 },
      { lane: 2, place: 1 },
      { lane: 3, place: 2 },
      { lane: 4, place: 3 },
      { lane: 5, place: 3 },
    ];

    const expected = [
      { lane: 1, place: 1 },
      { lane: 2, place: 1 },
      { lane: 3, place: 3 },
      { lane: 4, place: 4 },
      { lane: 5, place: 4 },
    ];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });

  it("handles already sorted results correctly", () => {
    const results = [
      { lane: 1, place: 1 },
      { lane: 2, place: 2 },
      { lane: 3, place: 3 },
    ];

    const expected = [
      { lane: 1, place: 1 },
      { lane: 2, place: 2 },
      { lane: 3, place: 3 },
    ];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });

  it("handles results that need sorting", () => {
    const results = [
      { lane: 3, place: 3 },
      { lane: 1, place: 1 },
      { lane: 2, place: 2 },
    ];

    const expected = [
      { lane: 1, place: 1 },
      { lane: 2, place: 2 },
      { lane: 3, place: 3 },
    ];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });

  it("correctly handles a single participant", () => {
    const results = [{ lane: 1, place: 1 }];

    const expected = [{ lane: 1, place: 1 }];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });

  it("returns empty array if no results are provided", () => {
    const results = [];

    const expected = [];

    expect(assignParticipantPlaces(results)).toEqual(expected);
  });
});
