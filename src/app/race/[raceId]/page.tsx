import { RaceDetail } from "@/features/RaceDetail/RaceDetail";
import { FC } from "react";

interface RaceDetailPageProps {
  params: { raceId: string };
}

const RaceDetailPage: FC<RaceDetailPageProps> = async ({ params }) => {
  return <RaceDetail raceId={params.raceId} />;
};

export default RaceDetailPage;
