"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BigServiceCard from '../common/BigServiceCard';

// Define interfaces for props and data (keeping for reference but no longer used)
interface ServiceCardData {
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Categories data
const CATEGORIES = [
  'خدمات الاستضافة',
  'الخوادم المخصصة',
  'حلول البرمجية'
];

// Updated service data structure with image paths
const BIG_SERVICE_DATA = [
  // Category 1 - Hosting Services
  [
    {
      id: 1,
      title: 'استضافة المواقع',
      description: 'استضافة سريعة وآمنة لمواقع الويب مع دعم فني على مدار الساعة',
      imageSrc: '/images/bigservices/server.png',
      imageAlt: 'استضافة المواقع',
    },
    {
      id: 2,
      title: 'استضافة ووردبريس',
      description: 'استضافة مُحسنة خصيصًا لمواقع ووردبريس مع تحديثات تلقائية',
      imageSrc: '/images/bigservices/cloud.png',
      imageAlt: 'استضافة ووردبريس',
    },
    {
      id: 3,
      title: 'استضافة المتاجر الإلكترونية',
      description: 'حلول استضافة متكاملة للمتاجر الإلكترونية عالية الأداء',
      imageSrc: '/images/bigservices/mail.png',
      imageAlt: 'استضافة المتاجر الإلكترونية',
    }
  ],
  // Category 2 - Dedicated Servers
  [
    {
      id: 4,
      title: 'خوادم لينكس المخصصة',
      description: 'خوادم مخصصة قوية تعمل بنظام Linux مع تحكم كامل',
      imageSrc: '/images/bigservices/server.png',
      imageAlt: 'خوادم لينكس المخصصة',
    },
    {
      id: 5,
      title: 'خوادم ويندوز المخصصة',
      description: 'خوادم مخصصة عالية الأداء تعمل بنظام Windows Server',
      imageSrc: '/images/bigservices/cloud.png',
      imageAlt: 'خوادم ويندوز المخصصة',
    },
    {
      id: 6,
      title: 'الخوادم السحابية',
      description: 'خوادم سحابية قابلة للتوسع مع توافرية عالية وأمان متقدم',
      imageSrc: '/images/bigservices/mail.png',
      imageAlt: 'الخوادم السحابية',
    }
  ],
  // Category 3 - Software Solutions
  [
    {
      id: 7,
      title: 'تطوير تطبيقات الويب',
      description: 'تطوير تطبيقات ويب احترافية متوافقة مع كافة الأجهزة',
      imageSrc: '/images/bigservices/server.png',
      imageAlt: 'تطوير تطبيقات الويب',
    },
    {
      id: 8,
      title: 'تطوير تطبيقات الجوال',
      description: 'تطوير تطبيقات للهواتف الذكية متعددة المنصات مع واجهة سهلة',
      imageSrc: '/images/bigservices/cloud.png',
      imageAlt: 'تطوير تطبيقات الجوال',
    },
    {
      id: 9,
      title: 'حلول الأمن السيبراني',
      description: 'خدمات حماية البيانات والمواقع مع دعم للتشفير والحماية المتقدمة',
      imageSrc: '/images/bigservices/mail.png',
      imageAlt: 'حلول الأمن السيبراني',
    }
  ]
];

const BigServicesSection: React.FC = () => {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState(0);
  // State for animation
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedCategory, setDisplayedCategory] = useState(0);
  // State to track animation direction
  const [slideDirection, setSlideDirection] = useState('right');

  // Handle category change with animation
  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    
    // Determine slide direction
    setSlideDirection(index > activeCategory ? 'right' : 'left');
    setIsAnimating(true);
    setActiveCategory(index);
    
    // After a shorter delay to allow exit animation, update displayed category
    setTimeout(() => {
      setDisplayedCategory(index);
      // Allow cards to animate in
      setTimeout(() => {
        setIsAnimating(false);
      }, 30);
    }, 200);
  };

  // Initialize displayed category on first render
  useEffect(() => {
    setDisplayedCategory(activeCategory);
  }, []);

  return (
    <div className="w-full py-8 mb-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4">خدمات كبيرة تلبي احتياجات عملك</h2>
          <p className="text-xl text-gray-600">من خلال منتجاتنا وخدماتنا السحابية، ستجد بأننا نلبي 100٪ من احتياجات عملك والبيانات، مع أمان فائق للبنية التحتية الخاصة بك.</p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 rounded-xl shadow-md p-1 flex">
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-white text-black'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleCategoryChange(index)}
                type="button"
                aria-pressed={activeCategory === index}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid with Animation - Changed from absolute to relative positioning */}
        <div className="pb-4">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-200 ease-in-out ${
              isAnimating 
                ? `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-20' : '-translate-x-20'}`
                : 'opacity-100 translate-x-0'
            }`}
          >
            {BIG_SERVICE_DATA[displayedCategory].map((service, index) => (
              <div 
                key={service.id}
                className="transform transition-all duration-200 ease-in-out"
                style={{ 
                  transitionDelay: isAnimating ? '0s' : `${index * 0.05}s`
                }}
              >
                <BigServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigServicesSection; 