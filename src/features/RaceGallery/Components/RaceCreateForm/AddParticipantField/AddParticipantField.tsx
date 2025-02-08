import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { ControlledInput } from "@/components/Input/ControlledInput";
import { FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AddParticipantFieldProps {
  form: UseFormReturn;
}

export const AddParticipantField: FC<AddParticipantFieldProps> = ({ form }) => {
  return (
    <div className={"flex flex-row my-2 items-center"}>
      <FormLabel className={"w-20 mr-4"}>Lane #1</FormLabel>
      <div className={"w-full"}>
        <ControlledInput
          control={form.control}
          name={"raceName"}
          placeholder={"Enter participant name"}
        />
      </div>

      <div className={"ml-4"}>
        <Button variant={"destructive"}>
          <X />
        </Button>
      </div>
    </div>
  );
};
