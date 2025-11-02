'use client'
import { useState } from 'react'
import { ClipboardCheck, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const PropertyInspectionRequest = ({ propertyId, propertyTitle, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    preferredDate: '',
    preferredTime: '',
    name: '',
    email: '',
    phone: '',
    inspectionType: '',
    specificAreas: ''
  })

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const inspectionTypes = [
    'General inspection',
    'Pre-move-in inspection',
    'Maintenance check',
    'Safety inspection',
    'Custom inspection'
  ]

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Inspection request submitted. Agent will confirm the appointment.')
    onClose()
    // Reset form
    setFormData({
      preferredDate: '', preferredTime: '', name: '', email: '', phone: '',
      inspectionType: '', specificAreas: ''
    })
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-primary" />
            Request Property Inspection
          </DialogTitle>
          <DialogDescription>
            Schedule an inspection for <strong>{propertyTitle}</strong>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={getMinDate()}
                required
              />
            </div>
            <div>
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})} required>
                <SelectTrigger id="preferredTime">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="inspectionType">Inspection Type *</Label>
            <Select value={formData.inspectionType} onValueChange={(value) => setFormData({...formData, inspectionType: value})} required>
              <SelectTrigger id="inspectionType">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {inspectionTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="specificAreas">Specific Areas to Inspect</Label>
            <Textarea
              id="specificAreas"
              name="specificAreas"
              value={formData.specificAreas}
              onChange={handleInputChange}
              placeholder="e.g., Electrical system, Plumbing, Roof condition..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Submit Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PropertyInspectionRequest

