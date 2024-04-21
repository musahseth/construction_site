import Aboutus from "@/components/Aboutus";
import { Divider, Image } from "@nextui-org/react";
import React from "react";

const About = () => {
  const aboutContent = [
    "Nyande Construction Co started as a general building contractor in 2014. Over the years , the company has managed many challenging projects in ghana and beyond and has accumulated skills and experiences in the building industry.",
    "Presently, Nyande Construction Co takes on the responsibility of main contractor for small to medium size projects for all kinds of people on the social strata with varied income levels. We perform project management functions and make design inputs as value- added services to our clients.",
    "Our cardinal goal is to serve our clients with a 'Rest assured' experience when we are picked to execute their projects. Emphasis on clear communication and follow-through procedures ensures that client's objectives are top prority in the planning and execution of all our projects",
    "We are proud of our excellent, cautious and time-bound delivery and our clients can always be assured that only the most experienced and qualified people are serving them, all the time.",
  ];
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
          NYANDE CONSTRUCTION COMPANY{" "}
        </h1>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1">
            <Image src={"/aboutBg.jpg"} alt="Company" />
          </div>

          <div className="flex-1 flex flex-col gap-6 px-4">
            <p className="font-bold text-xl"> NYANDE CONSTRUCTION COMPANY</p>
            {aboutContent.map((para, i) => (
              <p className="text-lg" key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
        <Divider className="my-4 bg-primary container mx-auto h-1" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 py-8">
            <div className="border-4 border-primary relative text-copy text-lg p-4">
              <h1 className="-mt-8 ml-8 w-fit uppercase font-bold text-xl text-primary p-4 bg-white">
                mission
              </h1>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Providing tailor-made and fully integrated suite of
                  construction services for clients from different income groups
                  at fair and competitive prices in a safe environment full of
                  trust, honesty, and dedication:
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    We understand that each client has unique needs and
                    financial considerations. Therefore, we offer personalized
                    solutions tailored to meet the specific requirements of
                    clients from diverse income groups.
                  </li>
                  <li>
                    Our comprehensive suite of construction services encompasses
                    everything from initial planning and design to construction,
                    renovation, and maintenance. We ensure that every aspect of
                    the project is seamlessly integrated to deliver exceptional
                    results.
                  </li>
                  <li>
                    Fair and competitive pricing is at the core of our business
                    ethos. We strive to provide transparent pricing structures
                    that offer value for money while maintaining competitiveness
                    in the market.
                  </li>
                  <li>
                    Safety is our top priority. We adhere strictly to safety
                    regulations and best practices to create a secure
                    environment for our clients, employees, and subcontractors.
                    Trust, honesty, and dedication are the cornerstones of our
                    relationships with clients. We prioritize clear
                    communication, ethical conduct, and unwavering commitment to
                    delivering on our promises.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Providing awesome customer service to our clients:
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    We are dedicated to providing an outstanding customer
                    experience at every touchpoint of our service delivery.
                  </li>
                  <li>
                    Our customer service team is highly trained and equipped to
                    address any inquiries, concerns, or issues promptly and
                    effectively.
                  </li>
                  <li>
                    We prioritize listening to our clients, understanding their
                    needs, and exceeding their expectations at every
                    opportunity.
                  </li>
                  <li>
                    Feedback from our clients is valued and used to continually
                    improve and enhance our customer service standards.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Providing a mixture of services to a variety of industries and
                  geographical locations:
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    We have the flexibility and expertise to offer a diverse
                    range of services catering to various industries and
                    geographical locations.
                  </li>
                  <li>
                    Our extensive experience and knowledge allow us to adapt our
                    services to the specific requirements and challenges of
                    different industries and regions.
                  </li>
                  <li>
                    We leverage our broad service portfolio to meet the unique
                    needs of each client, regardless of their industry or
                    location.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Continually improving communications with our customers and
                  between departments:
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Effective communication is essential for the success of any
                    project. We prioritize open, transparent, and frequent
                    communication with our clients to ensure clarity and
                    alignment at every stage of the project.
                  </li>
                  <li>
                    Internally, we foster a culture of collaboration and
                    communication between departments to streamline processes,
                    optimize workflow, and enhance efficiency.
                  </li>
                  <li>
                    We invest in communication technologies and tools to
                    facilitate seamless communication and information sharing
                    across all levels of the organization.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Providing training for personnel’s enhancement:
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    {`    We recognize the importance of investing in our personnel's
                    growth and development. We provide comprehensive training
                    programs to enhance their skills, knowledge, and
                    competencies.`}
                  </li>
                  <li>
                    {`         Our training initiatives cover technical skills,
                    industry-specific knowledge, soft skills, and leadership
                    development to empower our personnel to excel in their roles
                    and contribute to the company's success.`}
                  </li>
                  <li>
                    Continuous learning and professional development are
                    encouraged and supported throughout our organization.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Recruiting and hiring only those who share our vision:
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    {`  We believe that shared values and vision are essential for
                    building a cohesive and high-performing team. We carefully
                    select and recruit individuals who align with our company's
                    values, culture, and long-term objectives.`}
                  </li>
                  <li>
                    Our recruitment process emphasizes not only technical skills
                    and qualifications but also cultural fit, attitude, and
                    alignment with our core values.
                  </li>
                  <li>
                    {`By hiring individuals who share our vision, we foster a
                    positive work environment where everyone is committed to
                    achieving common goals and upholding our company's
                    principles.`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 py-8">
            <div className=" border-4 border-primary">
              <h1 className="-mt-8 ml-8 w-fit uppercase font-bold text-xl text-primary p-4 bg-white">
                vision
              </h1>
              <div className="p-4 text-copy text-lg">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    To become a contractor of choice by assisting every willing
                    and prospective home owner to acquire their desired
                    properties with the highest standard of quality, safety, and
                    ethics:
                  </h2>
                  <ul className="list-disc ml-6 mb-4">
                    <li>
                      We aspire to be the preferred contractor for homeowners
                      seeking to realize their dream properties.
                    </li>
                    <li>
                      Our vision is to provide assistance to every willing and
                      prospective homeowner in acquiring properties that meet
                      their desires and aspirations.
                    </li>
                    <li>
                      We are committed to upholding the highest standards of
                      quality, safety, and ethics in all our construction
                      projects.
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  {`     Our vision is not just about constructing buildings; it's
                  about creating homes where families can thrive and memories
                  are made. We understand the significance of homeownership and
                  strive to make the process as seamless and fulfilling as
                  possible for our clients.`}
                </p>
                <p>
                  By prioritizing quality, safety, and ethics, we aim to build
                  trust and confidence among our clients and the communities we
                  serve. Our vision guides every decision and action we take,
                  driving us towards excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="border-4 border-primary">
              <h1 className="-mt-8 ml-8 w-fit uppercase font-bold text-xl text-primary p-4 bg-white">
                core values
              </h1>
              <div className="p-4 text-copy text-lg">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Excellence</h2>
                  <p className="mb-4">
                    We are dedicated to achieving excellence in every aspect of
                    our work, setting the highest standards of quality and
                    craftsmanship.
                  </p>
                  <p className="mb-4">
                    Our commitment to excellence extends to all facets of our
                    operations, from construction techniques to customer service
                    interactions.
                  </p>
                  <p>
                    By continuously striving for excellence, we ensure that our
                    clients receive superior results and exceptional
                    experiences.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Integrity</h2>
                  <p className="mb-4">
                    Integrity lies at the heart of our business philosophy,
                    guiding our actions with honesty, transparency, and ethical
                    behavior.
                  </p>
                  <p className="mb-4">
                    We uphold the highest standards of integrity in all our
                    interactions with clients, partners, and stakeholders.
                  </p>
                  <p>
                    Trust is paramount in our relationships, and we are
                    unwavering in our commitment to maintaining the trust and
                    confidence of those we serve.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Safety</h2>
                  <p className="mb-4">
                    Prioritizing the safety and well-being of all involved, we
                    adhere strictly to industry best practices and regulations,
                    continuously striving to identify and mitigate risks to
                    create a safe working environment.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    4. Collaboration
                  </h2>
                  <p className="mb-4">
                    Embracing teamwork and cooperation, we recognize the value
                    of diverse perspectives and shared expertise, fostering
                    innovative solutions and achieving mutual success with our
                    clients and partners.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Innovation</h2>
                  <p className="mb-4">
                    Committed to continuous improvement, we embrace creativity
                    and cutting-edge technologies, fostering a culture of
                    innovation to meet evolving client needs and deliver
                    innovative construction solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
