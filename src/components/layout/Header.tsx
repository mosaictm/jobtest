"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import NavItem from '../common/NavItem';
import CountryDropdown from '../common/CountryDropdown';

// Define interfaces for navigation items
interface NavItemData {
  id: number;
  label: string;
  icon?: string;
  iconAlt?: string;
}

interface Country {
  code: string;
  name: string;
  flag: string;
}

// Available countries data
const COUNTRIES: Country[] = [
  { code: 'sa', name: 'Saudi Arabia', flag: '/images/flags/ksa.png' },
  { code: 'us', name: 'United States', flag: '/images/flags/usa.png' },
  { code: 'uk', name: 'United Kingdom', flag: '/images/flags/uk.png' },
  { code: 'tr', name: 'Turkey', flag: '/images/flags/tur.png' },
  { code: 'ph', name: 'Philippines', flag: '/images/flags/fil.png' },
  { code: 'de', name: 'Germany', flag: '/images/flags/germany.png' },
  { code: 'it', name: 'Italy', flag: '/images/flags/itlay.png' },
  { code: 'kr', name: 'Korea', flag: '/images/flags/korea.png' },
  { code: 'sd', name: 'Sudan', flag: '/images/flags/sudan.png' },
  { code: 'ae', name: 'United Arab Emirates', flag: '/images/flags/uae.png' },
];

// Upper navigation items data (excluding country)
const UPPER_NAV_LEFT: NavItemData[] = [
  { id: 2, label: 'Login', icon: '/icons/login.svg', iconAlt: 'Login icon' },
  { id: 1, label: 'Register', icon: '/icons/register.svg', iconAlt: 'Register icon' },
];

const UPPER_NAV_RIGHT: NavItemData[] = [
  { id: 5, label: '+880181239633', icon: '/icons/phone.svg', iconAlt: 'Phone icon' },
  { id: 4, label: 'info@doorsoft.com', icon: '/icons/email.svg', iconAlt: 'Email icon' },
];

// Main navigation items data
const MAIN_NAV_ITEMS: NavItemData[] = [
  { id: 1, label: 'الاستضافات' },
  { id: 2, label: 'النطافات' },
  { id: 3, label: 'الخوادم' },
  { id: 4, label: 'المجالات' },
  { id: 5, label: 'الشركة' },
  { id: 6, label: '?' }
];

const Header: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define isMobile threshold
  const MOBILE_BREAKPOINT = 768;  // Match with sm: breakpoint in Tailwind

  // Handle window resize to detect mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Check on initial load
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Handle scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTopMenu = () => {
    setTopMenuOpen(!topMenuOpen);
  };

  return (
    <>
      {/* Upper NavBar - STICKY with blur on scroll */}
      <div 
        style={{ direction: 'ltr' }} 
        className={`
          w-full fixed top-0 z-[1000] transition-all duration-300
          ${isScrolled 
            ? 'bg-opacity-85 bg-gray-50 backdrop-blur-md shadow-sm' 
            : 'bg-gray-50'
          }
        `}
      >
        {/* Mobile top menu button - only visible on small screens */}
        <div className="sm:hidden flex justify-between items-center px-6 py-3">
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleTopMenu}
            aria-label="Toggle top menu"
            aria-expanded={topMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={topMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          
          <div className="flex items-center">
            <CountryDropdown 
              selectedCountry={selectedCountry}
              countries={COUNTRIES}
              onChange={setSelectedCountry}
            />
          </div>
        </div>

        {/* Desktop top navbar - always visible on desktop, togglable on mobile */}
        <div className={`${isMobile ? (topMenuOpen ? 'block' : 'hidden') : 'block'} w-full transition-all duration-300`}>
          <NavBar className="bg-transparent py-5 flex-col sm:flex-row">
            <div className="hidden sm:flex gap-4">
              {UPPER_NAV_RIGHT.map((item) => (
                <NavItem 
                  key={item.id}
                  icon={item.icon}
                  iconAlt={item.iconAlt}
                  main="text-black"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
            
            {/* Mobile version of top navbar */}
            <div className="sm:hidden flex flex-col space-y-3 w-full">
              {UPPER_NAV_RIGHT.map((item) => (
                <NavItem 
                  key={item.id}
                  icon={item.icon}
                  iconAlt={item.iconAlt}
                  main="text-black"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
            
            <div className="hidden sm:flex gap-4">
              <CountryDropdown 
                selectedCountry={selectedCountry}
                countries={COUNTRIES}
                onChange={setSelectedCountry}
              />
              {UPPER_NAV_LEFT.map((item) => (
                <NavItem 
                  key={item.id}
                  icon={item.icon}
                  iconAlt={item.iconAlt}
                  main="text-black"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
            
            {/* Mobile version of login/register links */}
            <div className="sm:hidden flex flex-col space-y-3 w-full mt-3 border-t border-gray-200 pt-3">
              {UPPER_NAV_LEFT.map((item) => (
                <NavItem 
                  key={item.id}
                  icon={item.icon}
                  iconAlt={item.iconAlt}
                  main="text-black"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
          </NavBar>
        </div>
      </div>
      
      {/* Main NavBar - NOT sticky, but maintains its position below the top navbar */}
      <header className="bg-[#092346] w-full relative mt-[70px] sm:mt-[80px]">
        <NavBar className="border-none py-4 sm:py-6">
          <div className="flex items-center bg-transparent">
            <div className="h-12 sm:h-16">
              {!logoError ? (
                <Image 
                  src="/images/logo/logo.svg"
                  alt="DoorSoft Logo"
                  width={isMobile ? 140 : 180}
                  height={isMobile ? 45 : 60}
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Image 
                  src="/images/logo/logo.png"
                  alt="DoorSoft Logo"
                  width={isMobile ? 140 : 180}
                  height={isMobile ? 45 : 60}
                  priority
                />
              )}
            </div>
          </div>
          
          {/* Hamburger menu for mobile */}
          <div className="sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none p-1"
              aria-label="Toggle main menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation - hidden on mobile */}
          <nav aria-label="Main Navigation" className="hidden sm:block">
            <div className="flex gap-4">
              {MAIN_NAV_ITEMS.map((item) => (
                <NavItem main={'text-white font-thin'} key={item.id}>{item.label}</NavItem>
              ))}
            </div>
          </nav>
        </NavBar>
        
        {/* Mobile menu dropdown - with smooth animation */}
        <div 
          className={`sm:hidden bg-[#0d2d5a] text-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col py-2">
            {MAIN_NAV_ITEMS.map((item) => (
              <div className="py-3 px-6 border-b border-blue-800 last:border-b-0" key={item.id}>
                <NavItem main={'text-white font-thin'}>
                  {item.label}
                </NavItem>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 