'use client'
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const SafetyTipsModal = ({ isOpen, onClose }) => {
  const tips = [
    {
      icon: CheckCircle,
      title: 'Meet in Public First',
      description: 'If possible, meet the agent/seller in a public place before viewing the property alone.'
    },
    {
      icon: CheckCircle,
      title: 'Bring a Friend',
      description: 'Take someone with you when viewing properties, especially if visiting alone.'
    },
    {
      icon: CheckCircle,
      title: 'Share Your Location',
      description: 'Share your location and property details with a trusted friend or family member.'
    },
    {
      icon: CheckCircle,
      title: 'Verify Identity',
      description: 'Ask to see identification or verify the agent through our platform before meeting.'
    },
    {
      icon: CheckCircle,
      title: 'Trust Your Instincts',
      description: 'If something feels off, trust your instincts and leave. Report suspicious behavior immediately.'
    },
    {
      icon: AlertTriangle,
      title: 'Never Pay Cash Upfront',
      description: 'Avoid paying large sums in cash before seeing the property. Use secure payment methods.'
    },
    {
      icon: AlertTriangle,
      title: 'Avoid Pressure',
      description: 'Be cautious of high-pressure tactics. Legitimate agents will give you time to decide.'
    },
    {
      icon: AlertTriangle,
      title: 'Check Property Ownership',
      description: 'Verify the property ownership and that the person showing it has authorization.'
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-6 w-6 text-primary" />
            Meeting Safety Tips
          </DialogTitle>
          <DialogDescription>
            Stay safe when meeting with agents and viewing properties
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            const isWarning = tip.icon === AlertTriangle
            
            return (
              <div
                key={index}
                className={`flex gap-4 p-4 rounded-lg border ${
                  isWarning
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <div className={`flex-shrink-0 ${isWarning ? 'text-yellow-600' : 'text-green-600'}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-1 ${isWarning ? 'text-yellow-900' : 'text-green-900'}`}>
                    {tip.title}
                  </h4>
                  <p className={`text-sm ${isWarning ? 'text-yellow-800' : 'text-green-800'}`}>
                    {tip.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-900 font-medium mb-2">Emergency Contacts:</p>
          <div className="space-y-1 text-sm text-blue-800">
            <p><strong>FUTA Security:</strong> +234 XXX XXX XXXX</p>
            <p><strong>Platform Support:</strong> support@findahomefuta.com</p>
            <p><strong>Report Incident:</strong> Use the "Report Listing" button</p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={onClose} className="bg-primary hover:bg-primary/90">
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SafetyTipsModal

