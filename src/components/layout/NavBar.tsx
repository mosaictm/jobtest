import React from 'react';

interface NavBarProps {
  children: React.ReactNode;
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ children, className = '' }) => (
  <div className={`flex justify-between w-full h-full items-center px-6 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

export default NavBar; 