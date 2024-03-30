import React from "react";

const Footer = () => {
  return (
    <footer className="bg- gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items- p-4">
        <div className="flex-1">Logo</div>
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
      <div> build by mansir</div>
    </footer>
  );
};

export default Footer;
