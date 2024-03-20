import { Image, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-background p-4">
      <div className="container mx-auto flex md:flex-row flex-col-reverse justify-center  py-20">
        <div className="flex-1 flex flex-col gap-8 justify-start items-start">
          <h1 className="text-primary-content text-4xl uppercase font-bold mb-4 md:mb-8">
            {" "}
            About Us
          </h1>
          <p className="text-copy text-lg">
            Filler text is dummy text which has no meaning however looks very
            similar to real text. Filler text is dummy text which has no meaning
            however looks very similar to real text. Filler text is dummy text
            which has no meaning however looks very similar to real text.
          </p>

          <div>
            <div className="flex items-center gap-4">
              <span className="bg-primary p-2 rounded-full"></span>
              <p className="text-primary-content hover:text-primary font-bold text-lg cursor-pointer">
                Professional Staff{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-primary p-2 rounded-full"></span>
              <p className="text-primary-content hover:text-primary font-bold text-lg cursor-pointer">
                Quality Materials
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-primary p-2 rounded-full"></span>
              <p className="text-primary-content hover:text-primary font-bold text-lg cursor-pointer">
                Regular Reporting
              </p>
            </div>
          </div>
          <Button as={Link} href="/about" className="px-8 py-4 text-copy" color="primary">
            Learn more
          </Button>
        </div>
        <div className="flex-1">
          <Image src="/aboutBg.jpg" alt="about us" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
