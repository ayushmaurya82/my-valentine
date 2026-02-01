import { useRouter } from "next/router";
import ValentineCard from "@/components/ValentineCard";
import { DEFAULT_NAME } from "@/components/ValentineCard/constants";

const HomePage = () => {
  const router = useRouter();
  const name = (router.query.name as string) || DEFAULT_NAME;
  return <ValentineCard name={name} />;
};

export default HomePage;
