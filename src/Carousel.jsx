/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Carousel = ({
  children: images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className=" text-3xl text-red-500 text-center p-4">
        View images and details
      </h1>
      <div className="overflow-hidden relative border-red-500 border-[5px] border-b-0">
        <div
          className=" flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {images}
        </div>
        <div className=" absolute inset-0 flex items-center justify-between p-4">
          <button
            className=" p-1 rounded-full shadow bg-white/80 text-pale_green hover:bg-red-500"
            onClick={prev}
          >
            <FaChevronCircleLeft size={20} />
          </button>
          <button
            className=" p-1 rounded-full shadow bg-white/80 text-pale_green hover:bg-red-500"
            onClick={next}
          >
            <FaChevronCircleRight size={20} />
          </button>
        </div>
        <div className=" absolute bottom-4 right-0 left-0 ">
          <div className=" flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-2" : " bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
