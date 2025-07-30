import React from "react";
import mail from "../assets/image/mail.png";
import deepu from "../assets/image/deepu.png";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={deepu} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mail} alt="" className="w-4" />
          officialchdeepusingh@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Deepu Singh. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/deipu_seingh?igsh=eTN6cXlyNHR6b2Yz&utm_source=qr">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chdeepusingh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/16ndZwThq8/?mibextid=wwXIfr">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com/deipuseingh">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
