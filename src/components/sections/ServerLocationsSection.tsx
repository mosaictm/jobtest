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
    <div className="w-full bg-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-12">مواقع الخوادم</h2>          
          {/* Map image at the top */}
          <div className="flex justify-center mb-16">
            <Image 
              src="/images/map/world-map.svg"
              alt="Server Locations Map"
              width={800}
              height={120}
              className="w-full max-w-4xl"
            />
          </div>
        </div>
        
        {/* Server locations grid */}
        <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* First two rows */}
          {SERVER_LOCATIONS.map((location, index) => (
            <ServerLocation 
              key={index}
              name={location.name}
              flag={location.flag}
              ping={location.ping}
            />
          ))}
          
          {/* Row 3 with last 2 countries in the middle */}
          <div className="col-span-1"></div> {/* Empty column */}
          {MIDDLE_LOCATIONS.map((location, index) => (
            <ServerLocation 
              key={index}
              name={location.name}
              flag={location.flag}
              ping={location.ping}
            />
          ))}
          <div className="col-span-1"></div> {/* Empty column */}
        </div>
      </div>
    </div>
  );
};

export default ServerLocationsSection; 