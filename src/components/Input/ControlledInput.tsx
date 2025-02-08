import React, { FC, InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ControlledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control;
  name: string;
  className?: string;
}

export const ControlledInput: FC<ControlledInputProps> = ({
  control,
  name,
  className,
  ...rest
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input className={className} {...rest} {...field} />
          </FormControl>
          {<FormMessage />}
        </FormItem>
      )}
    />
  );
};
