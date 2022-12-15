import { connect } from "../../utils/db";
import { Snippet } from "../../models/snippet";
import randomstring from "randomstring";

export default async (req, res) => {
  await connect();
  if (req.method === "POST") {
    const slug = randomstring.generate({
      length: 12,
      charset: "alphabetic",
    });
    const snippet = await Snippet.create({
      snippet: req.body.snippet,
      slug: slug,
    });
    res.status(200).json(snippet);
  } else {
    throw new Error("http method not supported on this endpoint");
  }
};
