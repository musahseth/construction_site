import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const Services = () => {
  const Serviceslist = [
    {
      title: "Residential Construction",
      description:
        "Our residential construction services encompass the creation of custom homes tailored to your unique specifications. Whether you're building your dream home from the ground up, renovating an existing property to better suit your needs, or extending your living space, we provide expert craftsmanship and attention to detail every step of the way.",
    },
    {
      title: "Commercial Construction",
      description:
        "In the realm of commercial construction, we specialize in erecting office buildings and retail centers that meet the demands of modern businesses. From sleek office complexes to vibrant retail spaces, we bring innovative design concepts to life while adhering to strict quality standards and timelines.",
    },
    {
      title: "Project Management",
      description:
        "Our project management services offer comprehensive oversight for construction projects, from conception to completion. We handle every aspect of the project, ensuring efficient coordination between all stakeholders, adherence to timelines, and budget management, ultimately delivering successful outcomes.",
    },
    {
      title: "Plumbing Services",
      description:
        "Our plumbing services encompass installation, maintenance, and repair of plumbing systems for residential and commercial properties. From fixing leaks and clogs to installing new fixtures and pipes, our experienced plumbers ensure reliable and efficient plumbing solutions.",
    },
    {
      title: "Electrical Services",
      description:
        "We provide a range of electrical services for residential and commercial buildings, including installation, maintenance, and repair of electrical systems. From wiring and lighting to power distribution and safety inspections, our certified electricians deliver reliable and safe electrical solutions.",
    },
    {
      title: "Tiling Services",
      description:
        "Our tiling services cover the installation of tiles for floors, walls, and other surfaces in residential and commercial properties. With a wide selection of tile materials and patterns, we create durable and visually appealing tile installations to enhance any space.",
    },
    {
      title: "Construction of Septic Tanks",
      description:
        "We specialize in the construction and installation of septic tank systems for residential and commercial properties. Our expertise ensures efficient waste management solutions that comply with regulations and promote environmental sustainability.",
    },
    {
      title: "Room Air Conditioning Services",
      description:
        "Our room air conditioning services include installation, maintenance, and repair of air conditioning systems for individual rooms or entire buildings. We help you stay cool and comfortable year-round with reliable and energy-efficient air conditioning solutions.",
    },
    {
      title: "Carpentry and Roofing Services",
      description:
        "From constructing custom furniture to repairing and replacing roofs, our carpentry and roofing services cover a wide range of woodwork and roofing tasks. With skilled craftsmen and quality materials, we deliver durable and visually appealing carpentry and roofing solutions.",
    },
    {
      title: "Steel Bending Works",
      description:
        "We specialize in shaping and bending steel for various construction purposes, including reinforcing structures and creating custom metalwork. With precision and expertise, we fabricate steel components to meet the unique requirements of each project.",
    },
    {
      title: "Parapet/Coping Designing",
      description:
        "Our parapet and coping designing services involve creating protective walls or barriers on the edges of roofs or walls. From design conceptualization to implementation, we ensure sturdy and aesthetically pleasing parapets and copings that enhance the safety and visual appeal of your property.",
    },
    {
      title: "Graffiato and Painting Services",
      description:
        "We offer graffiato application and painting services for interior and exterior surfaces of residential and commercial buildings. Whether you desire textured plaster finishes or vibrant paint colors, our skilled artisans deliver impeccable results that elevate the look and feel of your space.",
    },
    {
      title: "Tyrolean Finishing Works",
      description:
        "Our Tyrolean finishing works involve applying textured decorative coatings to exterior walls for both aesthetic enhancement and weather protection. With our expertise in Tyrolean finishes, we transform ordinary walls into visually striking and durable architectural features.",
    },
    {
      title: "Land Surveying Services",
      description:
        "Our land surveying services provide accurate and comprehensive data on property boundaries, elevations, and other relevant information essential for construction projects. Using state-of-the-art equipment and techniques, our surveyors ensure precise measurements and detailed surveys to support your project's success.",
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
