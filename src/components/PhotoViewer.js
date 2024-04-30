"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/react";

const PhotoViewer = ({ project }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const imgList = project.img.src;

  return (
    <main className="">
      <section className="w-full">
        <Image
          className="object-cover aspect-square w-full hover:cursor-pointer"
          src={imgList[imgIndex]}
          alt={`imageview ${imgIndex}  of ${project.title} Nyande Constructions company`}
        />
      </section>

      <section className="w-full flex justify-around py-4 gap-4 overflow-x-scroll">
        {imgList.map((img, index) => (
          <Image
            src={img}
            alt={`image ${project.title} Nyande Constructions company`}
            key={index}
            onClick={() => setImgIndex(index)}
            className={`object-cover aspect-square lg:size-40 size-28 hover:cursor-pointer ${
              imgIndex === index ? "border-5 border-primary" : ""
            }`}
          />
        ))}
      </section>
    </main>
  );
};

export default PhotoViewer;
