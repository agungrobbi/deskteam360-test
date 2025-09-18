'use client';
import React from 'react';
import Image from 'next/image';

import { getImagePath } from '@/utils/images';

interface CardIcon1Item {
  icon: string;
  title: string;
  description: string;
}

const CardIcon1: React.FC<CardIcon1Item> = ({ icon, title, description }) => {
  return (
    <div>
      <div className="flex flex-row gap-4 mb-4">
        <div className="h-[5.1875rem]">
          <Image
            src={getImagePath(icon)}
            alt={title}
            width={98}
            height={98}
            priority
            className="max-h-[5.1875rem]"
          />
        </div>
        <h4 className="text-[1.75rem] leading-[2.1rem] font-semibold mb-4">
          {title}
        </h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default CardIcon1;
