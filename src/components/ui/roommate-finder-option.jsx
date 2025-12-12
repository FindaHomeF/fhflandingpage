'use client'
import React, { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Users, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import QuantitySelector from '@/app/admin/pages/components/QuantitySelector'

const RoommateFinderOption = ({ 
  enabled, 
  onToggle, 
  onUpdate,
  currentRoommates = 0,
  totalCapacity = 0,
  preferences = '',
  className = ''
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled || false)
  const [roommates, setRoommates] = useState(currentRoommates || 0)
  const [capacity, setCapacity] = useState(totalCapacity || 0)
  const [prefs, setPrefs] = useState(preferences || '')

  const handleToggle = (checked) => {
    setIsEnabled(checked)
    if (onToggle) {
      onToggle(checked)
    }
    if (onUpdate) {
      onUpdate({
        roommatesNeeded: checked ? roommates : 0,
        totalCapacity: checked ? capacity : 0,
        roommatePreferences: checked ? prefs : ''
      })
    }
  }

  const handleRoommatesChange = (value) => {
    setRoommates(value)
    if (onUpdate && isEnabled) {
      onUpdate({
        roommatesNeeded: value,
        totalCapacity: capacity,
        roommatePreferences: prefs
      })
    }
  }

  const handleCapacityChange = (value) => {
    setCapacity(value)
    if (onUpdate && isEnabled) {
      onUpdate({
        roommatesNeeded: roommates,
        totalCapacity: value,
        roommatePreferences: prefs
      })
    }
  }

  const handlePreferencesChange = (e) => {
    const value = e.target.value
    setPrefs(value)
    if (onUpdate && isEnabled) {
      onUpdate({
        roommatesNeeded: roommates,
        totalCapacity: capacity,
        roommatePreferences: value
      })
    }
  }

  return (
    <div className={`border rounded-lg p-4 bg-blue-50 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          <Label htmlFor="roommate-toggle" className="font-semibold text-gray-900">
            Roommate Finder
          </Label>
        </div>
        <Switch
          id="roommate-toggle"
          checked={isEnabled}
          onCheckedChange={handleToggle}
        />
      </div>

      {isEnabled && (
        <div className="space-y-4 mt-4">
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
            <div>
              <p className="font-semibold mb-1">Enable Roommate Finder:</p>
              <p>Allow other students to find roommates for this property. Only available for students and admin.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <QuantitySelector
                label="Roommates Needed"
                value={roommates}
                onChange={handleRoommatesChange}
                min={0}
                max={10}
              />
            </div>
            <div>
              <QuantitySelector
                label="Total Capacity"
                value={capacity}
                onChange={handleCapacityChange}
                min={roommates}
                max={20}
              />
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Preferences (optional)
            </Label>
            <textarea
              value={prefs}
              onChange={handlePreferencesChange}
              placeholder="e.g., Non-smoking, Clean, Quiet, etc."
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Describe your ideal roommate preferences
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoommateFinderOption

