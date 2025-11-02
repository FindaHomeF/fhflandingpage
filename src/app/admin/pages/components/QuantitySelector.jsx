'use client'
import React from 'react'
import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 10,
  className = ""
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors border-black10 ${
            value <= min
              ? ' text-gray-400 cursor-not-allowed'
              : ' text-gray-600 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="w-8 text-center text-sm font-medium text-gray-900">
          {value}
        </span>
        
        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors border-black10 ${
            value >= max
              ? ' text-gray-400 cursor-not-allowed'
              : ' text-gray-600 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default QuantitySelector
