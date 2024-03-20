import { Button, Divider } from "@nextui-org/react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-heroBg h-[90vh] w-full bg-cover bg-center bg-fixed ">
      <div className="flex flex-col justify-center items-center h-full bg-black/50">
        <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
          {" "}
          SafeHome constructions
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
          <Button className="px-8 py-4" color="primary">
            Projects{" "}
          </Button>
          <Button className="px-8 py-4" color="primary" variant="ghost">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
