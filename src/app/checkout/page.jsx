'use client'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, MapPin, Phone, Mail, CreditCard, Truck } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, cartCount, cartTotal } = useCart()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Akure',
    state: 'Ondo',
    deliveryMethod: 'pickup',
    paymentMethod: 'card',
    specialInstructions: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/checkout/payment')
  }

  const subtotal = cartTotal
  const deliveryFee = formData.deliveryMethod === 'delivery' ? 1000 : 0
  const total = subtotal + deliveryFee

  if (cartCount === 0) {
    return (
      <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
        <Header />
        <main className="min-h-screen py-8 md:py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <Link href="/cart">
              <Button className="bg-primary hover:bg-primary/90">Return to Cart</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <Link href="/cart" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="08012345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Delivery Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="123 Hostel Street"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    Delivery Method
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="pickup"
                        checked={formData.deliveryMethod === 'pickup'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-primary"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Pickup at Location</div>
                        <div className="text-sm text-gray-500">Free • Pick up your items at the seller's location</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="delivery"
                        checked={formData.deliveryMethod === 'delivery'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-primary"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Home Delivery</div>
                        <div className="text-sm text-gray-500">₦1,000 • Items delivered to your address</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Special Instructions (Optional)</h2>
                  <Textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any special delivery instructions or notes..."
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold">
                  Continue to Payment
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={`${item.type}-${item.id}`} className="flex gap-3 pb-3 border-b border-gray-100 last:border-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={item.image || '/declutter1.png'}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-1">{item.title || item.category}</h4>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary">
                          ₦{((item.price || 0) * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
