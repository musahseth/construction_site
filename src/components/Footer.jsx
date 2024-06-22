import React from "react";
import { Link } from "@nextui-org/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneIncoming } from "react-icons/bi";

const Footer = () => {
  const options = [
    {
      icon: <BiPhoneIncoming className="text-primary m-2" size={25} />,
      title: "MOBILE PHONE",
      contact: "+233 24 382 9407",
    },
    {
      icon: <AiOutlineMail className="text-primary m-2" size={25} />,
      title: "E-MAIL",
      contact: "osmancash@gmail.com",
    },
    {
      icon: <HiOutlineLocationMarker className="text-primary m-2" size={25} />,
      title: "ADDRESS",
      contact: "Madina",
    },
  ];
  return (
    <footer className="bg-gray-700 pt-12 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify- between items- start p-4">
        <div className="flex-1">
          {" "}
          <Link
            href={"/"}
            className="text -primary-content font-bold text-4xl p-2 capitalize"
          >
            Nyande
          </Link>
          <p>Nyande Construction Conpany</p>
        </div>
        <div className="flex-1">
          <h1 className="text -primary-content text-xl uppercase font-bold mb-4 md:mb-8">
            {" "}
            About Us
          </h1>
          <div className="text- copy text-lg">
            <p className="mb-4">
              Nyande Construction Co began its journey as a general building
              contractor in 2014.{" "}
              <Link href="/about" className="hover:underline">
                {" "}
                Learn More
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text- primary-content text-xl uppercase font-bold mb-4 md:mb-8">
            {" "}
            Contact Us
          </h1>
          <div className="flex flex-col">
            {options.map((opt, i) => (
              <div key={i} className="flex gap-2 rounded-xl p-1">
                {opt.icon}
                <div className="p-1">
                  <p> {opt.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="w-full text-center p-2 bg-black/50">
        Build by :{" "}
        <a
          href="https://mansir.vercel.app/"
          target="_blank"
          className="underline"
        >
          Mansir
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
