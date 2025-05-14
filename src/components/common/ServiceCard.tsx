'use client';

import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  imageSrc: string;
  alt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, color, icon, imageSrc, alt }) => (
  <div className="relative w-full max-w-[384px]">
    {/* Colorful top banner with radius */}
    <div className={`h-6 w-full ${color || 'bg-[#2B1F51]'} rounded-t-lg`}></div>
    
    {/* Main card - removed border-top to connect seamlessly with banner */}
    <div className="flex flex-col w-full rounded-b-lg overflow-hidden shadow-md">
      {/* Card header with partial circle and icon */}
      <div className="relative bg-white h-48 pt-16 pb-12 px-4 flex items-center justify-center">
        {/* Partial circle in bottom */}
        <div className={`absolute bottom-60 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-128 h-128 bg-[#2B1F51] rounded-full`}></div>
        
        {/* Logo image positioned in the center */}
        <div className="absolute top-1/2 h-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden">
          <Image 
            src={imageSrc}
            alt={alt} 
            width={144*1.5}
            height={48*1.5}
            priority
            className="relative top-20 object-contain"
          />
        </div>
      </div>

      {/* Card content */}
      <div className="bg-white p-8 pt-14 text-center">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">ابتداء من ٤٥ ريال شهريا</p>
        
        {/* Button */}
        <button 
          className={`w-full py-2 px-4 bg-[#2B1F51] text-white rounded-md hover:opacity-90 transition-opacity`}
          type="button"
        >
          ابدأ الآن
        </button>
      </div>
    </div>
  </div>
);

export default ServiceCard; 