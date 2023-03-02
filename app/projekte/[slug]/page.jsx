import { projects } from "@/app/HomeSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetailPage = ({ params }) => {
  const project = projects.filter((project) => project.slug === params.slug)[0];
  console.log(project);
  return (
    <div className="h-screen bg-g grid grid-cols-2 gap-10 items-center justify-center p-10">
      <Link className="fixed top-5 left-5" href={`/`}>
        Zurück
      </Link>
      <div className="h-full w-full relative">
        <Image src={project.image} alt="" fill className="object-contain" />
      </div>
      <div>
        <h1>{project.name}</h1>
        <p>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
