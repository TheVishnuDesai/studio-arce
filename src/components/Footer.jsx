import React from "react";

const Footer = () => {
  const socialMedia = [
    { name: "Instagram" },
    { name: "Pinterest" },
    { name: "Youtube" },
    { name: "Linkedin" },
  ];
  return (
    <div>
      <footer className="w-full h-[80%] bg-[#29343D] text-[#F4F3E1] md:flex md:flex-col font-montserrat lg:px-20 lg:py-10 px-5 py-6 md:px-10 md:py-8">
        <div className="md:flex md:items-start md:justify-evenly lg:flex lg:items-start lg:justify-between md:gap-5 ">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold">
              Let’s talk
            </h1>
          </div>
          <div className="md:flex md:items-start md:justify-evenly lg:flex  justify-between items-start gap-10">
            <div>
              <h3 className="text-xl md:text-lg lg:text-2xl font-semibold">
                <span className="text-sm  font-normal">Phone / WhatsApp</span>
                <br /> +971 55 123 4567
              </h3>
              <p className="text-[16px] w-50 text-base/tight mt-5">
                Dubai Design District, Dubai, UAE
              </p>
              <p className="text-[16px] w-50 text-base/tight mt-3">
                Al Quoz Creative Hub, Dubai, UAE
              </p>
            </div>
            <div className="lg:mt-0">
              <h3 className="text-xl md:text-lg lg:text-2xl font-semibold">
                <span className="text-sm font-normal">Email us</span>
                <br /> hello@studioarce.com
              </h3>
              {socialMedia.map((item, index) => (
                <ul key={index} className="mt-5 text-[16px] w-25">
                  <li className="hover:underline text-base/tight mb-[-10px] flex items-center justify-between ">
                    <a href="#">{item.name}</a>
                    <i className="ri-arrow-right-up-line"></i>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="md:flex items-end justify-between md:mt-15 mt-20">
          <div>
            <img src="public/assets/arce-logo-white.svg" alt="arce-logo" />
            <p className="md:text-sm">Crafted with Purpose.</p>
          </div>
          <ul className="md:flex lg:flex md:gap-4 lg:gap-8 mt-5 md:text-sm md:font-semibold">
            <li className="hover:underline">
              <a href="#">Terms & conditions</a>
            </li>
            <li className="hover:underline">
              <a href="#">Services</a>
            </li>
            <li className="hover:underline">
              <a href="#">Contact</a>
            </li>
            <li className="hover:underline">
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          <p className="lg:mt-2 md:text-sm">© arcé 2025-26</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
