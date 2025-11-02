'use client'
import { useState } from 'react'
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { toast } from 'sonner'

const ApprovalReasonModal = ({ isOpen, onClose, action, itemType, itemName, onConfirm }) => {
  const [reason, setReason] = useState('')
  const isApproval = action === 'approve'
  const isRejection = action === 'reject'

  const handleConfirm = () => {
    if (!reason.trim() && isRejection) {
      toast.error('Please provide a reason for rejection')
      return
    }
    if (onConfirm) {
      onConfirm(reason)
    }
    setReason('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isApproval ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
            {isApproval ? 'Approve' : 'Reject'} {itemType}
          </DialogTitle>
          <DialogDescription>
            {isApproval 
              ? `Approve ${itemName}? This will make it visible to users.`
              : `Reject ${itemName}? Please provide a reason.`
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {isRejection && (
            <div>
              <Label htmlFor="reason">Reason for Rejection *</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Explain why this item is being rejected..."
                rows={4}
                required
              />
            </div>
          )}

          {isApproval && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <p className="text-sm text-green-800">
                  This {itemType} will be approved and made available to all users immediately.
                </p>
              </div>
            </div>
          )}

          {isRejection && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                <p className="text-sm text-red-800">
                  The user will be notified of the rejection with the reason you provide.
                </p>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className={isApproval 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-red-600 hover:bg-red-700'
            }
          >
            {isApproval ? 'Approve' : 'Reject'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ApprovalReasonModal

