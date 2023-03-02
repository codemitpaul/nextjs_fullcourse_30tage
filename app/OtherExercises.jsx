"use client";

import Image from "next/image";
import { useState } from "react";

const OtherExercises = ({ otherExercises }) => {
  const [exercises, setExercises] = useState(otherExercises);
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  const handleBodyPartChange = (e) => {
    setSelectedBodyPart(e.target.value);
  };

  const filteredExercises = otherExercises.filter((exercise) => {
    if (selectedBodyPart === "all") {
      return exercise;
    } else {
      return exercise.bodyPart === selectedBodyPart;
    }
  });

  return (
    <>
      <div className="col-span-full">
        <h1 className="text-3xl">Filter Body Parts</h1>
        <label htmlFor="bodyPartSelect">Select body part:</label>
        <select
          id="bodyPartSelect"
          value={selectedBodyPart}
          onChange={handleBodyPartChange}>
          <option value="all">All</option>
          <option value="waist">Waist</option>
          <option value="upper legs">Upper Legs</option>
          <option value="back">Back</option>
        </select>
      </div>
      {filteredExercises.map((exercise) => (
        <div key={exercise.id} className="mx-auto space-y-2">
          {exercise.name}
          <Image
            src={exercise.gifUrl}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default OtherExercises;
