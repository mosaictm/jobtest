"use client"

import React from 'react';
import Image from 'next/image';

// Define the props interface
interface ServiceCardProps {
  title: string;
  description: string;
  imagePath: string;
}

// ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imagePath }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image 
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Sample service data
const SERVICES_DATA = [
  {
    title: "استضافة المواقع",
    description: "استضافة مواقع الويب بأحدث التقنيات وبأسعار تنافسية مع دعم فني متميز على مدار الساعة.",
    imagePath: "/images/bigservices/hosting.jpg"
  },
  {
    title: "الخوادم المخصصة",
    description: "خوادم مخصصة بأداء عالي وإمكانيات متطورة لتلبية احتياجات الأعمال الكبيرة والمتوسطة.",
    imagePath: "/images/bigservices/server.jpg"
  },
  {
    title: "تطوير المواقع",
    description: "تصميم وتطوير مواقع الويب بأحدث التقنيات والمعايير العالمية مع تجربة مستخدم متميزة.",
    imagePath: "/images/bigservices/webdev.jpg"
  },
  {
    title: "الاستضافة السحابية",
    description: "خدمات سحابية متكاملة بمرونة عالية وقابلية للتوسع لتناسب مختلف احتياجات الأعمال.",
    imagePath: "/images/bigservices/cloud.jpg"
  },
  {
    title: "حلول البريد الإلكتروني",
    description: "بريد إلكتروني احترافي للشركات مع حماية متقدمة من البريد المزعج والفيروسات.",
    imagePath: "/images/bigservices/mail.jpg"
  },
  {
    title: "اسماء النطاقات",
    description: "تسجيل وإدارة اسماء النطاقات مع مجموعة واسعة من الامتدادات ونظام إدارة سهل الاستخدام.",
    imagePath: "/images/bigservices/domain.jpg"
  }
];

// Main component
const BigServiceCardsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imagePath={service.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigServiceCardsSection; 