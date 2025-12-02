import React from "react";

const Services = () => {
  const services = [
    {
      title: "Residential",
      subTitle: "Interior Design",
      peragraph:
        "We design homes that reflect your lifestyle, blending comfort, function, and beauty to create spaces you’ll love living in every day.",
      number: "(01)",
      img: "/assets/images/11.jpg",
      numberColor: "text-[#696E5B]",
      bgcolor: "bg-[#494D3C]",
    },
    {
      title: "Commercial",
      subTitle: "Interior Design",
      peragraph:
        "From offices to retail spaces, we craft environments that enhance productivity, brand presence, and customer experience.",
      number: "(02)",
      img: "/assets/images/12.jpg",
      numberColor: "text-[#A66119]",
      bgcolor: "bg-[#C58849]",
    },
    {
      title: "Hospitality",
      subTitle: "Interior Design",
      peragraph:
        "We shape inviting and memorable spaces for hotels, restaurants, and lounges, balancing aesthetic appeal with operational efficiency.",
      number: "(03)",
      img: "/assets/images/13.jpg",
      numberColor: "text-[#8A8579]",
      bgcolor: "bg-[#A09A8C]",
    },
    {
      title: " Planning & Layouts",
      // subTitle: "Interior Design" ,
      peragraph:
        "Our meticulous layouts maximize flow, functionality, and comfort, ensuring every square foot serves a purpose.",
      number: "(04)",
      img: "/assets/images/14.jpg",
      numberColor: "text-[#7C3C77]",
      bgcolor: "bg-[#A06F9C]",
    },
    {
      title: "3D Visualization",
      //subTitle: "Interior Design" ,
      peragraph:
        "We bring your vision to life with photorealistic renderings, allowing you to see and refine your space before it’s built.",
      number: "(05)",
      img: "/assets/images/15.jpg",
      numberColor: "text-[#86837A]",
      bgcolor: "bg-[#989489]",
    },
  ];
  return (
    <div className="relative">
      <div className="w-full min-h-screen flex items-center justify-center sticky top-0 z-0">
        <h1 className="text-[80px] md:text-[150px] lg:text-[200px] font-semibold font-montserrat text-[#29343D] tracking-tight">Services</h1>
      </div>

      <div className="relative ">
        {services.map((item, index) => (
          <div
            key={index}
            className={`${item.bgcolor} w-full h-screen md:flex justify-between md:px-8 lg:px-20 md:py-10 px-5 py-6 font-montserrat sticky top-0`}
          >
            <div className="md:w-[70%] flex flex-col justify-between items-start text-[#F4F3E1] gap-5">
              <h1 className="md:text-4xl lg:text-6xl text-4xl">
                <span className="text-5xl md:text-[46px] lg:text-[80px] font-bold">{item.title}</span>{" "}
                <br />{item.subTitle}</h1>
              <p className="text-lg md:text-2xl lg:text-4xl md:w-[90%] lg:w-[80%]">{item.peragraph}</p>
            </div>
            <div className="md:w-[54%] lg:w-[30%] flex items-start justify-end gap-2 md:gap-3 lg:gap-5 mt-10">
              <div
                key={index}
                className={`${item.numberColor} text-[24px] md:text-[35px] lg:text-[55px] font-medium`}
              >
                {item.number}
              </div>
              <img className="h-[300px] object-cover rounded-sm md:h-[90%] lg:h-[100%]" src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
