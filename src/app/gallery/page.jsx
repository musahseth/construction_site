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
          <h3 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            Gallery
          </h3>
        </div>
      </div>
      <div className="container mx-auto gap-4 md:gap-8 lg:gap-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 p-4">
        {projects.map((proj, i) => (
          <>
            {proj.img.src.map((url, i) => (
              <Card key={i}>
                <Image
                  removeWrapper
                  isZoomed
                  className="z-0 w-full h-full object-cover aspect-square"
                  src={url}
                  alt={proj?.title?.replace(/-/g, " ")}
                />
                <CardFooter className="absolute z-10 bottom-0 bg-black/50">
                  <p className="font-semibold md:text-xl">
                    {proj?.title?.replace(/-/g, " ")}
                  </p>
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
