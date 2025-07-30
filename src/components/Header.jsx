import SplitText from "./TextAnim.jsx";

const Header = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <h3 className="flex items-end gap-2 text-xl md:text-3xl md-3 font-Ovo">
        Hi! I'm Chingangbam Deepu Singh{" "}
        <img src="./images/hand-icon.png" alt="" className="w-6" />
      </h3>
      <SplitText
        text="Fullstack web developer based in India."
        className="text-4xl sm:text-6xl lg:text-[60px] font-Ovo "
        delay={100}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <p className="max-w-3xl mx-auto font-Ovo">
        I’m a B.Sc Computer Science student at Sikkim Manipal Institute Of
        Technology with a passion for tech, coding, and robotics.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2"
        >
          Contact me{" "}
          <img src="./images/right-arrow-white.png" alt="" className="w-4" />
        </a>

        <a
          href="./src/assets/images/deepuresume.pdf"
          download
          className="px-10 py-3  rounded-full border-gray-500 flex items-center gap-2 bg-gray-800 hover:bg-gray-500"
        >
          My resume{" "}
          <img src="./images/download-icon.png" alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
