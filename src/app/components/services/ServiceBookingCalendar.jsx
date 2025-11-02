'use client'
import { useState } from 'react'
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const ServiceBookingCalendar = ({ serviceId, serviceName, providerName, isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [duration, setDuration] = useState('2')
  const [serviceType, setServiceType] = useState('')
  const [requirements, setRequirements] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ]

  const durationOptions = [
    { value: '1', label: '1 hour' },
    { value: '2', label: '2 hours' },
    { value: '3', label: '3 hours' },
    { value: '4', label: '4 hours' },
    { value: 'custom', label: 'Custom duration' }
  ]

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const calculateEndTime = () => {
    if (!selectedTime || !duration) return ''
    const [hours, minutes] = selectedTime.split(':')
    const period = selectedTime.includes('PM') && parseInt(hours) !== 12 ? 12 : 0
    const hour24 = parseInt(hours) + period
    const endHour = hour24 + parseInt(duration)
    const endHour12 = endHour > 12 ? endHour - 12 : endHour
    const periodEnd = endHour >= 12 ? 'PM' : 'AM'
    return `${endHour12}:${minutes} ${periodEnd}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      toast.error('Please fill in all required fields')
      return
    }
    toast.success('Booking request submitted! Provider will confirm shortly.')
    onClose()
    // Reset form
    setSelectedDate('')
    setSelectedTime('')
    setDuration('2')
    setServiceType('')
    setRequirements('')
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Book Service
          </DialogTitle>
          <DialogDescription>
            Schedule a booking with <strong>{providerName}</strong> for {serviceName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date and Time Selection */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getMinDate()}
                required
              />
            </div>
            <div>
              <Label htmlFor="time">Start Time *</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime} required>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="duration">Duration *</Label>
              <Select value={duration} onValueChange={setDuration} required>
                <SelectTrigger id="duration">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {durationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedTime && duration && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
              <div className="flex items-center gap-2 text-blue-900">
                <CheckCircle2 className="h-4 w-4" />
                <span>Service will run from <strong>{selectedTime}</strong> to <strong>{calculateEndTime()}</strong></span>
              </div>
            </div>
          )}

          {/* Service Details */}
          <div>
            <Label htmlFor="serviceType">Service Type</Label>
            <Input
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              placeholder="e.g., Deep cleaning, Move-in cleaning"
            />
          </div>

          <div>
            <Label htmlFor="requirements">Service Requirements</Label>
            <Textarea
              id="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Describe your specific requirements, area size, special instructions..."
              rows={4}
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address">Service Address *</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Full address where service will be performed"
                  rows={2}
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
            <p className="font-medium mb-1">Booking Confirmation:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Provider will confirm within 24 hours</li>
              <li>You'll receive email confirmation once approved</li>
              <li>Payment is typically due before or after service completion</li>
            </ul>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Submit Booking Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ServiceBookingCalendar

