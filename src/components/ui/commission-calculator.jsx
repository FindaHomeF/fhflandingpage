'use client'
import React from 'react'

// Commission rates
export const COMMISSION_RATES = {
  APARTMENT: 0.05, // 5%
  SERVICE: 0.10, // 10%
  DECLUTTERING: 0.10, // 10%
}

const CommissionCalculator = ({ 
  price, 
  type = 'apartment', // 'apartment', 'service', 'decluttering'
  isAdmin = false,
  className = ''
}) => {
  // Don't show commission for admin listings
  if (isAdmin) {
    return null
  }

  const rate = COMMISSION_RATES[type.toUpperCase()] || COMMISSION_RATES.APARTMENT
  const numericPrice = typeof price === 'string' 
    ? parseFloat(price.replace(/[₦,]/g, '')) || 0 
    : parseFloat(price) || 0

  const commission = numericPrice * rate
  const payout = numericPrice - commission

  if (numericPrice <= 0) {
    return null
  }

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
      <h4 className="text-sm font-semibold text-blue-900 mb-3">Commission Breakdown</h4>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Listing Price:</span>
          <span className="font-medium text-gray-900">{formatCurrency(numericPrice)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Commission ({rate * 100}%):</span>
          <span className="font-medium text-red-600">-{formatCurrency(commission)}</span>
        </div>
        <div className="border-t border-blue-300 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-blue-900">Your Payout:</span>
            <span className="font-bold text-green-600 text-base">{formatCurrency(payout)}</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-blue-700 mt-3">
        * Commission is deducted from the listing price. You'll receive the payout amount after successful sale.
      </p>
    </div>
  )
}

export default CommissionCalculator

