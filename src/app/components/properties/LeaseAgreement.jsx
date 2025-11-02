'use client'
import { useState } from 'react'
import { FileText, Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { toast } from 'sonner'

const LeaseAgreement = ({ propertyId, propertyTitle, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    // Simulate download
    setTimeout(() => {
      setIsLoading(false)
      toast.success('Lease agreement downloaded successfully')
    }, 1000)
  }

  const handlePreview = () => {
    // Open preview in new tab
    toast.info('Opening lease agreement preview...')
    // In production, this would open the actual document
  }

  // Sample lease agreement content (in production, this would come from backend)
  const leaseContent = {
    property: propertyTitle,
    tenant: 'Your Name',
    landlord: 'Property Owner',
    rent: '₦120,000',
    duration: '12 months',
    startDate: 'TBD',
    securityDeposit: '₦120,000',
    terms: [
      'Monthly rent: ₦120,000 payable on the 1st of each month',
      'Security deposit: ₦120,000 (refundable at end of tenancy)',
      'Lease duration: 12 months with option to renew',
      'Utilities: Tenant responsible for electricity and water',
      'Maintenance: Landlord responsible for major repairs',
      'No pets without written consent',
      'Subletting not allowed without landlord approval'
    ]
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Lease Agreement Preview
          </DialogTitle>
          <DialogDescription>
            Review the lease agreement for <strong>{propertyTitle}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Agreement Header */}
          <div className="text-center border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold mb-2">RESIDENTIAL LEASE AGREEMENT</h2>
            <p className="text-gray-600">FUTA Student Housing</p>
          </div>

          {/* Parties */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Property Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                <p><strong>Property:</strong> {leaseContent.property}</p>
                <p><strong>Address:</strong> [Property Address]</p>
                <p><strong>Property ID:</strong> {propertyId}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Parties</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-sm mb-1">Landlord:</p>
                  <p className="text-sm">{leaseContent.landlord}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-sm mb-1">Tenant:</p>
                  <p className="text-sm">{leaseContent.tenant}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-semibold mb-3">Lease Terms</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Monthly Rent:</span>
                  <span className="ml-2">{leaseContent.rent}</span>
                </div>
                <div>
                  <span className="font-medium">Lease Duration:</span>
                  <span className="ml-2">{leaseContent.duration}</span>
                </div>
                <div>
                  <span className="font-medium">Security Deposit:</span>
                  <span className="ml-2">{leaseContent.securityDeposit}</span>
                </div>
                <div>
                  <span className="font-medium">Start Date:</span>
                  <span className="ml-2">{leaseContent.startDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <h3 className="font-semibold mb-3">Terms and Conditions</h3>
            <ul className="space-y-2">
              {leaseContent.terms.map((term, index) => (
                <li key={index} className="flex gap-2 text-sm">
                  <span className="text-primary font-bold">{index + 1}.</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Terms */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-medium text-blue-900 mb-2">Important Notes:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>This is a preview. The final agreement will be customized based on your application.</li>
              <li>All terms are subject to negotiation and final approval.</li>
              <li>Read all terms carefully before signing.</li>
              <li>Seek legal advice if needed before committing.</li>
            </ul>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handlePreview} className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Full Preview
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={handleDownload}
            disabled={isLoading}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {isLoading ? 'Downloading...' : 'Download PDF'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LeaseAgreement

