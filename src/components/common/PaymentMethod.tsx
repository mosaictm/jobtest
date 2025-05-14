import React from 'react';

interface PaymentMethodProps {
  name: string;
  icon: React.ReactNode;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center mx-3">
    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-1">
      {icon}
    </div>
    <span className="text-xs font-medium whitespace-nowrap">{name}</span>
  </div>
);

export default PaymentMethod; 