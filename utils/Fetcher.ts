import axios from "axios";
import { Fetcher } from "swr";

const _getData = async (arg: string) => {
  const data = await axios.get(arg).then((res) => res.data);
  return data.upvotes.toString();
};

const fetcher: Fetcher<string> = (arg: string) => _getData(arg);

export default fetcher;
