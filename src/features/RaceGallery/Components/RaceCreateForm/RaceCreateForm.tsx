"use client";

import React from "react";
import { FormLabel, Form } from "@/components/ui/form";
import { useRaceCreateForm } from "@/features/RaceGallery/Components/RaceCreateForm/useRaceCreateForm";
import { ControlledInput } from "@/components/Input/ControlledInput";
import { AddParticipantField } from "@/features/RaceGallery/Components/RaceCreateForm/AddParticipantField/AddParticipantField";
import { Button } from "@/components/ui/button";

export const RaceCreateForm = () => {
  const {
    data: { form },
  } = useRaceCreateForm();

  return (
    <>
      <Form {...form}>
        <form>
          <FormLabel>Race name</FormLabel>
          <ControlledInput
            control={form.control}
            name={"raceName"}
            placeholder={"Enter race name"}
          />

          <div className={"mt-4"}>
            <AddParticipantField form={form} />
          </div>

          <Button disabled className={"w-full mt-2"}>
            Confirm
          </Button>
        </form>
      </Form>
    </>
  );
};
