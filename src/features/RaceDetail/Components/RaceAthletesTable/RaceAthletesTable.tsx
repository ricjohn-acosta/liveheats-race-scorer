import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import { Race } from "@/types/race";

interface RaceAthletesTableProps {
  race: Race;
}

export const RaceAthletesTable: FC<RaceAthletesTableProps> = ({ race }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Lane</TableHead>
          <TableHead>Athlete</TableHead>
          <TableHead>Place</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {race.raceParticipants.map((participant, i) => {
          return (
            <TableRow key={i}>
              <TableCell className={"font-archivo text-2xl font-semibold pl-3"}>
                {participant.lane}
              </TableCell>
              <TableCell>{participant.participantName}</TableCell>
              <TableCell className={"w-1/3"}>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
