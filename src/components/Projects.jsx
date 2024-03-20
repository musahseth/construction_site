import React from "react";
import { projects } from "../../utils/projects";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
// import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-foreground bg-projectBg bg-center bg-cover bg-no-repeat p-4">
      <div className="container mx-auto py-20">
        <h1 className="text-primary-content text-center text-4xl uppercase font-bold mb-4 md:mb-8">
          {" "}
          FEATURED PROJECTS
        </h1>
        <div className="container mx-auto grid place-content-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 py-20 p-4 lg:gap-16">
          {projects
            .filter((project) => project?.featured === true)
            .map((project, i) => (
              // <div key={i}>{i}</div>
              //     <ProjCard proj={project.node} />
              <div
                key={i}
                className="relative bg-secondary overflow-hidden h-80 w-full"
              >
                <Link href={`/`}>
                  <img
                    src={project.img.src[0]}
                    alt={""}
                    title={""}
                    className="object-cover classNames  w-full h-full"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-black/20 opacity-0 transition duration-400 hover:opacity-100 hover:duration-600 p-4">
                    <div className="proj-content flex flex-col justify-center items-center bg-black/30 border-2 border-white p-8 overflow-hidden text-white text-center">
                      <h4 className="uppercase font-bold text-xl mb-4">
                        {project.title}
                      </h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <section className="text-center mt-4 ">
          <p className="text-copy mb-4">Explore more about our Projects</p>
          <Button variant="ghost">All Projects</Button>
        </section>
      </div>
    </div>
  );
};

export default Projects;
