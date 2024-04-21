import React from "react";
import { Serviceslist } from "../../utils/services";

const Services = () => {
  return (
    <div className="container mx-auto py-20  p-4 ">
      <h1 className="text-primary-content text-center text-4xl uppercase font-bold mb-12">
        Services
      </h1>

      <div className="container mx-auto grid place-content-center grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 pt-20 p-4">
        {Serviceslist.slice(0, 6).map((service, i) => (
          <div
            key={i}
            className="bg- background flex flex-col justify-between items-center gap-4 border-4 border-border "
          >
            <div className="-mt-16 flex items-center justify-center rounded-lg bg-white text-primary capitalize text-2xl p-4">
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
