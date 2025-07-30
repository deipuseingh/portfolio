import deepu from "../assets/image/deepu.jpg";
import ana from "../assets/image/ana.png";
import canva from "../assets/image/canva.png";
import codeblocks from "../assets/image/codeblocks.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={deepu}
            alt="Chingangbam Deepu Singh"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          {/* <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src="./images/circular-text.png"
              alt=""
              className="w-full animate-spin_slow"
            />
            <img
              src="./images/dev-icon.png"
              alt=""
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div> */}
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Eager to learn and grow in the tech field, I’m actively seeking a
            part-time internship to gain hands-on experience and contribute to
            innovative projects. Check the skills section for more details!
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-green-200 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src="./images/code-icon.png" alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS, JavaScript, Python, C++
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-200 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src="./images/edu-icon.png" alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Education</h3>
              <p className="text-gray-600 text-sm">
                BTech in Electrical, Electronics and Communication
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-pink-200 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img
                src="./images/project-icon.png"
                alt=""
                className="w-7 mt-3"
              />
              <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
              <p className="text-gray-600 text-sm">
                Built more than 4 projects
              </p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-700">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={ana} alt="" className="w-11 sm:w-13" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={canva} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={codeblocks} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/firebase.png" alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/soli_logo.png" alt="" className="w-5 sm:w-7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
