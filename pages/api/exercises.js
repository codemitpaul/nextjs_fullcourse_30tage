import axios from "axios";

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
