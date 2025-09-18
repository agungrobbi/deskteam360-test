'use client';

import React, { useRef, useState, useEffect } from 'react';
import Flicking, { useFlickingReactiveAPI } from '@egjs/react-flicking';
import Image from 'next/image';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';

import { getImagePath } from '@/utils/images';

interface campaignToolkit {
  image: string;
  title: string;
  items: string[];
}

interface campaignToolkitSliderProps {
  title: string;
  slides: campaignToolkit[];
}

const campaignToolkitSlider: React.FC<campaignToolkitSliderProps> = ({
  title,
  slides,
}) => {
  if (!slides || slides.length === 0) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const flickingRef = useRef<any>(null);
  const { isReachStart, isReachEnd, moveTo } =
    useFlickingReactiveAPI(flickingRef);

  useEffect(() => {
    if (flickingRef.current) {
      setActiveIndex(flickingRef.current.index);

      const handleMove = (e: any) => {
        setActiveIndex(e.index);
      };

      flickingRef.current.on('changed', handleMove);
    }
  }, [flickingRef]);

  const handlePrev = () => {
    if (!isReachStart) {
      moveTo(flickingRef.current.prev());
    }
  };

  const handleNext = () => {
    if (!isReachEnd) {
      moveTo(flickingRef.current.next());
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem]">
          Your Complete Campaign Toolkit
        </h2>
        <div>
          <div className="flex flex-row grow-0 justify-end gap-6">
            <button
              onClick={handlePrev}
              className={`btn-primary py-2 px-4 ${isReachStart ? 'btn-disabled' : ''}`}
              aria-label="Previous slide"
            >
              <span className="material-icons !text-[1.875rem]">
                arrow_back
              </span>
            </button>

            <button
              onClick={handleNext}
              className={`btn-primary py-2 px-4 ${isReachEnd ? 'btn-disabled' : ''}`}
              aria-label="Next slide"
            >
              <span className="material-icons !text-[1.875rem]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <Flicking
          ref={flickingRef}
          autoResize={true}
          deceleration={0.0075}
          disableOnInit={true}
          threshold={50}
          bounce={10}
          className="mb-6"
        >
          {slides.map((slide, index) => (
            <div key={index} className="!grid grid-cols-2 gap-10 max-w-full">
              <div>
                <h3 className="text-[2.25rem] leading-[2.7rem] font-semibold mb-4">
                  {slide.title}
                </h3>
                {slide.items && (
                  <ul className="list-triangle-point">
                    {slide.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Image
                src={getImagePath(slide.image)}
                alt={slide.title}
                width={1244}
                height={700}
                priority
                className="rounded-[1.25rem]"
              />
            </div>
          ))}
        </Flicking>

        <div className="flex flex-row gap-4">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`w-[1.0625rem] h-[1.0625rem] text-[1px] ${
                activeIndex === index
                  ? 'text-[var(--color-gray-2)] bg-[var(--color-gray-2)]'
                  : 'text-[var(--color-gray-1)] bg-[var(--color-gray-1)]'
              }`}
            >
              {index}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default campaignToolkitSlider;
