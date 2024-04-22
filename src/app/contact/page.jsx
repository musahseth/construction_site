import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneIncoming } from "react-icons/bi";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-contactBg h-[40vh] w-full bg-cover bg-center bg-fixed ">
        <div className="flex flex-col justify-center items-center h-full bg-black/50">
          <h1 className=" text-4xl lg:text-6xl xl:text-7xl text-white text-center uppercase font-bold shadow-md">
            contact us
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid place-content-center grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 py-20 p-4">
        <div className="bg-background flex justify-center items-center gap-4 rounded-xl p-4">
          <div className="flex  items-center justify-center rounded-lg text-primary p-4">
            <BiPhoneIncoming size={100} />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-primary-content text-lg font-bold md:text-xl cursor-pointer hover:text-primary">
              MOBILE PHONE
            </h3>
            <p className="mb-2 text-copy">+233 24 382 9407</p>
          </div>
        </div>
        <div className="bg-background flex justify-center items-center gap-4 rounded-xl p-4">
          <div className="flex  items-center justify-center rounded-lg  text-primary p-4">
            <AiOutlineMail size={100} />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-primary-content text-lg font-bold md:text-xl cursor-pointer hover:text-primary">
              E-MAIL
            </h3>
            <p className="mb-2 text-copy">osmancash@gmail.com</p>
          </div>
        </div>
        <div className="bg-background flex justify-center items-center gap-4 rounded-xl p-4">
          <div className="flex  items-center justify-center rounded-lg text-primary p-4">
            <GoLocation size={100} />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-primary-content text-lg font-bold md:text-xl cursor-pointer hover:text-primary">
              ADDRESS
            </h3>
            <p className="mb-2 text-copy">Abokobi</p>
            {/* <p className="mb-2 text-copy">street address 2</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
