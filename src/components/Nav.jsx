import React, { useState } from "react";

const Nav = () => {
  const navLinks = [
    { name: "Work", href: "work" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];
  const socialMediaLinks = [
    { name: "Instagram", href: "instagram" },
    { name: "Pinterest", href: "pinterest" },
    { name: "Youtube", href: "youtube" },
    { name: "Linkedin", href: "linkedin" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-full font-montserrat relative">
        <nav className="flex items-center justify-between px-4 py-8 md:px-6 lg:px-14 text-[#29343D]">
          <h3 className="md:text-[14px] lg:text-[16px] text-[12px] font-semibold">
            Interior design studio
          </h3>
          <button
            onClick={() => setOpen(!open)}
            className="md:text-[14px] lg:text-[16px] text-[12px] font-semibold cursor-pointer hover:text-[#829077]"
          >
            Menu <i className="ri-menu-line"></i>
          </button>
        </nav>

        {
          <div
            className={`${
              open ? "block" : "hidden"
            } flex justify-end absolute w-full h-screen bg-[#829077]  text-white md:justify-between top-0 md:py-26 py-16 px-8`}
          >
            <div>
              <h3 className="absolute top-8 left-4 md:text-[16px] text-[12px] font-semibold">
                Interior design studio
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-8 right-4 md:text-[16px] text-[12px] font-semibold cursor-pointer"
              >
                Close<i className="ri-close-large-fill p-1 font-medium"></i>
              </button>
            </div>
            <div className="hidden md:flex md:items-start  md:flex-col w-[38%] h-full ">
              <div className="w-[400px] h-60 ">
                <img
                  className="lg:w-full h-50 rounded-lg md:h-60  md:rounded-2xl"
                  src="https://images.unsplash.com/photo-1755490398157-3b259e1e223a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="w-[400px] flex items-start justify-between md:mt-5 md:px-2">
                <div className="left">
                  <h3 className="text-[12px] md:text-[14px] mb-3">
                    Recent Project{" "}
                  </h3>
                  <p className="font-bold text-[14px] md:text-[16px] text-base/3">
                    Private Residence
                  </p>
                  <p className="text-[14px]">Dubai, UAE</p>
                </div>
                <div className="right">
                  <h3 className="text-[14px] mb-3">Work do</h3>
                  <p className="font-medium">Interior Design</p>
                  <p className="font-medium">Outdoors</p>
                  <p className="font-medium">3D Visualization</p>
                </div>
              </div>
              <img className=" h-50 mt-7" src="/assets/arce-logo.svg" alt="" />
            </div>
            <div className="relative overflow-hidden w-full md:w-[55%] h-full flex flex-col justify-center md:justify-between items-center mt-4 md:mt-0">
              {navLinks.map((link, index) => (
                <div className="navOption h-14 md:h-full ">
                  <div className="overlay"></div>
                  <a
                    className="relative md:z-10 flex items-end text-[38px] font-semibold w-full md:h-20 md:border-b-2  md:border-[#596451] gap-5"
                    href={link.href}
                    key={index}
                  >
                    {/* <div className="absolute  w-full h-20 bg-amber-400"></div> */}
                    <i className="text-[17px] ri-arrow-right-up-line mr-2 mb-2 font-normal "></i>
                    {link.name}
                  </a>
                </div>
              ))}
              <div className="w-full h-40 flex md:items-end justify-between md:justify-end md:flex-col mt-11 py-4 md:pb-8 gap-14 md:gap-0">
                <div className="text-right"> 
                  <h3>Crafted with Purpose.</h3>
                  <p>© arcé 2025-26</p>
                </div>

                <div className="flex flex-col md:flex-row text-[15px] md:text-[16px] gap-1 md:mt-2">
                  {socialMediaLinks.map((links, index) => (
                    <a
                      className="hover:underline flex justify-between"
                      href={links.href}
                      key={index}
                    >
                      {" "}
                      {links.name}
                      <i className=" ri-arrow-right-up-line"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Nav;
