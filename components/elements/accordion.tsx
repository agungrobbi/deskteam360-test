'use client';
import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-6">
          <button
            className="flex items-center w-full focus:outline-none"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span
              className={`mr-4 transition-transform duration-300 text-[1.3125rem] text-[var(${openIndex === index ? '--color-red-1' : '--color-disabled'})]`}
            >
              ▶
            </span>
            <h3
              className={`text-[2.25rem] leading-[2.7rem] text-left font-medium ${
                openIndex === index
                  ? 'text-white'
                  : 'text-[var(--color-disabled)]'
              }`}
            >
              {item.title}
            </h3>
          </button>
          {openIndex === index && (
            <div
              id={`accordion-content-${index}`}
              role="region"
              className="mt-4 transition-all duration-300 ease-in-out pl-8 text-[1.5rem] leading-[2.25rem]"
            >
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
