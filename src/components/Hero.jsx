import { Divider } from "@nextui-org/react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-heroBg h-[90vh] w-full bg-cover bg-center bg-fixed ">
      <div className="flex justify-center items-center h-full bg-black/50">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-white">
          {" "}
          SafeHome constructions
          <Divider className="my-4" />
          <div className="flex h-5 items-center justify-center space-x-4 text-small">
            <div>Blog</div>
            <Divider orientation="vertical" />
            <div>Docs</div>
            <Divider orientation="vertical" />
            <div>Source</div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
