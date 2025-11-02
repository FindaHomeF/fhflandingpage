'use client';
import { useState } from 'react';

export default function RevenueDistributionChart() {
  const [activeSegment, setActiveSegment] = useState(null);
  
  // Mock data for revenue distribution
  const data = [
    { name: 'Properties', value: 45, color: '#3b82f6', percentage: 45 },
    { name: 'Services', value: 30, color: 'var(--secondary)', percentage: 30 },
    { name: 'Items', value: 25, color: 'var(--tertiary)', percentage: 25 },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 100);
  const radius = 80;
  const centerX = 50;
  const centerY = 50;

  // Calculate SVG paths for circular pie segments
  const calculatePath = (startAngle, endAngle) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  // Calculate angles for each segment - starting from different positions to create circular layout
  let cumulativeAngle = -90; // Start from top
  const segments = data.map((item, index) => {
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + (item.percentage * 360 / 100);
    cumulativeAngle = endAngle;
    
    return {
      ...item,
      startAngle,
      endAngle,
      path: calculatePath(startAngle, endAngle),
      labelAngle: (startAngle + endAngle) / 2 // For label positioning
    };
  });

  return (
    <div className="bg-white rounded-2xl p-8 py-5 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">Revenue Distribution</h3>
      </div>

      <div className='flex items-center gap-x-7 w-full'>    
        {/* Chart Container */}
        <div className="relative flex">
          <div className="flex justify-center items-center h-64">
            <div className="relative w-64 h-64 rounded-full">
              <svg className="w-full h-full rounded-full" viewBox="0 0 100 100">
                {segments.map((segment, index) => (
                  <g key={segment.name}>
                    <path
                      d={segment.path}
                      fill={segment.color}
                      stroke={activeSegment === index ? '#ffffff' : 'none'}
                      strokeWidth={activeSegment === index ? 3 : 0}
                      className="transition-all duration-300 cursor-pointer"
                      style={{
                        filter: activeSegment === index ? 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        transform: activeSegment === index ? 'scale(1.05)' : 'scale(1)',
                        transformOrigin: 'center'
                      }}
                      onMouseEnter={() => setActiveSegment(index)}
                      onMouseLeave={() => setActiveSegment(null)}
                    />
                    
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-1">
          {data.map((item, index) => (
            <div 
              key={item.name}
              className={`flex items-center justify-between p-1 rounded-xl transition-all duration-200 cursor-pointer ${
                activeSegment === index 
                  ? 'bg-gray-50 border border-black10 shadow-sm' 
                  : 'hover:border-black10'
              }`}
              onMouseEnter={() => setActiveSegment(index)}
              onMouseLeave={() => setActiveSegment(null)}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-2 h-2 rounded-full transition-transform duration-200"
                  style={{ 
                    backgroundColor: item.color,
                    transform: activeSegment === index ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
                <div className='text-xs flex-itc-jub gap-x-5 w-full'>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  {/* <p className="text-xs text-gray-500">{item.percentage}% of total</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Interactive Tooltip */}
      {activeSegment !== null && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-gray-200/50 rounded-xl shadow-xl ring-1 ring-gray-900/5 z-10">
          <div className="flex items-center gap-3">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: data[activeSegment].color }}
            />
            <div>
              <p className="font-semibold text-gray-900 text-sm">{data[activeSegment].name}</p>
              <p className="text-xs text-gray-600">
                {data[activeSegment].value}K ({data[activeSegment].percentage}%)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}