import React, { useState } from "react";

const InfiniteScroll = () => {
  const [images] = useState([
    {
      src: "/assets/images/01.png",
      width: 300,
      height: 340,
      alt: "",
    },
    {
      src: "/assets/images/02.png",
      width: 500,
      height: 300,
      alt: "",
    },
    {
      src: "/assets/images/03.png",
      width: 258,
      height: 380,
      alt: "",
    },
    {
      src: "/assets/images/04.jpg",
      width: 397,
      height: 246,
      alt: "",
    },
   
  ]);
  return (
    <div className=" overflow-hidden bg-muted/20 rounded-lg p-4">
      <div className="flex animate-scroll-x space-x-4">
        {images.map((img, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 rounded-lg overflow-hidden "
            style={{ width: img.width, height: img.height }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ width: img.width, height: img.height }}
            />
          </div>
        ))}
        {/* {images.map((img, index) => {
          <div
            key={`first-${index}`}
            className="flex-shrink-0 rounded-lg overflow-hidden "
            style={{ width: img.width, height: img.height }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ width: img.width, height: img.height }}
            />
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default InfiniteScroll;
