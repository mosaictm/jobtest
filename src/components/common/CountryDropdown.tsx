"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface CountryDropdownProps {
  selectedCountry: Country;
  countries: Country[];
  onChange: (country: Country) => void;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({ 
  selectedCountry, 
  countries, 
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} style={{ direction: 'ltr' }}>
      {/* Selected country button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-3 h-10 rounded-md text-black font-bold"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-center w-6 h-6 overflow-hidden rounded-full border border-gray-200">
          <Image 
            src={selectedCountry.flag} 
            alt={`${selectedCountry.name} flag`} 
            width={24} 
            height={24}
            className="object-cover w-full h-full"
          />
        </div>
        <span>{selectedCountry.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul 
          className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {countries.map((country) => (
            <li 
              key={country.code}
              className={`flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedCountry.code === country.code ? 'bg-gray-50' : ''
              }`}
              onClick={() => {
                onChange(country);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={selectedCountry.code === country.code}
            >
              <div className="flex items-center justify-center w-6 h-6 mr-2 overflow-hidden rounded-full border border-gray-200">
                <Image 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  width={24} 
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown; 