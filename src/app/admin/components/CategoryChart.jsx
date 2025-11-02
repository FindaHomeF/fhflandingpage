'use client';
import { useState } from 'react';

export default function CategoryChart({ title, data, color }) {
  const [activeBar, setActiveBar] = useState(null);
  
  // Mock data for apartment categories with actual values


  const maxValue = 60;

  return (
    <div className="bg-white rounded-lg p-8 py-5 shadow-sm ">
      <h3 className="text-lg font-semibold text-gray-800 mb-20">{title}</h3>
      
      {/* Chart Container */}
      <div className="relative h-48">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>
        
        {/* Chart Area */}
        <div className="ml-8 mr-4 h-full relative">
          {/* Grid lines - matching RevenueChart styling */}
          <div className="absolute inset-0">
            {[0, 20, 40, 60].map((value, index) => (
              <div
                key={index}
                className="absolute w-full border-t border-black10"
                style={{ top: `${(60 - value) * (100/60)}%` }}
              />
            ))}
          </div>
          
          {/* Bars */}
          <div className="absolute bottom-0 w-full h-full flex items-end justify-between px-2">
            {data.map((category, index) => {
              // Calculate bar height as pixels instead of percentage
              const barHeightPixels = (category.value / maxValue) * 192; // 192px is h-48 (12rem)
              const barHeightPercent = (category.value / maxValue) * 100;
              
              return (
                <div key={category.name} className="flex flex-col items-center group relative">
                  {/* Bar */}
                  <div 
                    className="w-8 rounded-t transition-all duration-300 cursor-pointer relative"
                    style={{ 
                      height: `${Math.max(barHeightPixels, 8)}px`, // Minimum 8px height
                      backgroundColor: category.color,
                      transform: activeBar === index ? 'scale(1.05)' : 'scale(1)',
                      filter: activeBar === index ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                    onMouseEnter={() => setActiveBar(index)}
                    onMouseLeave={() => setActiveBar(null)}
                  >
                    {/* Value label on top of bar */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap">
                      {category.value}
                    </div>
                  </div>
                  
                  {/* Category name */}
                  <span className="text-xs text-gray-500 mt-2 text-center">{category.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}