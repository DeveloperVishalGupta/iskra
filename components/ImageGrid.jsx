// import Image from 'next/image';

import { Image } from '@heroui/image';

export default function ImageGrid({ images = [] }) {
  return (
    <div className="relative grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl z-10">
      {images.map((img, index) => (
        <div
          key={index}
          className={`col-span-1 row-span-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300
            ${index === 1 ? '-mt-8 sm:-mt-16' : ''}
            ${index === 2 ? '-mb-8 sm:-mb-16' : ''}
          `}
        >
          <Image
            src={img.url}
            alt={img.alt || `Image ${index + 1}`}
            // width={400}
            // height={300}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
