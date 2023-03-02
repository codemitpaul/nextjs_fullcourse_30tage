import axios from "axios";
import Image from "next/image";
import OtherExercises from "./OtherExercises";

export const revalidate = 1000;

export default async function Home() {
  const { data } = await axios.get(
    "https://exercisedb.p.rapidapi.com/exercises",
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    }
  );

  const twentyExercises = data.slice(0, 20);
  const otherExercises = data.slice(20);

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">Fitness Übungen</h1>
      <div className="flex flex-col space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-10">
        {twentyExercises?.map((exercise) => (
          <div key={exercise.id} className="space-y-2 mx-auto">
            <h1>{exercise.name}</h1>

            <Image
              src={exercise.gifUrl}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        ))}
        <OtherExercises otherExercises={otherExercises} />
      </div>
    </main>
  );
}
