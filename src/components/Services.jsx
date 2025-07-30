import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-clip max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I’ve worked on projects like an online game portal, a calculator, and a
        virtual world tour site. Eager to expand my skills, I’m actively seeking
        an internship for hands-on experience.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-red-200 hover:-translate-y-1 duration-500">
          <img src="./images/web-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700">Web Design</h3>
          <p className="text-sm text-gray-600 leading-5">
            Web development is the process of building, programming...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more{" "}
            <img src="./images/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-violet-200 hover:-translate-y-1 duration-500">
          <img src="./images/mobile-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700">Engineering Design</h3>
          <p className="text-sm text-gray-600 leading-5">
            Engineering design solves technical problems innovatively...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more{" "}
            <img src="./images/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-yellow-200 hover:-translate-y-1 duration-500">
          <img src="./images/ui-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700">Problem Solving</h3>
          <p className="text-sm text-gray-600 leading-5">
            Finding effective solutions to various challenges...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more{" "}
            <img src="./images/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-green-200 hover:-translate-y-1 duration-500">
          <img src="./images/graphics-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700">Microsoft Office</h3>
          <p className="text-sm text-gray-600 leading-5">
            Productivity tools for documents, spreadsheets, and presentations...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more{" "}
            <img src="./images/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
