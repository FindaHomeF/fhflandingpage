'use client'
import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const DateRangePicker = ({ value, onChange, label = 'Date Range' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState(value?.start || '')
  const [endDate, setEndDate] = useState(value?.end || '')

  const handleApply = () => {
    onChange({ start: startDate, end: endDate })
    setIsOpen(false)
  }

  const handleClear = () => {
    setStartDate('')
    setEndDate('')
    onChange({ start: '', end: '' })
    setIsOpen(false)
  }

  const getMinDate = () => {
    if (startDate) return startDate
    return ''
  }

  const presetRanges = [
    { label: 'Last 7 days', days: 7 },
    { label: 'Last 30 days', days: 30 },
    { label: 'Last 3 months', days: 90 },
    { label: 'Last 6 months', days: 180 },
    { label: 'Last year', days: 365 }
  ]

  const applyPreset = (days) => {
    const end = new Date()
    const start = new Date()
    start.setDate(start.getDate() - days)
    setStartDate(start.toISOString().split('T')[0])
    setEndDate(end.toISOString().split('T')[0])
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal">
          <Calendar className="mr-2 h-4 w-4" />
          {startDate && endDate ? (
            `${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`
          ) : (
            <span className="text-gray-500">Select date range</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="space-y-4">
          <div>
            <Label>{label}</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <Label htmlFor="start" className="text-xs">Start</Label>
                <Input
                  id="start"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="end" className="text-xs">End</Label>
                <Input
                  id="end"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={getMinDate()}
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-3">
            <Label className="text-xs mb-2 block">Quick Select</Label>
            <div className="space-y-1">
              {presetRanges.map((preset) => (
                <Button
                  key={preset.days}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs"
                  onClick={() => applyPreset(preset.days)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-3 border-t">
            <Button variant="outline" size="sm" onClick={handleClear} className="flex-1">
              Clear
            </Button>
            <Button size="sm" onClick={handleApply} className="flex-1 bg-primary hover:bg-primary/90">
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default DateRangePicker

