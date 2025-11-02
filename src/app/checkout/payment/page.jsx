'use client'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Lock, CreditCard, Wallet, Banknote } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

export default function PaymentPage() {
  const router = useRouter()
  const { cart, cartCount, cartTotal } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  })

  const handleCardInput = (e) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
    } else if (name === 'expiryMonth' || name === 'expiryYear') {
      formattedValue = value.replace(/\D/g, '').slice(0, 2)
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3)
    }

    setCardData(prev => ({ ...prev, [name]: formattedValue }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/checkout/review')
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
          <Link href="/checkout" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Checkout
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment</h1>
              <p className="text-gray-600 mb-8">Choose your preferred payment method</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg text-left hover:bg-gray-50 transition-colors ${
                        paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`}
                    >
                      <CreditCard className={`w-6 h-6 mb-2 ${paymentMethod === 'card' ? 'text-primary' : 'text-gray-400'}`} />
                      <div className="font-semibold">Card</div>
                      <div className="text-xs text-gray-500">Debit/Credit</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('transfer')}
                      className={`p-4 border-2 rounded-lg text-left hover:bg-gray-50 transition-colors ${
                        paymentMethod === 'transfer' ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`}
                    >
                      <Banknote className={`w-6 h-6 mb-2 ${paymentMethod === 'transfer' ? 'text-primary' : 'text-gray-400'}`} />
                      <div className="font-semibold">Bank Transfer</div>
                      <div className="text-xs text-gray-500">Direct bank transfer</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wallet')}
                      className={`p-4 border-2 rounded-lg text-left hover:bg-gray-50 transition-colors ${
                        paymentMethod === 'wallet' ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`}
                    >
                      <Wallet className={`w-6 h-6 mb-2 ${paymentMethod === 'wallet' ? 'text-primary' : 'text-gray-400'}`} />
                      <div className="font-semibold">Wallet</div>
                      <div className="text-xs text-gray-500">App wallet balance</div>
                    </button>
                  </div>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === 'card' && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Card Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={cardData.cardNumber}
                          onChange={handleCardInput}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardName">Cardholder Name *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={cardData.cardName}
                          onChange={handleCardInput}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="expiryMonth">Month *</Label>
                          <Input
                            id="expiryMonth"
                            name="expiryMonth"
                            value={cardData.expiryMonth}
                            onChange={handleCardInput}
                            placeholder="MM"
                            maxLength={2}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="expiryYear">Year *</Label>
                          <Input
                            id="expiryYear"
                            name="expiryYear"
                            value={cardData.expiryYear}
                            onChange={handleCardInput}
                            placeholder="YY"
                            maxLength={2}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            type="password"
                            value={cardData.cvv}
                            onChange={handleCardInput}
                            placeholder="123"
                            maxLength={3}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank Transfer Details */}
                {paymentMethod === 'transfer' && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Bank Transfer Details</h2>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-semibold">First Bank of Nigeria</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-semibold">Find-a-Home FUTA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-semibold font-mono">1234567890</span>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                        <strong>Note:</strong> Please include your order reference in the transfer description. You'll receive confirmation once payment is verified.
                      </div>
                    </div>
                  </div>
                )}

                {/* Wallet Payment */}
                {paymentMethod === 'wallet' && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
                    <div className="bg-primary/10 p-6 rounded-lg text-center">
                      <p className="text-gray-600 mb-2">Available Balance</p>
                      <p className="text-3xl font-bold text-primary">₦0.00</p>
                      <p className="text-sm text-gray-500 mt-4">Insufficient balance. Please top up your wallet or choose another payment method.</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold"
                  disabled={paymentMethod === 'wallet'}
                >
                  Continue to Review
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.type}-${item.id}`} className="flex gap-3">
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
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery</span>
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
