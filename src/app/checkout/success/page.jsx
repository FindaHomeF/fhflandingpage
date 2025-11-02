'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Package, Mail, Download, Home } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-12 md:py-20 flex items-center justify-center">
        <div className="w-[90%] mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-gray-500 mb-8">
            Your order has been received and is being processed. You'll receive a confirmation email shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-semibold text-lg mb-4">Order Details</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold">#ORD-2024-001234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-semibold">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-semibold text-primary">₦15,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold">2-3 business days</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-primary hover:bg-primary/90 px-8">
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
            <Button variant="outline" className="px-8">
              <Mail className="w-4 h-4 mr-2" />
              View Order Email
            </Button>
          </div>

          {/* Next Steps */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold mb-4">What's Next?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Order Confirmation</p>
                  <p className="text-sm text-gray-600">You'll receive an email confirmation with your order details within a few minutes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Seller Contact</p>
                  <p className="text-sm text-gray-600">The seller will contact you within 24 hours to arrange pickup/delivery.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Track Your Order</p>
                  <p className="text-sm text-gray-600">You can track your order status in your account dashboard.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="block">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/decluttering" className="block">
              <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
