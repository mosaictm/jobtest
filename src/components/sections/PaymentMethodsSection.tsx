import React from 'react';
import Image from 'next/image';

const PaymentMethodsSection: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-10 mt-8 md:mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-6 md:mb-8">طرق الدفع</h2>
        <div className="flex flex-col md:flex-row bg-gray-50 items-center md:justify-between rounded-lg py-6 md:py-0 md:h-[6rem] px-4">
          {/* Left side plats.png - hidden on mobile, shown on md and up */}
          <div className="hidden md:block flex-shrink-0 w-24 h-24 relative scale-y-[-1]">
            <Image 
              src="/images/payment/plats.png"
              alt="طرق الدفع"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Center content */}
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-2 md:flex-row w-full md:w-auto md:flex-1 mx-0 md:mx-4">
            <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-right md:mr-4">
              <p className="text-base md:text-lg px-4 md:px-0">ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى</p>
            </div>
            <div className="flex justify-center w-full md:w-auto">
              <div className="w-full max-w-xs md:max-w-sm">
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
          
          {/* Right side plats.png - hidden on mobile, shown on md and up */}
          <div className="hidden md:block flex-shrink-0 w-24 h-24 relative">
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