import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PaymentMethodsSection from '../components/sections/PaymentMethodsSection';
import ServerLocationsSection from '../components/sections/ServerLocationsSection';
import BigServicesSection from '../components/sections/BigServicesSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClientDashboardSection from '@/components/sections/ClientDashboardSection';

export default function Home() {
  return (
    <div dir="rtl" className="flex flex-col w-full font-[family-name:var(--font-geist-sans)] bg-white text-gray-800">
      {/* This wrapper ensures Header + HeroSection = 100vh */}
      <div className="h-screen flex flex-col">
        <Header />
        <HeroSection />
      </div>
      
      {/* Separator */}
      <div className="h-4 bg-gray-300 w-full"></div>
      
      <main className="flex-1 bg-gray-100">
        <ServicesSection />
        <PaymentMethodsSection />
        <ServerLocationsSection />
        <BigServicesSection />
        <ClientDashboardSection />
        <PartnersSection />
        <TestimonialsSection />
      </main>
    
    </div>
  );
}
