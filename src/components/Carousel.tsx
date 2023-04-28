import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Carousel = ({ children: slides }: { children: any }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const goToSlide = (index: number) => setCurr(index);
  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-500 ease-out'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'
        >
          <BiChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'
        >
          <BiChevronRight size={40} />
        </button>
      </div>

      <div className='absolute bottom-10 left-0 right-0 hover:cursor-pointer'>
        <div className='flex items-center justify-center gap-2 '>
          {slides.map((_: any, i: number) => (
            <div
              key={i}
              className={`
                  h-3 w-3 rounded-full bg-white transition-all
                  ${curr === i ? 'p-2' : 'bg-opacity-50'}
                `}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
