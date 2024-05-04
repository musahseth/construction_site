import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { projects } from "../../../utils/projects";

export const metadata = {
  title: "Gallery - Nyande construction company ",
  description: "explorer our work and services gallery",
};


const Gallery = () => {
  return (
    <div className="bg-background">
      <div className="bg-aboutBg h-[40vh] w-full bg-cover bg-center bg-fixed ">
        <div className="flex flex-col justify-center items-center h-full bg-black/50">
          <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            Gallery
          </h1>
        </div>
      </div>
      <div className="container mx-auto gap-4 md:gap-8 lg:gap-12 grid grid-cols-4 py-8">
        {projects.map((proj, i) => (
          <>
            {proj.img.src.map((imageUrl, imageIndex) => (
              <Card className="" key={i}>
                <Image
                  removeWrapper
                  isZoomed
                  className="z-0 w-full h-full object-cover aspect-square"
                  key={imageIndex}
                  src={imageUrl}
                  alt={proj.title}
                />
                <CardFooter className="absolute z-10 bottom-1">
                  <h4 className="font-bold text-xl">
                    {proj?.title?.replace(/-/g, " ")}
                  </h4>
                </CardFooter>
              </Card>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
