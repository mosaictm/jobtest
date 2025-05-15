"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Define platform data types
interface PlatformData {
  position: string;
  platform: string;
  image: string;
  imageAlt: string;
  delay: string;
  imagePosition: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  imageSize: {
    width: number;
    height: number;
  };
}

const HeroSection: React.FC = () => {
  // Initial state set to false for immediate animation on hydration
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Use requestAnimationFrame to ensure the browser has painted the initial state
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  // Common animation style to reuse
  const getAnimationStyle = (delay: string) => ({
    transform: !isLoaded ? 'translateY(600px)' : 'translateY(10px)',
    transition: 'transform 0.5s ease-in-out',
    transitionDelay: delay
  });

  // Platform data arrays for right side
  const rightPlatforms: PlatformData[] = [
    {
      position: "bottom-0 right-0",
      platform: "/images/hero/plat.png",
      image: "/images/hero/shield.png",
      imageAlt: "Shield",
      delay: "0.05s",
      imagePosition: { top: '-10%', right: '5%' },
      imageSize: { width: 150, height: 150 }
    },
    {
      position: "-bottom-27 right-32",
      platform: "/images/hero/plat_op.png",
      image: "/images/hero/cloud.png",
      imageAlt: "Cloud",
      delay: "0.15s",
      imagePosition: { top: '5%', right: '7%' },
      imageSize: { width: 120, height: 120 }
    },
    {
      position: "-bottom-55 right-0",
      platform: "/images/hero/plat_op.png",
      image: "/images/hero/E.png",
      imageAlt: "E",
      delay: "0.25s",
      imagePosition: { top: '-5%', right: '5%' },
      imageSize: { width: 100, height: 100 }
    }
  ];

  // Platform data arrays for left side (mirrored)
  const leftPlatforms: PlatformData[] = [
    {
      position: "bottom-0 right-0",
      platform: "/images/hero/plat.png",
      image: "/images/hero/server.png",
      imageAlt: "Server",
      delay: "0.1s",
      imagePosition: { top: '-10%', right: '7%' },
      imageSize: { width: 100, height: 150 }
    },
    {
      position: "-bottom-27 right-32",
      platform: "/images/hero/plat_op.png",
      image: "/images/hero/MC.png",
      imageAlt: "MC",
      delay: "0.2s",
      imagePosition: { top: '-5%', right: '5%' },
      imageSize: { width: 120, height: 120 }
    },
    {
      position: "-bottom-55 right-0",
      platform: "/images/hero/plat_op.png",
      image: "/images/hero/wordpress.png",
      imageAlt: "WordPress",
      delay: "0.3s",
      imagePosition: { top: '-3%', right: '7%' },
      imageSize: { width: 100, height: 100 }
    }
  ];

  return (
    <section 
      className="bg-[#092346] flex-1 flex items-center justify-center relative"
    >
      {/* Add floating animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .floating-image {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Platform images with absolute positioning */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Right side images - original */}
        {rightPlatforms.map((item, index) => (
          <div 
            key={`right-${index}`}
            className={`absolute ${item.position} md:w-1/2 h-auto`}
            style={getAnimationStyle(item.delay)}
          >
            <Image 
              src={item.platform}
              alt="Platform"
              width={200}
              height={400}
              className="object-contain"
              priority
            />
            
            <div 
              className="absolute" 
              style={item.imagePosition}
            >
              <div className={isLoaded ? "floating-image" : ""} style={{ animationDelay: item.delay }}>
                <Image 
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageSize.width}
                  height={item.imageSize.height}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left side images - mirrored */}
      <div className="absolute inset-0 overflow-hidden hidden md:block" style={{ transform: 'scaleX(-1)' }}>
        {leftPlatforms.map((item, index) => (
          <div 
            key={`left-${index}`}
            className={`absolute ${item.position} md:w-1/2 h-auto`}
            style={getAnimationStyle(item.delay)}
          >
            <Image 
              src={item.platform}
              alt="Platform"
              width={200}
              height={400}
              className="object-contain"
              priority
            />
            
            <div 
              className="absolute" 
              style={item.imagePosition}
            >
              <div className={isLoaded ? "floating-image" : ""} style={{ animationDelay: item.delay }}>
                <Image 
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageSize.width}
                  height={item.imageSize.height}
                  className="object-contain"
                  style={{ transform: 'scaleX(-1)' }} /* Counter the parent's mirror effect */
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-white text-center">
        <h1 className="text-6xl font-bold mb-2 text-[#3684FF]">حلول</h1>
        <p className="text-3xl mb-2">استضافات الويب المثالية</p>
        <p className="text-l mb-8 max-w-96 mx-auto text-[#CED3DA]">شركة العنكبوت الليبي هي الشركة الرائدة في تقديم حلول التكنولوجيا
        والخدمات السحابية في ليبيا.</p>
        <div className="w-full px-4 mx-auto mb-8">
          <div className="w-full md:w-[32rem] lg:w-[36rem] xl:w-[36rem] mx-auto flex bg-white items-center rounded-full overflow-hidden p-1">
            <input
              type="text"
              placeholder="Search for a new domain"
              className="w-full px-6 py-3 focus:outline-none text-gray-700 rtl"
              dir="rtl"
            />
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-full mx-1 transition-colors flex items-center justify-center"
            >
              <span className="text-2xl">بحث</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/images/hero/certi.png" alt="Certifications" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 