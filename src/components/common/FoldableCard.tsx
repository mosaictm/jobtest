"use client"

import React, { useState } from 'react';

interface FoldableCardProps {
  title: string;
  description: string;
}

const FoldableCard: React.FC<FoldableCardProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 cursor-pointer transition-all duration-300 hover:shadow-md" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}
      >
        <div className="text-sm text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FoldableCard; 