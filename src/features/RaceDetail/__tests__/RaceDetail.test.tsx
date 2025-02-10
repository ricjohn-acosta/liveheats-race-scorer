import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RaceDetail } from "@/features/RaceDetail/RaceDetail";
import { useRaceDetail } from "@/features/RaceDetail/useRaceDetail";
import { getFormattedDate } from "@/lib/utils";

jest.mock("lucide-react", () => ({
  ChevronUp: () => "MockedIcon",
}));

jest.mock("@/features/RaceDetail/useRaceDetail", () => ({
  useRaceDetail: jest.fn(),
}));

jest.mock(
  "@/features/RaceDetail/Components/RaceAthletesTable/RaceAthletesTable",
  () => ({
    RaceAthletesTable: () => <div>Mocked Child Component</div>,
  }),
);

describe("RaceCard", () => {
  beforeEach(() => {
    useRaceDetail.mockReturnValue({
      data: {
        race: {
          raceId: "TEST123",
          raceName: "Usain Bolt vs Barry Allen",
          raceParticipants: [
            { lane: 1, participantName: "Usain Bolt", place: 0 },
            { lane: 2, participantName: "Barry Allen", place: 0 },
          ],
          status: "live",
          createdAt: new Date().toDateString(),
        },
      },
    });
  });

  it("renders the correct race name", () => {
    render(<RaceDetail raceId={"test"} />);
    expect(screen.getByText("Usain Bolt vs Barry Allen")).toBeInTheDocument();
  });

  it("renders a correct status", () => {
    render(<RaceDetail raceId={"test"} />);
    expect(screen.getByText("live")).toBeInTheDocument();
  });

  it("renders the correct formatted date", () => {
    render(<RaceDetail raceId={"test"} />);
    const currentFormattedDate = getFormattedDate(new Date().toDateString());
    expect(screen.getByText(currentFormattedDate)).toBeInTheDocument();
  });
});
