import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section
      className="bg-parallaxBg bg-fixed bg-cover bg-center bg-no-repeat "
      id="quote"
    >
      <div className="bg-black/60">
        <div className="container mx-auto h-60 flex flex-col gap-8 md:flex-row md:justify-between md:items-center p-4">
          <h3 className="font-bold text-2xl text-white">
            Looking for a high quality constructor for your project ?
          </h3>
          <Button as={Link} href="/contact" color="primary" size="lg" variant="bordered" className="uppercase">
            contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
