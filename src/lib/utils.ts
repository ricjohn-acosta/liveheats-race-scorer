import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getMonthAbbreviation = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", { month: "short" });
  return formatter.format(date);
};

export const getFormattedDate = (dateString: string | undefined) => {
  if (!dateString) return;

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};
