import React from "react";
import Circle from "./Circle";
import { AiOutlineSearch } from "react-icons/ai";

const SkillSection = () => {
  return (
    <div
      id="skills"
      className="hidden h-[calc(100vh-80px)] items-center justify-center relative bg-g w-full md:grid md:grid-cols-2 md:gap-20 p-10">
      <div className="space-y-5">
        <h1>
          Vollständig kodierte UI-Tools zur Erstellung von Web- und
          Mobilanwendungen
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          consectetur possimus exercitationem suscipit quam nihil labore maxime,
          cupiditate quo minus quod quaerat. Neque cupiditate eius esse
          repellendus, asperiores odio ullam unde. Temporibus ipsam ex
          architecto, quaerat odit enim quas voluptatum explicabo, delectus, in
          eius labore harum. A id maxime autem.
        </p>
      </div>

      <Circle />
    </div>
  );
};

export default SkillSection;
