"use client"

import React from 'react';
import Image from 'next/image';

// Define proper interfaces
interface BigPartnerData {
  name: string;
  logo: string;
  description: string;
  imagePath: string;
}

interface SmallPartnerData {
  name: string;
  logo: string;
}

// Big Partner Card component
const BigPartnerCard: React.FC<BigPartnerData> = ({ name, logo, description, imagePath }) => (
  <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="grid grid-cols-2 grid-rows-8 gap-4 h-full pt-10">
      {/* 1: Image (rows 1-4) */}
      <div className="col-span-2 row-span-4 relative">
        <Image 
          src={imagePath}
          alt={name}
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* 2-4: Content (rows 5-8) */}
      <div className="col-span-2 row-span-4 row-start-5 p-4 flex flex-col">
        {/* 2: Name */}
        <h3 className="text-xl font-bold mb-3 text-center">{name}</h3>
        
        {/* 3: Description */}
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        
        {/* 4: Show Details Button */}
        <div className="mt-auto">
          <button 
            className="w-full py-2 px-4 rounded-md transition-colors"
            type="button"
            aria-label={"عرض المزيد"}
          >
            عرض المزيد
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Small Partner Card component
const SmallPartnerCard: React.FC<SmallPartnerData> = ({ name, logo }) => (
  <div className="bg-white rounded-lg border-2 border-gray-200 p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
      <span className="text-2xl">{logo}</span>
    </div>
    <h4 className="text-sm font-medium text-center">{name}</h4>
  </div>
);

// Data moved outside component to avoid recreation on each render
const MAJOR_PARTNERS: BigPartnerData[] = [
  {
    name: "شركة تقنية المعلومات المتقدمة",
    logo: "💻",
    description: "شريك استراتيجي في مجال البنية التحتية والخدمات السحابية المتكاملة منذ أكثر من 10 سنوات.",
    imagePath: "/images/partners/1.png"
  },
  {
    name: "مجموعة الحلول الرقمية",
    logo: "🌐",
    description: "شريك رئيسي في تقديم حلول الأمن السيبراني وحماية البيانات للشركات والمؤسسات.",
    imagePath: "/images/partners/2.png"
  },
  {
    name: "شركة الإبداع التقني",
    logo: "🚀",
    description: "شريك في تطوير التطبيقات والبرمجيات المخصصة للمؤسسات الحكومية والشركات الكبرى.",
    imagePath: "/images/partners/3.png"
  }
];

const MINOR_PARTNERS: SmallPartnerData[] = [
  { name: "تقنية بلس", logo: "🔧" },
  { name: "سمارت تك", logo: "📱" },
  { name: "ديجيتال ويف", logo: "🌊" },
  { name: "إنفو سوليوشنز", logo: "ℹ️" },
  { name: "تك هب", logo: "🔌" },
  { name: "سيرفر وان", logo: "🖥️" },
  { name: "ويب ماستر", logo: "🕸️" },
  { name: "كلاود سيكيور", logo: "☁️" },
  { name: "نتورك برو", logo: "📡" },
  { name: "داتا سنتر", logo: "💾" }
];

const PartnersSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">شركاؤنا</h2>
          <p className="text-xl text-gray-600">نفكر بشراكاتنا مع رواد التكنلوجيا لتقديم حلول استضافة آمنو وموثوقة تدعم نمو اعمال عملائنا و تحقيف أهدافهم في العالم الرقمي</p>
        </div>

        {/* Major Partners */}
        <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAJOR_PARTNERS.map((partner, index) => (
              <BigPartnerCard
                key={index}
                {...partner}
              />
            ))}
          </div>
        </div>

        {/* Minor Partners */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {MINOR_PARTNERS.map((partner, index) => (
              <SmallPartnerCard
                key={index}
                {...partner}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection; 