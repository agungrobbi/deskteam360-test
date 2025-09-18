'use client';

import React, { useRef } from 'react';
import Flicking, { useFlickingReactiveAPI } from '@egjs/react-flicking';
import Image from 'next/image';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';

import { getImagePath } from '@/utils/images';

interface Testimonial {
  image: string;
  quote: string;
  author: string;
  title: string;
}

interface TestimonialSliderProps {
  slides: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ slides }) => {
  if (!slides || slides.length === 0) {
    return null;
  }

  const flickingRef = useRef<any>(null);
  const { indexProgress } = useFlickingReactiveAPI(flickingRef);

  let displayedSlides = slides;
  while (displayedSlides.length <= 3) {
    displayedSlides = [...displayedSlides, ...slides];
  }

  const length = displayedSlides.length;

  const handlePrev = () => {
    if (flickingRef.current) {
      flickingRef.current.prev();
    }
  };

  const handleNext = () => {
    if (flickingRef.current) {
      flickingRef.current.next();
    }
  };

  return (
    <div className="w-full relative px-8 py-12">
      <Flicking
        ref={flickingRef}
        circular={true}
        autoResize={true}
        deceleration={0.0075}
        interruptable={false}
        disableOnInit={true}
        duration={750}
        threshold={50}
        bounce={10}
      >
        {displayedSlides.map((slide, index) => {
          const childProgress =
            ((index - indexProgress + length * 1.5) % length) - length * 0.5;
          const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);
          const zIndex = 100 - Math.floor(Math.abs(childProgress) * 10);
          const translateZ = Math.abs(childProgress) * 1050;
          const opacity = Math.min(Math.max(1 - Math.abs(childProgress), 0), 1);

          return (
            <div
              key={index}
              className="rounded-[1.875rem] will-change-transform"
              style={{
                zIndex,
                transform: `rotateY(${-childProgress * 50}deg) scale(${scale}) translateZ(${translateZ}px)`,
              }}
            >
              <Image
                src={getImagePath(slide.image)}
                alt={slide.author}
                width={1244}
                height={700}
                priority
                className="rounded-[1.875rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full z-0 bg-[var(--color-text)] opacity-[.08] rounded-[1.875rem]"></div>
              <div
                className="absolute bottom-0 z-1 p-6 text-center text-white"
                style={{
                  opacity,
                }}
              >
                <p className="text-[2.25rem] leading-[2.7rem] mb-4 italic">
                  "{slide.quote}"
                </p>
                <h4 className="font-bold text-lg mb-1">
                  {slide.author} | {slide.title}
                </h4>
              </div>

              <button
                onClick={handlePrev}
                className="absolute -left-7 top-1/2 transform -translate-y-1/2 z-10 btn-primary py-2 px-4"
                aria-label="Previous slide"
                style={{
                  opacity,
                }}
              >
                <span className="material-icons !text-[1.875rem]">
                  arrow_back
                </span>
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-7 top-1/2 transform -translate-y-1/2 z-10 btn-primary py-2 px-4"
                aria-label="Next slide"
                style={{
                  opacity,
                }}
              >
                <span className="material-icons !text-[1.875rem]">
                  arrow_forward
                </span>
              </button>
            </div>
          );
        })}
      </Flicking>
    </div>
  );
};

export default TestimonialSlider;
