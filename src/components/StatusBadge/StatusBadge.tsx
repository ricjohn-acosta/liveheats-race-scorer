import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  className?: string;
  children?: string;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ className, children }) => {
  return (
    <Badge
      className={cn(
        "rounded-[4px] uppercase",
        children === "completed" &&
          "bg-[#B3EBFF] hover:bg-[#B3EBFF] text-[#003EB3]",
        className,
      )}
    >
      {children}
    </Badge>
  );
};
