import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src="./images/rake.png" alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="./images/mail_icon.png" alt="" className="w-4" />
          officialchdeepusingh@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Deepu Singh. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/dmitrii_ivan01/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rakesh-r-219390305/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/rakeshaps8866">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/Programmer-Rakesh">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
