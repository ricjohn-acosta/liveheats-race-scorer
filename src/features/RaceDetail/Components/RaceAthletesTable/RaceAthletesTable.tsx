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
import { useRaceAthletesTable } from "@/features/RaceDetail/Components/RaceAthletesTable/useRaceAthletesTable";
import { Button } from "@/components/ui/button";

interface RaceAthletesTableProps {
  race: Race;
}

export const RaceAthletesTable: FC<RaceAthletesTableProps> = ({ race }) => {
  const {
    data: { results },
    operations: { handlePlaceSelect },
  } = useRaceAthletesTable();

  return (
    <>
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
                <TableCell
                  className={"font-archivo text-2xl font-semibold pl-3"}
                >
                  {participant.lane}
                </TableCell>
                <TableCell>{participant.participantName}</TableCell>
                <TableCell className={"w-1/3"}>
                  <Select
                    onValueChange={(value) =>
                      handlePlaceSelect(participant.lane, Number(value))
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {race.raceParticipants.map((_, index) => {
                        const place = index + 1;
                        return (
                          <SelectItem key={index} value={place.toString()}>
                            {place}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className={"w-full flex justify-end"}>
        {race.status === "live" && (
          <Button
            disabled={results.length !== race.raceParticipants.length}
            className={
              "mt-2 hover:bg-green-400 bg-green-500 font-bold font-archivo"
            }
          >
            Finish race!
          </Button>
        )}
      </div>
    </>
  );
};
