import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const Services = () => {
  const Serviceslist = [
    {
      title: `Construction`,
      icon: <MdConstruction className="size-16" />,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Remodeling`,
      icon: <BiBuildingHouse className="size-16" />,
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
    {
      title: `Construction`,
      icon: <MdConstruction className="size-16" />,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Remodeling`,
      icon: <BiBuildingHouse className="size-16" />,
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
  return (
    <div>
      <div className="bg-serviceBg h-[40vh] w-full bg-cover bg-center bg-fixed ">
        <div className="flex flex-col justify-center items-center h-full bg-black/50">
          <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            services
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid place-content-center grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 pt-20 p-4">
        {Serviceslist.map((service, i) => (
          <div
            key={i}
            className="bg- background flex flex-col justify-center items-center gap-4 border-4 border-border "
          >
            <div className="-mt-12 flex  items-center justify-center rounded-lg bg-white text-primary p-4">
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
