import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-heroBg  w-full bg-cover bg-center bg-fixed ">
      <div className="min-h-[70vh] flex flex-col justify-center items-center h-full bg-black/60">
        <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
          {" "}
          Nyande construction company
        </h1>
        <Divider className="my-4 bg-primary max-w-sm h-1" />
        <div className="flex h-5 items-center justify-center space-x-4 text-small text-white my-2">
          <div>Listen better </div>
          <Divider orientation="vertical" className="bg-white" />
          <div>Plan better </div>
          <Divider orientation="vertical" className="bg-white" />
          <div>Build better.</div>
        </div>
        <div className="w-full flex justify-center items-center gap-4 p-4">
          <Button
            as={Link}
            href="/projects"
            className="px-8 py-4"
            color="primary"
          >
            Projects{" "}
          </Button>
          <Button
            as={Link}
            href="/contact"
            className="px-8 py-4"
            color="primary"
            variant="ghost"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
