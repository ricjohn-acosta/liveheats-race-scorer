import { RaceDetail } from "@/features/RaceDetail/RaceDetail";
import { FC } from "react";

interface RaceDetailPageProps {
  params: { raceId: string };
}

const RaceDetailPage: FC<RaceDetailPageProps> = async ({ params }) => {
  const { raceId } = await params;
  return <RaceDetail raceId={raceId} />;
};

export default RaceDetailPage;
