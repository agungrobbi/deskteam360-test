'use client';
import React from 'react';
import Image from 'next/image';

interface CardIcon2Item {
  icon: string;
  title: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
  type?: string;
}

const CardIcon2: React.FC<CardIcon2Item> = ({
  icon,
  title,
  description,
  linkUrl,
  linkLabel,
  type,
}) => {
  return (
    <div
      className={`max-w-[430px] p-7 rounded-[1.25rem] flex flex-col items-start ${type === 'dark' ? 'bg-gradient-dark text-white' : 'bg-[var(--color-gray-3)]'}`}
    >
      <div className="flex justify-end h-[5.1875rem] mb-10">
        <Image
          src={icon}
          alt={title}
          width={98}
          height={98}
          priority
          className="max-h-[5.1875rem]"
        />
      </div>
      <div className="flex-grow mb-6">
        <h4 className="text-[2.25rem] leading-[2.7rem] font-semibold mb-4">
          {title}
        </h4>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <a
        href={linkUrl}
        className={`mt-auto ${type === 'dark' ? 'btn-primary' : 'btn-outline'} inline-flex items-center py-2 px-6`}
      >
        {linkLabel}
        <span className="material-icons text-[30px] ml-2">arrow_outward</span>
      </a>
    </div>
  );
};

export default CardIcon2;
