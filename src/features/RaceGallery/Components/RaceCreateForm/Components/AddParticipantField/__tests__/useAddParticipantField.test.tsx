import { renderHook } from "@testing-library/react";
import { useAddParticipantField } from "../useAddParticipantField";

describe("useAddParticipantField", () => {
  let appendMock: jest.Mock;
  let removeMock: jest.Mock;

  beforeEach(() => {
    appendMock = jest.fn();
    removeMock = jest.fn();
  });

  it("should call append when Enter is pressed with a non-empty input", () => {
    const { result } = renderHook(() =>
      useAddParticipantField(appendMock, removeMock),
    );

    const event = {
      key: "Enter",
      preventDefault: jest.fn(),
      currentTarget: { value: "John Doe" },
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    result.current.operations.handleAddParticipant(event, 1);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(appendMock).toHaveBeenCalledWith({
      lane: 1,
      participantName: "",
      place: 0,
    });
  });

  it("should not call append when Enter is pressed with an empty input", () => {
    const { result } = renderHook(() =>
      useAddParticipantField(appendMock, removeMock),
    );

    const event = {
      key: "Enter",
      preventDefault: jest.fn(),
      currentTarget: { value: "  " }, // Empty input after trimming
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    result.current.operations.handleAddParticipant(event, 1);

    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(appendMock).not.toHaveBeenCalled();
  });

  it("should call remove when remove button is clicked, except for index 0", () => {
    const { result } = renderHook(() =>
      useAddParticipantField(appendMock, removeMock),
    );

    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as React.MouseEvent<HTMLButtonElement>;

    result.current.operations.handleRemoveParticipant(event, 2);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(removeMock).toHaveBeenCalledWith(2);
  });

  it("should not call remove when trying to remove the first participant (index 0)", () => {
    const { result } = renderHook(() =>
      useAddParticipantField(appendMock, removeMock),
    );

    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as React.MouseEvent<HTMLButtonElement>;

    result.current.operations.handleRemoveParticipant(event, 0);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(removeMock).not.toHaveBeenCalled();
  });
});
