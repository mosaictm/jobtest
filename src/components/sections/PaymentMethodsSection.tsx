import React from 'react';
import Image from 'next/image';

const PaymentMethodsSection: React.FC = () => {
  return (
    <div className="w-full py mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center font-bold mb-8">طرق الدفع</h2>
        <div className="flex bg-gray-50 items-center justify-between h-[6rem] px-4">
          {/* Left side plats.png */}
          <div className="flex-shrink-0 w-24 h-24 relative scale-y-[-1]">
            <Image 
              src="/images/payment/plats.png"
              alt="طرق الدفع"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Center content */}
          <div className="flex flex-1 flex-col md:flex-row items-center justify-center space-x-2 mx-4">
            <div className="md:w-auto mb-6 md:mb-0 text-center md:text-right md:mr-4">
              <p className="text-lg">ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى</p>
            </div>
            <div className="flex justify-center md:w-auto">
              <div className="w-full max-w-sm">
                <Image 
                  src="/images/payment/pay.png"
                  alt="طرق الدفع"
                  width={500}
                  height={80}
                  className="object-contain w-full"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Right side plats.png */}
          <div className="flex-shrink-0 w-24 h-24 relative">
            <Image 
              src="/images/payment/plats.png"
              alt="طرق الدفع"
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

export default PaymentMethodsSection; 