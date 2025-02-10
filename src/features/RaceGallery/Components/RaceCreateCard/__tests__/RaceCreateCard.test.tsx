import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { RaceCreateCard } from "@/features/RaceGallery/Components/RaceCreateCard/RaceCreateCard";
import { useRaceCreateCard } from "@/features/RaceGallery/Components/RaceCreateCard/useRaceCreateCard";

jest.mock("../useRaceCreateCard", () => ({
  useRaceCreateCard: jest.fn(),
}));

jest.mock("lucide-react", () => ({
  Plus: () => "MockedIcon",
}));

jest.mock("../../RaceCreateForm/useRaceCreateForm", () => ({
  useRaceCreateForm: jest.fn(),
}));

jest.mock("../../../../../hooks/useMediaQuery", () => ({
  useMediaQuery: jest.fn(),
}));

describe("RaceCreateCard", () => {
  it("renders the 'Start a new race!' button", () => {
    useRaceCreateCard.mockReturnValue({
      data: { openCreateRaceModal: false },
      operations: { handleOpenCreateRaceModal: jest.fn() },
    });

    render(<RaceCreateCard setRaces={jest.fn()} />);

    expect(
      screen.getByRole("button", { name: /Start a new race!/i }),
    ).toBeInTheDocument();
  });

  it("opens the modal when the 'Start a new race!' button is clicked", () => {
    const mockHandleOpen = jest.fn();

    useRaceCreateCard.mockReturnValue({
      data: { openCreateRaceModal: false },
      operations: { handleOpenCreateRaceModal: mockHandleOpen },
    });

    render(<RaceCreateCard setRaces={jest.fn()} />);

    const button = screen.getByRole("button", { name: /Start a new race!/i });
    fireEvent.click(button);

    expect(mockHandleOpen).toHaveBeenCalledTimes(1);
  });
});
