"use client";

import React, { FC } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRaceCreateCard } from "./useRaceCreateCard";
import { Modal } from "@/components/Modal/Modal";
import { RaceCreateForm } from "@/features/RaceGallery/Components/RaceCreateForm/RaceCreateForm";
import { Race } from "@/types/race";

interface RaceCreateCardProps {
  setRaces: (races: Race[]) => void;
}

export const RaceCreateCard: FC<RaceCreateCardProps> = ({ setRaces }) => {
  const {
    data: { openCreateRaceModal },
    operations: { handleOpenCreateRaceModal },
  } = useRaceCreateCard();

  return (
    <>
      <Button
        onClick={handleOpenCreateRaceModal}
        className={
          "cursor-pointer w-full bg-white h-30 p-4 rounded-[16px] border-dashed border-2 border-gray-300 flex justify-center items-center text-muted-foreground " +
          "hover:bg-gradient-to-r from-red-500 to-orange-500 hover:border-none hover:text-white"
        }
      >
        <Plus className={"mr-1"} />
        <span className={"font-bold"}>Start a new race!</span>
      </Button>

      <Modal
        title={"Start a new race!"}
        open={openCreateRaceModal}
        onOpenChange={handleOpenCreateRaceModal}
      >
        <RaceCreateForm
          closeFormModal={() => handleOpenCreateRaceModal()}
          setRaces={setRaces}
        />
      </Modal>
    </>
  );
};
