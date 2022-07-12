import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { load } from "cheerio";

type Data = {
  upvotes: number;
};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { data } = await axios.get(
      "https://www.producthunt.com/products/capybara-api"
    );
    const $ = load(data);
    const upvotes = Number(
      $("div")
        .filter(function () {
          return $(this).text().trim() === "upvotes";
        })
        .parent()
        .find("div")
        .first()
        .text()
    );
    res.setHeader("Cache-Control", "max-age=0, s-maxage=600");
    res.status(200).json({ upvotes });
  } catch ({ message }) {
    console.log(message);
    res.status(200).json({ upvotes: 8 });
  }
};

export default handler;
