import { Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary gray-700 pt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items- p-4">
        <div className="flex-1">
          {" "}
          <Link
            href={"/"}
            className="text-primary-content font-bold text-4xl p-2 capitalize"
          >
            Nyande
          </Link>
        </div>
        <div className="flex-1">
          <h1 className="text-primary-content text-xl uppercase font-bold mb-4 md:mb-8">
            {" "}
            About Us
          </h1>
          <div className="text-copy text-lg">
            <p className="mb-4">
              {
                "Nyande Construction Co began its journey as a general building contractor in 2014. Since then, we've grown steadily, managing diverse projects in Ghana and beyond."
              }
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-primary-content text-xl uppercase font-bold mb-4 md:mb-8">
            {" "}
            Contact Us
          </h1>
        </div>
      </div>
      <div className="w-full text-center p-2 bg-black/40">
        {" "}
        build by{" "}
        <a href="https://mansir.vercel.app/" target="_blank" className="underline text-blue-700">
          mansir
        </a>
      </div>
    </footer>
  );
};

export default Footer;
