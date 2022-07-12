import axios from "axios";
import { Fetcher } from "swr";

const fetcher: Fetcher<string> = async (url: string) => {
  const data = await axios.get(url).then((res) => res.data);
  return data.upvotes.toString();
};

export default fetcher;
