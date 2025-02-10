import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { useRaceCreateCard } from "../useRaceCreateCard";

describe("useRaceCreateCard hook", () => {
  it("should initialize with modal closed", () => {
    const { result } = renderHook(() => useRaceCreateCard());

    expect(result.current.data.openCreateRaceModal).toBe(false);
  });

  it("should toggle modal state when handleOpenCreateRaceModal is called", () => {
    const { result } = renderHook(() => useRaceCreateCard());

    act(() => {
      result.current.operations.handleOpenCreateRaceModal();
    });

    expect(result.current.data.openCreateRaceModal).toBe(true);

    act(() => {
      result.current.operations.handleOpenCreateRaceModal();
    });

    expect(result.current.data.openCreateRaceModal).toBe(false);
  });
});
