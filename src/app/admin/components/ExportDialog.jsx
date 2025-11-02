'use client'
import { useState } from 'react'
import { Download, FileSpreadsheet, FileText, File } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const ExportDialog = ({ isOpen, onClose, columns = [], dataType = 'data' }) => {
  const [exportFormat, setExportFormat] = useState('excel')
  const [selectedFields, setSelectedFields] = useState(columns.map(col => col.key))
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [isExporting, setIsExporting] = useState(false)

  const formatOptions = [
    { value: 'excel', label: 'Excel (.xlsx)', icon: FileSpreadsheet },
    { value: 'pdf', label: 'PDF (.pdf)', icon: FileText },
    { value: 'csv', label: 'CSV (.csv)', icon: File }
  ]

  const toggleField = (fieldKey) => {
    setSelectedFields(prev =>
      prev.includes(fieldKey)
        ? prev.filter(key => key !== fieldKey)
        : [...prev, fieldKey]
    )
  }

  const selectAllFields = () => {
    setSelectedFields(columns.map(col => col.key))
  }

  const deselectAllFields = () => {
    setSelectedFields([])
  }

  const handleExport = async () => {
    if (selectedFields.length === 0) {
      toast.error('Please select at least one field to export')
      return
    }

    setIsExporting(true)
    // Simulate export
    setTimeout(() => {
      setIsExporting(false)
      toast.success(`Exporting ${selectedFields.length} fields as ${exportFormat.toUpperCase()}...`)
      onClose()
      // Reset
      setExportFormat('excel')
      setSelectedFields(columns.map(col => col.key))
      setDateRange({ start: '', end: '' })
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            Export {dataType}
          </DialogTitle>
          <DialogDescription>
            Select format, fields, and date range for export
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Export Format */}
          <div>
            <Label className="mb-3 block">Export Format *</Label>
            <div className="grid grid-cols-3 gap-3">
              {formatOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.value}
                    onClick={() => setExportFormat(option.value)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      exportFormat === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`h-6 w-6 mx-auto mb-2 ${
                      exportFormat === option.value ? 'text-primary' : 'text-gray-400'
                    }`} />
                    <p className="text-sm font-medium">{option.label}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Date Range */}
          <div>
            <Label className="mb-3 block">Date Range (Optional)</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate" className="text-sm">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="endDate" className="text-sm">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  min={dateRange.start}
                />
              </div>
            </div>
          </div>

          {/* Field Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Label>Select Fields to Export *</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={selectAllFields}
                >
                  Select All
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={deselectAllFields}
                >
                  Deselect All
                </Button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 max-h-60 overflow-y-auto">
              <div className="space-y-2">
                {columns.map((column) => (
                  <label
                    key={column.key}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedFields.includes(column.key)}
                      onCheckedChange={() => toggleField(column.key)}
                    />
                    <span className="text-sm">{column.label}</span>
                  </label>
                ))}
              </div>
            </div>
            {selectedFields.length === 0 && (
              <p className="text-xs text-red-600 mt-2">Please select at least one field</p>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            <p className="font-medium mb-1">Export Info:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Large exports may take a few moments</li>
              <li>You'll receive the file download once ready</li>
              <li>Date range filter applies to all records</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isExporting}>
            Cancel
          </Button>
          <Button
            onClick={handleExport}
            disabled={isExporting || selectedFields.length === 0}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {isExporting ? 'Exporting...' : `Export as ${exportFormat.toUpperCase()}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ExportDialog

