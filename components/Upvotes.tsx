import fetcher from "../utils/Fetcher";
import useSWR from "swr";

export const Upvotes = () => {
  const { data } = useSWR("/api/upvotes", fetcher, {
    refreshInterval: 60000,
  });
  return <>{data || "0"} </>;
};
