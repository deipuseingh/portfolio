import React from "react";
import website from "../assets/image/website.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-clip max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        <div className=" bg-black bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <img src={website}></img>
          <a
            href="https://todolist-sigma-lac.vercel.app/"
            target="_blank"
            className="absolute inset-0 z-10"
          ></a>
          <div className="bg-white w-10/12 rounded-md m-auto py-3 my-5 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 hover:shadow-2xl">
            <div>
              <h2 className="font-semibold text-gray-800 ">Frontend project</h2>
              <p className="text-sm text-gray-700">ToDo List</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
