import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Link
      className="w-full relative"
      href={`/projects/${project?.title}/#single-project`}
    >
      <Image
        isZoomed
        src={project?.img.src[0]}
        alt={
          project?.title?.replace(/-/g, " ") +
          " image Nyande Constructions company "
        }
        title={""}
        className="object-cover aspect-square"
      />
      <div className="absolute aspect-square z-10 top-0 left-0 bg-black/20 opacity-0 transition duration-400 hover:opacity-100 hover:duration-600 p-4">
        <div className=" flex flex-col justify-center items-center bg-black/30 border-2 border-white p-8 overflow-hidden text-white text-center">
          <h4 className="uppercase font-bold text-xl mb-4">
            {project?.title?.replace(/-/g, " ")}
          </h4>
          <p>{project?.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
