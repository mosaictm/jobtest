"use client"

import React from 'react';
import Image from 'next/image';
import FoldableCard from '../common/FoldableCard';

const ClientDashboardSection: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 gap-6">
          {/* Column 1: Content elements 1-6 */}
          <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 mb-8 lg:mb-0">
            {/* 1: Small Header Text */}
            <div className="text-sm font-medium">
              لوحة خدمات المشتركين
            </div>
            
            {/* 2: Big Header Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">لوحة تحكم شاملة</h2>
            </div>
            
            {/* 3: Description Text */}
            <div className="pr-0 md:pr-4">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                لوحة تحكم مدارة بالكامل، سريعة الاستجابة وسهلة الاستخدام لإدارة جميع خدماتك السحابية.
              </p>
            </div>
            
            {/* 4: Foldable Card 1 */}
            <FoldableCard
              title="إدارة سهلة"
              description="واجهة بسيطة وسهلة الاستخدام تمكنك من إدارة خدماتك بكل سهولة ودون الحاجة إلى خبرة تقنية متقدمة."
            />
            
            {/* 5: Foldable Card 2 */}
            <FoldableCard
              title="تشغيل بنقرة واحدة"
              description="إمكانية تشغيل وإيقاف الخدمات بنقرة واحدة فقط، مع إمكانية جدولة المهام الروتينية بشكل تلقائي."
            />
            
            {/* 6: Foldable Card 3 */}
            <FoldableCard
              title="دعم فني متكامل"
              description="فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك في حل أي مشكلة قد تواجهها أثناء استخدام الخدمات."
            />
          </div>
          
          {/* Column 2-3: Image (Element 7) */}
          <div className="col-span-2 relative rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[600px]">
            <Image
              src="/images/bigservices/image.png"
              alt="لوحة تحكم المستخدم"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardSection; 