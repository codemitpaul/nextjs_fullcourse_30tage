import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data } = await axios.get("https://randomuser.me/api/");
    res.status(200).json({ data: data });
  }
}
