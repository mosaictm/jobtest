import React from 'react';
import Image from 'next/image';

interface NavItemProps {
  children: React.ReactNode;
  icon?: string; // Path to the icon in public folder
  iconAlt?: string; // Alt text for the icon
  main: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, icon, iconAlt = '', main = 'text-black'}) => (
  <div className="flex items-center justify-center gap-2 px-3 h-10 rounded-md text-black font-bold" style={{ direction: 'ltr' }}>
    {icon && (
      <div className="flex items-center justify-center w-5 h-5">
        <Image 
          src={icon} 
          alt={iconAlt || `${children} icon`} 
          width={20} 
          height={20}
        />
      </div>
    )}
    <span className={`${main}`}>{children}</span>
  </div>
);

export default NavItem; 