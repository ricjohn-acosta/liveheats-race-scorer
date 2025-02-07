import { useState } from "react";

export const useRaceCreateCard = () => {
  const [openCreateRaceModal, setOpenCreateRaceModal] = useState(false);

  const handleOpenCreateRaceModal = () => {
    setOpenCreateRaceModal((prev) => !prev);
  };

  return {
    openCreateRaceModal,
    handleOpenCreateRaceModal,
  };
};
