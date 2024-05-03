"use client";
import React from "react";
import { projects } from "../../../utils/projects";
import Link from "next/link";
import Services from "@/components/Services";
import { Image } from "@nextui-org/react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [tag, setTag] = React.useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.category.includes(tag)
  );

  return (
    <>
      <div className="bg-foreground bg-projectBg bg-center bg-cover bg-no-repeat p-4">
        <div className="container mx-auto py-20">
          <h1 className="text-primary-content text-center text-4xl uppercase font-bold mb-4 md:mb-8">
            {" "}
            PROJECTS
          </h1>
          <div className=" flex flex-row justify-center items-center gap-2 py-6">
            {["All", "construction", "ongoing", "completed"].map((name, i) => (
              <ProjectTag
                key={i}
                onClick={handleTagChange}
                name={name}
                isSelected={tag === name}
              />
            ))}
          </div>
          <div className="container mx-auto grid place-content-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-20 p-4 lg:gap-16">
            {filteredProjects.slice().map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Services n={3} />
    </>
  );
};

export default Projects;

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? " border-primary"
    : " hover:border-gray-500 ";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 border-border py-1 px-2 md:px-4 md:py-2 cursor-pointer capitalize`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
