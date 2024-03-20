import Aboutus from "@/components/Aboutus";
import { Divider, Image } from "@nextui-org/react";
import React from "react";

const About = () => {
  const aboutContent = [
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias incidunt reprehenderit. Aliquam harum laboriosam reprehenderit delectus nostrum iste in ullam perspiciatis! Doloremque quibusdam quo quas deleniti. Libero tempore nobis autem pariatur, cumque sunt dolor consequuntur sit velit! Voluptates ea sequi vitae distinctio voluptatem. Quis, tenetur necessitatibus? Dicta, perferendis provident?`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi esse dolorum architecto, id et illo, mollitia consectetur eaque debitis enim ea facere provident aperiam repellat nam natus molestiae expedita?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus cumque incidunt vero corporis architecto vel voluptas optio nemo, cum repellendus, doloremque, voluptates sit? Sit facilis, minus odio tempora dicta distinctio expedita ipsa alias ipsam fuga, nulla dolor, quos ut molestias quia?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa officiis aperiam suscipit quaerat non reprehenderit sapiente hic, odit, praesentium dolorem veritatis. Velit dolorum accusamus debitis blanditiis? Ad officia corporis optio neque quaerat dolore, incidunt, ducimus facilis quo ratione, dicta quos voluptatibus ab consequatur unde debitis quibusdam! Temporibus, dolor pariatur ipsa eaque assumenda nesciunt nam! Ab rem ex iusto aut.`,
  ];
  const fullTitle = "SAFE HOME CONSTRUCTIONS";
  return (
    <>
      <div className="bg-aboutBg h-[40vh] w-full bg-cover bg-center bg-fixed ">
        <div className="flex flex-col justify-center items-center h-full bg-black/50">
          <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            {" "}
            About Us{" "}
          </h1>
          <Divider className="my-4 bg-primary max-w-sm h-1" />
        </div>
      </div>
      <div className="py-20 container mx-auto p-4">
        <h1 className="text-primary-content text-center text-4xl uppercase font-bold mb-4 md:mb-8">
          SH CONSTRUCTIONS
        </h1>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1">
            <Image src={"/aboutBg.jpg"} alt="Company" />
          </div>

          <div className="flex-1 flex flex-col gap-6 px-4">
            <p className="font-bold text-xl"> SAFE HOME CONSTRUCTIONS</p>
            {aboutContent.map((para, i) => (
              <p className="text-lg" key={i}>{para}</p>
            ))}
          </div>
        </div>
        <Divider className="my-4 bg-primary container mx-auto h-1" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 py-8">
            <div className="border-4 border-primary relative">
              <h1 className="-mt-8 ml-8 w-fit uppercase font-bold text-xl text-primary p-4 bg-white">
                mission
              </h1>
              <div className="p-4 text-copy text-lg" >
                <p>
                  <strong>{fullTitle} </strong>Ipsum dolor sit amet consectetur
                  adipisicing elit. Ullam quisquam ratione et sint, quos
                  dolores, corporis debitis minus, vitae officia adipisci ipsa
                  fugiat est dolorum eum optio blanditiis quas doloribus hic
                  saepe dicta fugit exercitationem. Sed, recusandae atque nobis
                  facilis voluptates, dolores quaerat aspernatur dolorem iusto
                  autem, facere ipsa. Fugiat
                </p>
                <ol className="list-disc mx-4">
                  <li>Providing awesome customer service to our clients.</li>
                  <li>
                    Providing a mixture of services to a variety of industries
                    and geographical locations.
                  </li>
                  <li>
                    Continually improving communications with our customers and
                    between departments.
                  </li>
                  <li>Providing training for personnel’s enhancement.</li>
                  <li>
                    Recruiting and hiring only those who share our vision.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 py-8">
            <div className=" border-4 border-primary">
              <h1 className="-mt-8 ml-8 w-fit uppercase font-bold text-xl text-primary p-4 bg-white">
                vision
              </h1>
              <div className="p-4 text-copy text-lg" >
                <p>
                  Ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  quisquam ratione et sint, quos dolores, corporis debitis
                  minus, vitae officia adipisci ipsa fugiat est dolorum eum
                  optio blanditiis quas doloribus hic saepe dicta fugit
                  exercitationem. Sed, recusandae atque nobis facilis
                  voluptates, <strong>{fullTitle} </strong>
                  dolores quaerat aspernatur dolorem iusto autem, facere ipsa.
                </p>
              </div>
            </div>
            <div className="border-4 border-primary">
              <h1 className="-mt-8 ml-8 w-fit uppercase font-bold text-xl text-primary p-4 bg-white">
                core values
              </h1>
              <div className="p-4 text-copy text-lg" >
                <p>
                  Ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  quisquam ratione et sint, quos dolores, corporis debitis
                  minus, vitae officia adipisci ipsa fugiat est{" "}
                  <strong>core values </strong>dolorum eum optio blanditiis quas
                  doloribus hic saepe dicta fugit exercitationem.
                </p>
                <ul>
                  <li>Professionalism</li>
                  <li>Commitment</li>
                  <li>Integrity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
