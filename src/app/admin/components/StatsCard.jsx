'use client';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import { BarChart3 } from 'lucide-react';

export default function StatsCard({ title, value, change, icon: Icon, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-primary',
    orange: 'bg-secondary',
    green: 'bg-secondary',
  };

  return (
    <div className={`${colorClasses[color]} rounded-3xl p-5 text-white cursor-pointer `}>
      <div className="flex items-center justify-between">
        <div className='space-y-4'>
          <p className={`text-base font-medium text-white/80 text-nowrap ${value.length > 10 ? 'truncate w-[90%]' : ''}`}>{title}</p>
          <p className="text-xl font-semibold text-white mt-1">{value}</p>
        </div>
        
        <div className="bg-white/20 flex-shrink-0 rounded-lg space-y-4 cursor-pointer flex flex-col items-center justify-between">
          <div className={`w-12 h-8 flex -mt-1 items-center justify-center border border-t-[#FFFFFF66] border-b-[#FFFFFF00] border-l-[#FFFFFF1A] border-r-[#FFFFFF00] rounded-full bg-${colorClasses[color]}/30 backdrop-blur-[3px] shadow-inner shadow-[#0000001A] `}>
            {change > 0 ? <FaArrowTrendUp className="w-4 h-4 text-white drop-shadow-[0_1.5px_6px_rgba(255,255,255,0.3)]" /> : change == 0 || change == null ? <BarChart3 className="w-4 h-4 text-white drop-shadow-[0_1.5px_6px_rgba(255,255,255,0.3)]"/> : <FaArrowTrendDown className="w-4 h-4 text-white drop-shadow-[0_1.5px_6px_rgba(255,255,255,0.3)]" />}
          </div>
          <p className="text-sm text-white/60 mt-1">{change}%</p>
        </div>
      </div>
    </div>
  );
}

