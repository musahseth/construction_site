import React from "react";
import { projects } from "../../utils/projects";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
// import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-foreground bg-projectBg bg-center bg-cover bg-no-repeat p-4">
      <div className="container mx-auto py-20">
        <h4 className="text-primary-content text-center text-4xl uppercase font-bold mb-4 md:mb-8">
          {" "}
          FEATURED PROJECTS
        </h4>
        <div className="container mx-auto grid place-content-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-20 p-4 lg:gap-16">
          {projects
            .filter((project) => project?.featured === true)
            .slice(0, 3)
            .map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
        </div>
        <section className="text-center mt-4 ">
          <p className="text-copy mb-4">Explore more about our Projects</p>
          <Button variant="ghost"size="lg" as={Link} href="/projects">
            All Projects
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Projects;
