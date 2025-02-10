"use client";

import React, { FC } from "react";
import { FormLabel, Form } from "@/components/ui/form";
import { useRaceCreateForm } from "@/features/RaceGallery/Components/RaceCreateForm/useRaceCreateForm";
import { ControlledInput } from "@/components/Input/ControlledInput";
import { AddParticipantField } from "@/features/RaceGallery/Components/RaceCreateForm/Components/AddParticipantField/AddParticipantField";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";
import { Race } from "@/types/race";

interface RaceCreateFormProps {
  closeFormModal: () => void;
  setRaces: (races: Race[]) => void;
}

export const RaceCreateForm: FC<RaceCreateFormProps> = ({
  closeFormModal,
  setRaces,
}) => {
  const {
    data: { form, fields, createRaceDisabled },
    operations: { handleCreateRace, append, remove },
  } = useRaceCreateForm(closeFormModal, setRaces);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateRace)}>
        <FormLabel>Race name</FormLabel>
        <ControlledInput
          control={form.control}
          name={"raceName"}
          placeholder={"e.g: Highschool students vs Usain Bolt"}
        />

        <Separator className={"my-6"} />

        <div
          className={"flex flex-row items-center text-xs text-muted-foreground"}
        >
          <Info size={14} className={"mr-1"} />
          Press Enter to add a new participant!
        </div>
        {fields.map((field, i) => (
          <AddParticipantField
            form={form}
            append={append}
            remove={remove}
            key={field.id}
            index={i}
          />
        ))}

        <Button
          disabled={createRaceDisabled}
          className={"w-full mt-2 font-bold font-archivo"}
        >
          Start race!
        </Button>
      </form>
    </Form>
  );
};
