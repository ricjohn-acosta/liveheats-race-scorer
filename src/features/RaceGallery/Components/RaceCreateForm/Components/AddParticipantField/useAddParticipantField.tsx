import { KeyboardEvent, MouseEvent } from "react";

export const useAddParticipantField = (
  append,
  remove: (index: number | number[]) => void,
) => {
  const handleAddParticipant = (
    e: KeyboardEvent<HTMLInputElement>,
    lane: number,
  ) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      e.preventDefault();
      append({ lane, participantName: "" });
    }
  };

  const handleRemoveParticipant = (
    e: MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (index === 0) return;
    remove(index);
  };

  return {
    operations: {
      handleAddParticipant,
      handleRemoveParticipant,
    },
  };
};
