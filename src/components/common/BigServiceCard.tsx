import Image from 'next/image';
import React from 'react';

interface BigServiceCardProps {
  title: string;
  description: string;
  learnMoreText?: string;
  imageSrc: string;
  imageAlt: string;
}

const BigServiceCard: React.FC<BigServiceCardProps> = ({
  title,
  description,
  learnMoreText = "اكتشف المزيد ←",
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl p-4 h-full">
      <div className="grid grid-cols-5 grid-rows-7 gap-4 h-full">
        <div className="col-span-2 row-span-3 relative min-h-[100px] max-h-[120px] flex items-center justify-center">
          <div className="relative w-[80px] h-[80px]">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              fill
              sizes="80px"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
        <div className="col-span-5 row-start-4">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="col-span-5 row-span-2 row-start-5">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="col-span-5 row-start-7">
          <button 
            className="text-sm font-medium"
            type="button"
            aria-label={`اكتشف المزيد عن ${title}`}
          >
            {"اعرف المزيد"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigServiceCard; 