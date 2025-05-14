import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-6 border-t border-gray-200">
      <div className="w-full text-center">
        <p className="mb-2">© 2023 Your Company. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 