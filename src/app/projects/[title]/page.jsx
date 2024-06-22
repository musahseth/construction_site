import React from "react";
import { projects } from "../../../../utils/projects";
import PhotoViewer from "@/components/PhotoViewer";
import Services from "@/components/Services";

export async function generateStaticParams() {
  return projects.map((p) => ({
    title: p?.title,
  }));
}

export const generateMetadata = async ({ params }) => {
  const project = projects.find(({ title }) => title === params?.title);

  return {
    metadataBase: new URL("https://www.nyandeconstructioncompany.com/"),
    title: project?.title,
    description: project?.description,
    siteName: "Nyande",
    icons: {
      icon: project?.img.src?.[0],
    },
    keywords: `${project?.title} - Nyande Construction Company `,
    openGraph: {
      title: `${project?.title} - Nyande Construction Company `,
      type: "website",
      url: `https://www.nyandeconstructioncompany.com/projects/${params?.title}`,
      description: "View project details.",
      images: project?.img.src,
    },
    // twitter: {
    //   handle: "@nyandesigns",
    //   cardType: "summary_large_image",
    // },
  };
};

const Singleproject = ({ params }) => {
  const title = params?.title;

  const project = projects.find((p) => p.title === title);

  return (
    <div>
      {" "}
      <div className="bg-background p-4">
        <div className="container mx-auto flex md:flex-row flex-col-reverse justify-center  py-20">
          <div className="flex-1 flex flex-col gap-8 justify-start items-start p-4">
            <h3 className="text-primary-content text-3xl uppercase font-bold mb-4 md:mb-8">
              {project?.title.replace(/-/g, " ")}
            </h3>
            <div className="text-copy text-lg">
              <p className="mb-4">{project?.description}</p>
            </div>
            <div className="flex flex-col gap-5 text-copy text-lg">
              {/* <div className="flex items-center gap-4">
                <span className="bg-primary p-2 rounded-full"></span>
                <p className="text-primary-content hover:text-primary font-bold text-lg cursor-pointer">
                  Scope of work :{" "}
                  <span className="font-normal capitalize">
                    {" "}
                    {project?.category.map((p) => p)}
                  </span>
                </p>
              </div> */}
              <div className="flex items-center gap-4">
                <span className="bg-primary p-2 rounded-full"></span>
                <p className="text-primary-content hover:text-primary font-bold text-lg cursor-pointer">
                  Duration :{" "}
                  <span className="font-normal capitalize">
                    {" "}
                    {project?.duration}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-primary p-2 rounded-full"></span>
                <p className="text-primary-content hover:text-primary font-bold text-lg cursor-pointer">
                  Address :{" "}
                  <span className="font-normal capitalize">
                    {project?.address}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <PhotoViewer project={project} />
          </div>
        </div>
      </div>
      <Services n={3} />
    </div>
  );
};

export default Singleproject;
