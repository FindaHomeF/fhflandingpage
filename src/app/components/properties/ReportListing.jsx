'use client'
import { useState } from 'react'
import { Flag, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { toast } from 'sonner'

const REPORT_REASONS = [
  'Fake listing / Scam',
  'Incorrect information',
  'Spam / Duplicate',
  'Inappropriate content',
  'Property no longer available',
  'Pricing issues',
  'Other'
]

const ReportListing = ({ propertyId, propertyTitle, isOpen, onClose }) => {
  const [selectedReason, setSelectedReason] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedReason) {
      toast.error('Please select a reason')
      return
    }
    if (!description.trim()) {
      toast.error('Please provide details')
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Report submitted. Our team will review it shortly.')
      setSelectedReason('')
      setDescription('')
      onClose()
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5 text-red-500" />
            Report Listing
          </DialogTitle>
          <DialogDescription>
            Help us maintain a safe platform by reporting issues with this listing
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <p className="text-sm text-yellow-800">
              Reporting: <strong>{propertyTitle}</strong>
            </p>
          </div>

          <div>
            <Label htmlFor="reason">Reason for reporting *</Label>
            <div className="mt-2 space-y-2">
              {REPORT_REASONS.map((reason) => (
                <label key={reason} className="flex items-center gap-2 p-2 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm">{reason}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="description">Additional Details *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide more information about the issue..."
              rows={4}
              required
            />
          </div>

          <div className="text-xs text-gray-500">
            All reports are reviewed by our team. False reports may result in account restrictions.
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-red-600 hover:bg-red-700">
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ReportListing

