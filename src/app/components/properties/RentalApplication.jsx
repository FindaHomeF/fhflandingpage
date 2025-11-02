'use client'
import { useState } from 'react'
import { FileText, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { toast } from 'sonner'

const RentalApplication = ({ propertyId, propertyTitle, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enrollmentNumber: '',
    department: '',
    currentAddress: '',
    employmentStatus: '',
    income: '',
    emergencyContact: '',
    emergencyPhone: '',
    references: '',
    additionalInfo: ''
  })
  const [documents, setDocuments] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    if (documents.length + files.length > 5) {
      toast.error('Maximum 5 documents allowed')
      return
    }
    const newDocs = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type
    }))
    setDocuments([...documents, ...newDocs])
    toast.success(`${files.length} file(s) added`)
  }

  const removeDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id))
    toast.success('Document removed')
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Application submitted successfully! We will review and contact you shortly.')
      onClose()
      // Reset form
      setFormData({
        fullName: '', email: '', phone: '', enrollmentNumber: '', department: '',
        currentAddress: '', employmentStatus: '', income: '', emergencyContact: '',
        emergencyPhone: '', references: '', additionalInfo: ''
      })
      setDocuments([])
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Rental Application
          </DialogTitle>
          <DialogDescription>
            Apply to rent <strong>{propertyTitle}</strong>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
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
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="enrollmentNumber">Enrollment Number *</Label>
                <Input
                  id="enrollmentNumber"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="department">Department *</Label>
                <Input
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Address & Employment */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Address & Employment</h3>
            <div>
              <Label htmlFor="currentAddress">Current Address *</Label>
              <Textarea
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleInputChange}
                rows={2}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="employmentStatus">Employment Status *</Label>
                <Input
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  placeholder="Student, Part-time, Full-time"
                  required
                />
              </div>
              <div>
                <Label htmlFor="income">Monthly Income (Optional)</Label>
                <Input
                  id="income"
                  name="income"
                  type="number"
                  value={formData.income}
                  onChange={handleInputChange}
                  placeholder="₦"
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Emergency Contact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergencyContact">Contact Name *</Label>
                <Input
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                <Input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <Label htmlFor="references">References (Optional)</Label>
            <Textarea
              id="references"
              name="references"
              value={formData.references}
              onChange={handleInputChange}
              placeholder="Name, relationship, phone number"
              rows={3}
            />
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Supporting Documents</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <Label htmlFor="documents" className="cursor-pointer">
                <span className="text-primary font-medium">Click to upload</span>
                <span className="text-gray-500"> or drag and drop</span>
              </Label>
              <Input
                id="documents"
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

            {documents.length > 0 && (
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{doc.name}</span>
                      <span className="text-xs text-gray-500">({formatFileSize(doc.size)})</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeDocument(doc.id)}
                      className="h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any additional information you'd like to share..."
              rows={3}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-medium text-blue-900 mb-2">Application Process:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Your application will be reviewed within 2-3 business days</li>
              <li>We may contact you for additional information</li>
              <li>Approved applications will receive a lease agreement</li>
            </ul>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default RentalApplication

