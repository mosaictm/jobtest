import React from 'react';
import Image from 'next/image';

const PaymentMethodsSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-10 mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-2">طرق الدفع</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-6 md:mb-0 text-center md:text-right">
            <p className="text-lg">ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى</p>
          </div>
          <div className="flex justify-end md:w-2/3">
            <div className="w-full max-w-md">
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
      </div>
    </div>
  );
};

export default PaymentMethodsSection; 