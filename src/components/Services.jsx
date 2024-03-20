import { BiBuildingHouse } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { Image } from "@nextui-org/react";
import React from "react";

const Serviceslist = [
  {
    title: `Construction`,
    icon: <MdConstruction className="size-16" />,
    description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
  },
  {
    title: `Remodeling`,
    icon: <BiBuildingHouse className="size-16"/>,
    description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
  },
  {
    title: `Interior Design`,
    icon: <FaRulerCombined className="size-16" />,
    description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
  },
  {
    title: `Interior Design`,
    icon: <FaRulerCombined className="size-16" />,
    description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-20  p-4 ">
      <h1 className="text-primary-content text-center text-4xl uppercase font-bold mb-4 md:mb-8">
        Services
      </h1>

      <div className="grid place-content-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        {Serviceslist.map((service, i) => (
          <div
            key={i}
            className="bg- background flex flex-col justify-center items-center gap-4 border-4 border-border shadow-x"
          >
            <div className="-mt-10 size- 20 flex  items-center justify-center rounded-lg bg-white text-primary  md:rounded-xl p-4">
              {service.icon}
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-primary-content text-lg font-bold md:text-xl cursor-pointer hover:text-primary">
                {service.title}
              </h3>
              <p className="mb-2 text-copy">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
