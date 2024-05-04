import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneIncoming } from "react-icons/bi";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact page - Nyande construction company ",
  description: "way to contact the company",
};


const ContactUs = () => {
  const options = [
    {
      icon: <BiPhoneIncoming className="text-primary m-4" size={100} />,
      title: "MOBILE PHONE",
      contact: "+233 24 382 9407",
    },
    {
      icon: <AiOutlineMail className="text-primary m-4" size={100} />,
      title: "E-MAIL",
      contact: "osmancash@gmail.com",
    },
    {
      icon: <HiOutlineLocationMarker className="text-primary m-4" size={100} />,
      title: "ADDRESS",
      contact: "Abokobi",
    },
  ];
  return (
    <div>
      <div className="bg-contactBg h-[40vh] w-full bg-cover bg-center bg-fixed ">
        <div className="flex flex-col justify-center items-center h-full bg-black/50">
          <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            contact us
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-12 md:flex-row py-8 p-4">
        <div className="flex flex-col gap-8">
          {options.map((opt, i) => (
            <div key={i} className="bg-background flex gap-4 rounded-xl p-4">
              {opt.icon}
              <div className="p-4">
              <h3 className="mb-2 text-primary-content text-lg font-bold md:text-xl cursor-pointer ">
                {opt.title}
              </h3>
              <p className="mb-2 text-copy"> {opt.contact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
