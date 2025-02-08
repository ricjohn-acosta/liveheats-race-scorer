import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useAddParticipantField } from "@/features/RaceGallery/Components/RaceCreateForm/Components/AddParticipantField/useAddParticipantField";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AddParticipantFieldProps {
  form: UseFormReturn;
  append: any;
  remove: (index: number | number[]) => void;
  index: number;
  fieldKey: string;
}

export const AddParticipantField: FC<AddParticipantFieldProps> = ({
  form,
  append,
  remove,
  index,
  fieldKey,
}) => {
  const {
    operations: { handleAddParticipant, handleRemoveParticipant },
  } = useAddParticipantField(append, remove);

  return (
    <div key={fieldKey} className={"flex flex-row my-2 items-center"}>
      <FormLabel className={"w-24 mr-4"}>Lane #{index + 1}</FormLabel>
      <div className={"w-full"}>
        <Input
          className={cn(
            form.formState.errors.raceParticipants?.[index]?.participantName &&
              "border-destructive",
          )}
          {...form.register(
            `raceParticipants.${index}.participantName` as const,
          )}
          placeholder={`Participant ${index + 1}`}
          onKeyDown={(e) => handleAddParticipant(e, index + 2)}
        />
      </div>

      <div className={"ml-4"}>
        <Button
          disabled={index === 0}
          onClick={(e) => handleRemoveParticipant(e, index)}
          variant={"destructive"}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};
