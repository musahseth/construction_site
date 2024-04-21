import React from "react";

import { Serviceslist } from "../../../utils/services";

const Services = () => {
  return (
    <div>
      <div className="bg-serviceBg h-[40vh] w-full bg-cover bg-center bg-fixed ">
        <div className="flex flex-col justify-center items-center h-full bg-black/50">
          <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            services
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid place-content-center grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 pt-20 p-4">
        {Serviceslist.map((service, i) => (
          <div
            key={i}
            className="bg- background flex flex-col justify-between items-center gap-4 border-4 border-border "
          >
            <div className="-mt-16 flex  items-center justify-center rounded-lg bg-white text-primary p-4">
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
