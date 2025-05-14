import React from 'react';
import Image from 'next/image';

interface BigServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  serviceName: string;
  description: string;
  learnMoreHref?: string;
}

const BigServiceCard: React.FC<BigServiceCardProps> = ({
  imageSrc,
  imageAlt,
  serviceName,
  description,
  learnMoreHref = '#',
}) => {
  return (
    <div className="parent bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="div1 relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="div2 mb-2">
          <h3 className="font-bold text-xl">{serviceName}</h3>
        </div>
        <div className="div3 mb-4">
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="div4">
          <a 
            href={learnMoreHref}
            className="text-blue-500 font-medium hover:text-blue-700 transition-colors"
            aria-label={`Learn more about ${serviceName}`}
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BigServiceCard; 