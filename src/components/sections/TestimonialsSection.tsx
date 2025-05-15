"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define proper interfaces for props
interface TestimonialData {
  name: string;
  position: string;
  company: string;
  quote: string;
}

interface ServiceCardProps {
  title: string;
  imagePath: string;
}

// Testimonial Card component
const TestimonialCard: React.FC<TestimonialData> = ({ 
  name, 
  position, 
  company, 
  quote,  
}) => (
  <div className="bg-white rounded-lg border-2 border-gray-200 p-3 h-full flex flex-col animate-fadeIn">
    {/* Top quotation mark */}
    <div className="mb-1">
      <Image 
        src="/images/testo/image.png"
        alt="Quotation mark"
        width={40}
        height={25}
        className="object-contain"
      />
    </div>
    
    {/* Testimonial text */}
    <div className="flex-grow my-1 overflow-hidden">
      <p className="text-gray-700 text-sm line-clamp-4">
        {quote}
      </p>
    </div>
    
    {/* Bottom section with quotation and person info */}
    <div className="flex items-center mt-1">
      {/* Bottom quotation mark */}
      <div className="mr-3">
        <Image 
          src="/images/testo/image.png"
          alt="Quotation mark"
          width={30}
          height={20}
          className="object-contain"
        />
      </div>
      
      {/* Person info */}
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-gray-600 text-xs">
          {position}, {company}
        </p>
      </div>
    </div>
  </div>
);

// Service Card component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, imagePath }) => (
  <div className="bg-white rounded-[2rem] shadow-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 h-full transform">
    <div className="w-16 h-16 relative mb-4 transition-transform duration-300 hover:rotate-6">
      <Image 
        src={imagePath} 
        alt={title}
        fill
        className="object-contain"
      />
    </div>
    <h4 className="text-center font-medium">{title}</h4>
  </div>
);

// Auto-scrolling Testimonials component
const TestimonialsCarousel: React.FC<{ testimonials: TestimonialData[] }> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-scroll testimonials every 5 seconds
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  return (
    <div className="h-full relative overflow-hidden rounded-[2rem] shadow-lg">
      <div 
        className="transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Testimonials data
const TESTIMONIALS_DATA: TestimonialData[] = [
  {
    name: "أحمد محمود",
    position: "مدير تكنولوجيا المعلومات",
    company: "شركة الخليج للتقنية",
    quote: "لقد وفرت لنا خدمات الاستضافة المتميزة بيئة آمنة وموثوقة لتشغيل أعمالنا. الدعم الفني متاح على مدار الساعة وسرعة الاستجابة مذهلة.", 
  },
  {
    name: "سارة الأحمد",
    position: "مديرة التسويق الإلكتروني",
    company: "مؤسسة الإبداع الرقمي",
    quote: "ساعدتنا خدمات استضافة المتاجر الإلكترونية في تحسين أداء موقعنا بشكل كبير، مما أدى إلى زيادة المبيعات بنسبة 40% خلال 3 أشهر فقط.",
  
  },
  {
    name: "محمد العتيبي",
    position: "مؤسس",
    company: "تك ستارت",
    quote: "الخوادم المخصصة تعمل بكفاءة عالية وبدون أي انقطاع. تجربتنا مع فريق الدعم كانت رائعة، والأسعار تنافسية جداً مقارنة بالخدمات المقدمة.",
   
  },
  {
    name: "نورة الشمري",
    position: "مديرة المشاريع",
    company: "دار الحلول البرمجية",
    quote: "استخدمنا خدمات تطوير التطبيقات لإنشاء تطبيق الهاتف الخاص بشركتنا. النتيجة كانت مذهلة من حيث التصميم والأداء وسهولة الاستخدام.",
  
  },
  {
    name: "عبدالله الفهد",
    position: "الرئيس التنفيذي",
    company: "مجموعة الفهد التجارية",
    quote: "نحن نتعامل مع هذه الشركة منذ أكثر من 5 سنوات، وقد قدموا لنا حلولاً متكاملة لاستضافة المواقع وتطوير التطبيقات وخدمات الأمن السيبراني.",
  
  }
];

// Service data with updated image paths
const SERVICES_DATA: ServiceCardProps[] = [
  {
    title: "وظائف",
    imagePath: "/images/testo/jobs.png"
  },
  {
    title: "مركز المساعدة",
    imagePath: "/images/testo/help.png"
  },
  {
    title: "حالة المخدّم",
    imagePath: "/images/testo/server.png"
  },
  {
    title: "خدمات المشتركين",
    imagePath: "/images/testo/subs.png"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="w-full py-4 md:py-8 mb-40  ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4 animate-fadeIn">
          <h2 className="text-5xl font-bold">آراء العملاء</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 1: Auto-scrolling testimonials (takes up 2 columns and 2 rows) */}
          <div className="col-span-1 md:col-span-2 h-[200px] md:h-[250px] md:row-span-1 animate-slideUp">
            <TestimonialsCarousel testimonials={TESTIMONIALS_DATA} />
          </div>
          
          {/* Other service cards - 2x2 grid on all screen sizes */}
          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-3 md:gap-4">
            {/* 2: Jobs (وظائف) */}
            <div className="h-[100px] md:h-[120px] animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <ServiceCard 
                title={SERVICES_DATA[0].title}
                imagePath={SERVICES_DATA[0].imagePath}
              />
            </div>
            
            {/* 3: Help Center (مركز المساعدة) */}
            <div className="h-[100px] md:h-[120px] animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <ServiceCard 
                title={SERVICES_DATA[1].title}
                imagePath={SERVICES_DATA[1].imagePath}
              />
            </div>
            
            {/* 4: Server Status (حالة المخدّم) */}
            <div className="h-[100px] md:h-[120px] animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <ServiceCard 
                title={SERVICES_DATA[2].title}
                imagePath={SERVICES_DATA[2].imagePath}
              />
            </div>
            
            {/* 5: Subscriber Services (خدمات المشتركين) */}
            <div className="h-[100px] md:h-[120px] animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <ServiceCard 
                title={SERVICES_DATA[3].title}
                imagePath={SERVICES_DATA[3].imagePath}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 