import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RaceCard } from "@/features/RaceGallery/Components/RaceCard/RaceCard";

jest.mock("lucide-react", () => ({
  UserRound: () => "MockedIcon",
}));

describe("RaceCard", () => {
  const props = {
    raceId: "TEST123",
    raceName: "Usain Bolt vs Barry Allen",
    raceParticipants: [
      { lane: 1, participantName: "Usain Bolt", place: 0 },
      { lane: 2, participantName: "Barry Allen", place: 0 },
    ],
    status: "live",
    createdAt: new Date().toDateString(),
  };

  it("renders a race name", () => {
    render(<RaceCard raceData={props} />);
    expect(screen.getByText("Usain Bolt vs Barry Allen")).toBeInTheDocument();
  });

  it("renders number of participants correctly", () => {
    render(<RaceCard raceData={props} />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("renders race status correctly", () => {
    render(<RaceCard raceData={props} />);
    expect(screen.getByText("live")).toBeInTheDocument();
  });

  it("renders a formatted date correctly", () => {
    render(<RaceCard raceData={props} />);
    const currentFormattedMonth = new Date()
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    const currentDate = new Date().getDate().toString();

    expect(screen.getByText(currentFormattedMonth)).toBeInTheDocument();
    expect(screen.getByText(currentDate)).toBeInTheDocument();
  });
});
