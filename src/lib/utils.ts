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

export const getOrdinalSuffix = (n: number | null) => {
  if (!n) return;

  if (n >= 11 && n <= 13) return `${n}th`;

  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = n % 10;

  return `${n}${suffixes[lastDigit] || "th"}`;
};
