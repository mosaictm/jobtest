import React from 'react';
import ServiceCard from '../common/ServiceCard';

// Define interface for service data
interface ServiceData {
  id: number;
  title: string;
  description: string;
  color: string;
  src: string;
  alt: string;
}

// Services data - moved outside component to avoid recreation on each render
const SERVICES_DATA: ServiceData[] = [
  {
    id: 1,
    title: "الخوادم المخصصة",
    description: "استضافة مدارة وموثوقة وسريعة وفعالة من الناحية التقنية",
    color: "bg-[#F1B720]",
    src: "/images/services/cloudup.png",
    alt: "cloudup"
  },
  {
    id: 2,
    title: "الاستضافة السحابية المشتركة",
    description: "استضافة مدارة وموثوقة وسريعة وفعالة من الناحية التقنية",
    color: "bg-gray-300",
    src: "/images/services/phone1.png",
    alt: "phone1"
  },
  {
    id: 3,
    title: "استضافة المواقع",
    description: "استضافة مدارة وموثوقة وسريعة وفعالة من الناحية التقنية",
    color: "bg-[#2563EB]",
    src: "/images/services/cloud.png",
    alt: "cloud"
  },
  {
    id: 4,
    title: "VPS",
    description: "استضافة مدارة وموثوقة وسريعة وفعالة من الناحية التقنية",
    color: "bg-blue-500",
    src: "/images/services/vps.png",
    alt: "vps"
  },
  {
    id: 5,
    title: "النطاقات",
    description: "استضافة مدارة وموثوقة وسريعة وفعالة من الناحية التقنية",
    color: "bg-gray-500",
    src: "/images/services/cylender.png",
    alt: "cylender"
  },
  {
    id: 6,
    title: "رخصة لوحة التحكم",
    description: "استضافة مدارة وموثوقة وسريعة وفعالة من الناحية التقنية",
    color: "bg-[#0EA5E9]",
    src: "/images/services/projector.png",
    alt: "projector"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <div className="w-full px-4 py-10">
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="bg-[#320F61] mb-8 text-white text-5xl px-2 py-2 rounded-[1rem] shadow-xl mx-1 transition-colors flex items-center justify-center w-full max-w-xs"
        >خدماتنا</h2>
        <p className="text-5xl mb-8">اكتشف الخدمات المقدمة لك</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="flex justify-center">
            <ServiceCard 
              title={service.title}
              description={service.description}
              color={service.color}
              imageSrc={service.src}
              alt={service.alt}
              icon={<div className="w-20 h-20 bg-gray-200 rounded-lg"></div>}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection; 