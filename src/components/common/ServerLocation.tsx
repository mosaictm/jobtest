"use client";

import React from 'react';
import Image from 'next/image';

interface ServerLocationProps {
  name: string;
  flag: string;
  ping?: number; // Optional ping value
}

const ServerLocation: React.FC<ServerLocationProps> = ({ name, flag, ping }) => (
  <div className="parent shadow-lg">
    <div className="div1">
      <Image
        src={flag}
        alt={name}
        width={60}
        height={60}
        className="rounded"
      />
    </div>
    <div className="div2">
      {name}
    </div>
    <div className="div3">
      {ping !== undefined ? (
        <span className="text-green-500">{ping} ms</span>
      ) : (
        <span className="text-gray-400">قريباً</span>
      )}
    </div>
    <style jsx>{`
      .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 8px;
        border-radius: 8px;
        background-color: #f8f9fa;
        min-height: 120px;
      }
      
      .div1 {
        grid-row: span 4 / span 4;
        grid-column-start: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .div2 {
        grid-row-start: 2;
        display: flex;
        align-items: center;
        font-weight: 500;
      }
      
      .div3 {
        grid-row-start: 3;
        display: flex;
        align-items: center;
        font-size: 0.875rem;
      }
    `}</style>
  </div>
);

export default ServerLocation; 