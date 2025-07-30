import deepu from "../assets/image/deepu.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
      <img
        src={deepu}
        alt="Logo"
        className="w-20 cursor-pointer mr-14 rounded-full "
      />
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-800 shadow-sm  font-Ovo">
        <li>
          <a href="#top" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About me
          </a>
        </li>
        <li>
          <a href="#services" className="nav-link ">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            My work
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact me
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
        >
          Contact
          <img src="./images/arrow-icon.png" alt="" className="w-3" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
