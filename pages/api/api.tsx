import dbConnect from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      res.status(200).send("HELLO");
      break;
    case "POST":
      res.status(200).send("HELLO BUT POST");
      break;
    case "DELETE":
      res.status(200).send("HELLO BUT DELETE");
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
