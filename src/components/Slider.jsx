import React from 'react';

const Slider = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="carousel w-full mt-12">
        <div id="item1" className="carousel-item w-full">
          <img src="/images/slider2.jpg" className="w-full max-h-[450px] bg-cover object-cover" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="/images/slider1.jpg" className="w-full max-h-[450px] bg-cover object-cover" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="/images/slider3.jpg" className="w-full max-h-[450px] bg-cover object-cover" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
