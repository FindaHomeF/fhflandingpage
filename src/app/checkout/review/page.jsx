'use client'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Check, MapPin, Phone, Mail, CreditCard, Lock } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

export default function ReviewPage() {
  const router = useRouter()
  const { cart, cartCount, cartTotal, clearCart } = useCart()

  const handlePlaceOrder = () => {
    // Clear cart and redirect to success page
    clearCart()
    router.push('/checkout/success')
  }

  const subtotal = cartTotal
  const deliveryFee = 1000
  const total = subtotal + deliveryFee

  if (cartCount === 0) {
    router.push('/cart')
    return null
  }

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <Link href="/checkout/payment" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Payment
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Review Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Your Order</h1>
              <p className="text-gray-600 mb-8">Please review all details before placing your order</p>

              <div className="space-y-6">
                {/* Delivery Address */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Delivery Address
                  </h2>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-1">John Doe</p>
                    <p className="text-sm">123 Hostel Street</p>
                    <p className="text-sm">Akure, Ondo State</p>
                    <p className="text-sm mt-2">08012345678</p>
                    <p className="text-sm">john@example.com</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Change Address
                  </Button>
                </div>

                {/* Payment Method */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Payment Method
                  </h2>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Credit/Debit Card</p>
                      <p className="text-sm text-gray-600">**** **** **** 3456</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change Payment
                    </Button>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6">Order Items ({cartCount})</h2>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={`${item.type}-${item.id}`} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <Image
                            src={item.image || '/declutter1.png'}
                            alt={item.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold line-clamp-1 mb-1">{item.title || item.category}</h4>
                          {item.category && (
                            <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                          )}
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                            <span className="font-bold text-primary">
                              ₦{((item.price || 0) * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-2">By placing this order, I agree to:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Terms of Service and Privacy Policy</li>
                        <li>Accept the delivery terms and conditions</li>
                        <li>Verify the item condition upon delivery</li>
                        <li>Contact seller within 24 hours for any issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <Lock className="w-4 h-4 text-primary" />
                <span>Your order is secured with SSL encryption</span>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cartCount} items)</span>
                    <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span className="font-medium">₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₦{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  onClick={handlePlaceOrder}
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold mb-3"
                >
                  Place Order
                </Button>

                <Link href="/cart">
                  <Button variant="outline" className="w-full h-12">
                    Cancel Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
