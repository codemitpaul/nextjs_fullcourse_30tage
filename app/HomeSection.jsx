import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import Circle from "./Circle";

export const projects = [
  {
    slug: "amtcheck",
    name: "Amtcheck",
    desc: "Et irure tempor ut sit.",
    image: "/images/amtcheck.png",
  },
  {
    slug: "fithealthness",
    name: "Fithealthness",
    desc: "Et irure tempor ut sit.",
    image: "/images/fithealthness.png",
  },
];

export const resume = [
  {
    year: 2017,
    text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officia perferendis facilis quas. Exercitationem delectus itaque odit et odio porro sint cupiditate provident animi, tenetur dolores a perspiciatis iusto optio ducimus  nostrum veniam est nihil saepe nisi architecto magni?",
  },
  {
    year: 2018,
    text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officia perferendis facilis quas. Exercitationem delectus itaque odit et odio porro sint cupiditate provident animi, tenetur dolores a perspiciatis iusto optio ducimus  nostrum veniam est nihil saepe nisi architecto magni?",
  },
  {
    year: 2019,
    text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officia perferendis facilis quas. Exercitationem delectus itaque odit et odio porro sint cupiditate provident animi, tenetur dolores a perspiciatis iusto optio ducimus  nostrum veniam est nihil saepe nisi architecto magni?",
  },
];

const HomeSection = () => {
  return (
    <div className="h-screen w-full bg-g grid grid-cols-2 grid-rows-2">
      <div className="col-span-1 row-span-1 h-full w-full border-b border-l py-10  border-t text-center space-y-2 border-blue-500 flex items-center justify-between flex-col p-5">
        <h1>Code mit Paul 👋</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          commodi animi voluptatibus vitae repellendus repudiandae magni.
          Aperiam illo aut deleniti?
        </p>
        <button className="px-3 py-2 rounded-xl border">Zum Profil</button>
      </div>
      <div className="col-span-1 row-span-1 h-full w-full border text-center space-y-2 border-violet-500 flex items-center justify-between py-10 flex-col p-5">
        <h1>Projekte 💻</h1>

        <div className="w-full overflow-x-scroll flex items-center space-x-3 scrollbar-hide">
          {projects.map((project) => (
            <div className="flex-shrink-0 w-full  relative" key={project.image}>
              <div className="h-60 w-full relative z-10 group">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-contain group-hover:opacity-50"
                />
                <Link
                  href={`/projekte/${project.slug}`}
                  className="opacity-0 group-hover:opacity-100 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <AiOutlineEye className="h-5 w-5 cursor-pointer" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 row-span-1 h-full relative w-full border-l border-b  border-t text-center space-y-2 border-yellow-500 flex items-center justify-center p-5 flex-col">
        <h1 className="absolute hidden md:flex  rotate-90 -right-20 opacity-30 top-1/2">
          Fähigkeiten
        </h1>
        <div className="md:hidden flex flex-col space-y-3 z-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            porro dolore veritatis repellendus repudiandae saepe iusto, expedita
            quidem quod libero?
          </p>
        </div>
        <Circle />
      </div>
      <div className="col-span-1 py-10 p-5 row-span-1 h-full relative w-full border text-center space-y-2 border-green-500 flex items-center justify-between flex-col">
        <h1>Lebenslauf 📖</h1>

        <div className="w-full overflow-x-scroll flex items-center space-x-3 scrollbar-hide">
          {resume.map((res) => (
            <div className="flex-shrink-0 w-full  relative" key={res.year}>
              <h3 className="text-xl font-bold">{res.year}</h3>
              <p className="text-sm italic">{res.text}</p>
            </div>
          ))}
        </div>
        <button className="px-3 py-2 rounded-xl border">Zum Lebenslauf</button>
      </div>
    </div>
  );
};

export default HomeSection;
