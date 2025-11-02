'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ClipboardList, Upload, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const ServiceRequestForm = ({ serviceId, serviceName, providerName, isOpen, onClose }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    serviceType: '',
    priority: 'normal',
    location: '',
    preferredDate: '',
    budget: '',
    description: '',
    requirements: ''
  })
  const [attachments, setAttachments] = useState([])

  const priorityOptions = [
    { value: 'low', label: 'Low - Flexible timeline' },
    { value: 'normal', label: 'Normal - Standard priority' },
    { value: 'high', label: 'High - Urgent attention needed' },
    { value: 'emergency', label: 'Emergency - Immediate attention' }
  ]

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    if (attachments.length + files.length > 5) {
      toast.error('Maximum 5 files allowed')
      return
    }
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size
    }))
    setAttachments([...attachments, ...newFiles])
    toast.success(`${files.length} file(s) added`)
  }

  const removeAttachment = (id) => {
    setAttachments(attachments.filter(f => f.id !== id))
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.serviceType || !formData.description) {
      toast.error('Please fill in all required fields')
      return
    }
    
    // Format the quote message
    const quoteMessage = `Quote Request for ${serviceName}

Service Type: ${formData.serviceType}
Priority: ${formData.priority}
Location: ${formData.location || 'Not specified'}
Preferred Date: ${formData.preferredDate || 'Flexible'}
Budget: ${formData.budget ? `₦${formData.budget}` : 'Not specified'}

Description:
${formData.description}

${formData.requirements ? `Specific Requirements:\n${formData.requirements}` : ''}`

    // Navigate to messages page with the quote
    toast.success('Quote request prepared. Redirecting to messages...')
    onClose()
    
    // Reset form
    setFormData({
      serviceType: '', priority: 'normal', location: '', preferredDate: '',
      budget: '', description: '', requirements: ''
    })
    setAttachments([])
    
    // Navigate to messages page after a short delay
    setTimeout(() => {
      router.push('/messages')
    }, 500)
  }

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Service Request
          </DialogTitle>
          <DialogDescription>
            Submit a detailed service request to <strong>{providerName}</strong> for {serviceName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Service Details</h3>
            
            <div>
              <Label htmlFor="serviceType">Service Type *</Label>
              <Input
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                placeholder="e.g., Deep cleaning, Move-in cleaning, Weekly maintenance"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="priority">Priority Level *</Label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})} required>
                  <SelectTrigger id="priority">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priorityOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget (Optional)</Label>
                <Input
                  id="budget"
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="₦"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="preferredDate">Preferred Date (Optional)</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={getMinDate()}
              />
            </div>
          </div>

          {/* Service Requirements */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Requirements</h3>
            
            <div>
              <Label htmlFor="location">Service Location *</Label>
              <Textarea
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Full address where service will be performed"
                rows={2}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Detailed Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the service you need in detail..."
                rows={4}
                required
              />
            </div>

            <div>
              <Label htmlFor="requirements">Specific Requirements</Label>
              <Textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Any specific materials, methods, or special instructions..."
                rows={3}
              />
            </div>
          </div>

          {/* Attachments */}
          <div>
            <Label>Supporting Documents/Photos (Optional)</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-2">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <Label htmlFor="attachments" className="cursor-pointer">
                <span className="text-primary font-medium">Click to upload</span>
                <span className="text-gray-500"> or drag and drop</span>
              </Label>
              <Input
                id="attachments"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <p className="text-xs text-gray-500 mt-2">
                PDF, JPG, PNG, DOC up to 5MB (Max 5 files)
              </p>
            </div>

            {attachments.length > 0 && (
              <div className="space-y-2 mt-4">
                {attachments.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-gray-500">({formatFileSize(file.size)})</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeAttachment(file.id)}
                      className="h-6 w-6"
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            <p className="font-medium mb-1">Request Process:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Provider will review your request within 24 hours</li>
              <li>You'll be contacted via your preferred method</li>
              <li>Provider may request additional information</li>
              <li>Quote and scheduling will be discussed after review</li>
            </ul>
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

export default ServiceRequestForm

