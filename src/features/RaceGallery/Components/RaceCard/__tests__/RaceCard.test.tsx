import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RaceCard } from "@/features/RaceGallery/Components/RaceCard/RaceCard";

jest.mock("lucide-react", () => ({
  UserRound: () => "MockedIcon",
}));

describe("RaceCard", () => {
  it("renders a race name", () => {
    render(
      <RaceCard
        raceData={{
          raceId: "TEST123",
          raceName: "Usain Bolt vs Barry Allen",
          raceParticipants: [
            { lane: 1, participantName: "Usain Bolt", place: 0 },
            { lane: 2, participantName: "Barry Allen", place: 0 },
          ],
          status: "live",
          createdAt: new Date().toDateString(),
        }}
      />,
    );

    expect(screen.getByText("Usain Bolt vs Barry Allen")).toBeInTheDocument();
  });
});
