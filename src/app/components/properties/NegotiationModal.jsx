'use client'
import { useState } from 'react'
import { Handshake, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { toast } from 'sonner'

const NegotiationModal = ({ propertyId, propertyTitle, currentPrice, isOpen, onClose }) => {
  const [offerAmount, setOfferAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [duration, setDuration] = useState('12')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!offerAmount || parseFloat(offerAmount) <= 0) {
      toast.error('Please enter a valid offer amount')
      return
    }
    if (parseFloat(offerAmount) >= currentPrice) {
      toast.error('Your offer should be less than the listed price')
      return
    }
    toast.success('Offer submitted! The agent will review and contact you.')
    onClose()
    // Reset
    setOfferAmount('')
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setDuration('12')
  }

  const discount = currentPrice - parseFloat(offerAmount || 0)
  const discountPercent = ((discount / currentPrice) * 100).toFixed(1)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-primary" />
            Make an Offer
          </DialogTitle>
          <DialogDescription>
            Negotiate rent for <strong>{propertyTitle}</strong>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Listed Price:</span>
              <span className="font-bold text-lg">₦{currentPrice?.toLocaleString()}</span>
            </div>
            {offerAmount && parseFloat(offerAmount) > 0 && (
              <div className="pt-2 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Your Offer:</span>
                  <span className="font-bold text-lg text-primary">₦{parseFloat(offerAmount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">Discount:</span>
                  <span className="text-sm font-medium text-green-600">₦{discount.toLocaleString()} ({discountPercent}%)</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="offerAmount">Your Offer Amount (₦) *</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="offerAmount"
                type="number"
                value={offerAmount}
                onChange={(e) => setOfferAmount(e.target.value)}
                placeholder="Enter your offer"
                className="pl-10"
                required
                min={1}
                max={currentPrice}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Maximum: ₦{currentPrice?.toLocaleString()}
            </p>
          </div>

          <div>
            <Label htmlFor="duration">Proposed Duration (Months) *</Label>
            <Input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="12"
              required
              min="1"
            />
          </div>

          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message to Agent</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Why this offer works for you..."
              rows={3}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            <p className="font-medium mb-1">Note:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>The agent will review your offer and respond</li>
              <li>Offers are not binding until accepted</li>
              <li>You may negotiate further after initial response</li>
            </ul>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Submit Offer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NegotiationModal

