import React from "react";

const Work = () => {
  const cardItems = [
    {
      title: "Homes",
      img: "/assets/images/05.jpg",
      start: "row-start-1",
      end: "row-end-3",
    },
    {
      title: "Hospitality",
      img: "/assets/images/06.jpg",
      start: "row-start-1",
      end: "row-end-4",
    },
    {
      title: "Offices",
      img: "/assets/images/07.jpg",
      start: "row-start-1",
      end: "row-end-3",
    },
    {
      title: "Outdoors",
      img: "/assets/images/08.jpg",
      start: "row-start-3",
      end: "row-end-6",
    },
    {
      title: "Signature Projects",
      img: "/assets/images/10.jpg",
      start: "row-start-4",
      end: "row-end-6",
    },
    {
      title: "Showrooms",
      img: "/assets/images/09.jpg",
      start: "row-start-3",
      end: "row-end-6",
    },
  ];
  return (
    <div>
      <div className="w-full min-h-screen px-5 md:px-8 lg:px-20 py-6 font-montserrat  md:flex flex-col gap-8 mt-8">
        <div className="flex items-end justify-between">
          <h1 className="text-5xl md:text-7xl font-bold text-[#29343D] mb-10">Our Work</h1>
        </div>
        <div className="relative mb-8 md:mb-2">
          <button className=" absolute right-0 flex md:text-lg text-[#29343D] cursor-pointer">
            <span className="hover:underline">View All Projects</span>
            <i className="ri-arrow-right-s-line text-lg md:text-2xl"></i>
          </button>
        </div>
        <div className="flex flex-col gap-5 md:grid grid-cols-3 auto-rows-[110px] w-full lg:gap-5 ">
          {cardItems.map((item, index) => (
            <div key={index} className={`${item.start} ${item.end} relative`}>
              <img
                className="w-full h-full object-cover rounded-[10px]"
                src={item.img}
                alt=""
              />
              <div className="absolute flex justify-between bottom-0 left-0 right-0 px-4 py-1 bg-[#F0EFED]/30 text-white backdrop-blur-md rounded-bl-[10px] rounded-br-[10px]">
                <h3 className="cursor-pointer text-lg hover:underline">{item.title}</h3>
                <i className="ri-arrow-right-up-line cursor-pointer text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
