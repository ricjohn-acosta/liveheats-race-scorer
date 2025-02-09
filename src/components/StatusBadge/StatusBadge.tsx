import { FC, ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  className?: string;
  children?: ReactNode;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ className, children }) => {
  return (
    <Badge className={cn("rounded-[4px] uppercase", className)}>
      {children}
    </Badge>
  );
};
