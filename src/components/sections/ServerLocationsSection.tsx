import React from 'react';
import Image from 'next/image';
import ServerLocation from '../common/ServerLocation';

// Define interface for server location data
interface ServerLocationData {
  name: string;
  flag: string;
  ping?: number; // Optional ping value
}

// Server locations data - moved outside component to avoid recreation on each render
const SERVER_LOCATIONS: ServerLocationData[] = [
  // Row 1
  { name: "السعودية", flag: "/images/flags/ksa.png", ping: 20 },
  { name: "الإمارات", flag: "/images/flags/uae.png", ping: 20 },
  { name: "المملكة المتحدة", flag: "/images/flags/uk.png", ping: 20 },
  { name: "تركيا", flag: "/images/flags/tur.png", ping: 20 },
  // Row 2
  { name: "ألمانيا", flag: "/images/flags/germany.png", ping: 20 },
  { name: "إيطاليا", flag: "/images/flags/itlay.png", ping: 20 },
  { name: "كوريا", flag: "/images/flags/korea.png", ping: 20 },
  { name: "فنلندا", flag: "/images/flags/fil.png", ping: 20 },
];

// Middle row locations
const MIDDLE_LOCATIONS: ServerLocationData[] = [
  { name: "أمريكا", flag: "/images/flags/usa.png", ping: 20 },
  { name: "السودان", flag: "/images/flags/sudan.png" } // No ping value will show "قريباً"
];

const ServerLocationsSection: React.FC = () => {
  return (
    <div className="w-full py-10 md:py-16 mt-8 md:mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">مواقع السيرفرات</h2>          
          {/* Map image at the top */}
          <div className="flex justify-center mb-8 md:mb-16">
            <Image 
              src="/images/map/world-map.svg"
              alt="Server Locations Map"
              width={1800}
              height={900}
              className="w-full max-w-6xl"
            />
          </div>
        </div>
        
        {/* Server locations grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Main server locations */}
          {SERVER_LOCATIONS.map((location, index) => (
            <ServerLocation 
              key={index}
              name={location.name}
              flag={location.flag}
              ping={location.ping}
            />
          ))}
        </div>
        
        {/* Middle locations in separate row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-4">
          <div className="hidden md:block"></div> {/* Empty column - hidden on mobile */}
          {MIDDLE_LOCATIONS.map((location, index) => (
            <ServerLocation 
              key={index}
              name={location.name}
              flag={location.flag}
              ping={location.ping}
            />
          ))}
          <div className="hidden md:block"></div> {/* Empty column - hidden on mobile */}
        </div>
      </div>
    </div>
  );
};

export default ServerLocationsSection; 