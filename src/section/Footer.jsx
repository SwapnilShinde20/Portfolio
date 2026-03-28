import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a className="social-icon 2 hover:scale-110 hover:cursor-pointer transition-transform duration-300" href="https://github.com/SwapnilShinde20" target="_blank">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/" />

        </a>
        <a  href="https://www.instagram.com/ig_flixop" target="_blank" className="social-icon  hover:scale-110 hover:cursor-pointer transition-transform duration-300">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />

        </a>
        <a  href="https://www.linkedin.com/in/swapnil-shinde-229a43333" target="_blank" className="social-icon  hover:scale-110 hover:cursor-pointer transition-transform duration-300">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 " />

        </a>

      </div>
      <p className="text-white-500">2025. All rights reserved</p>
    </section>
  );
};

export default Footer;
