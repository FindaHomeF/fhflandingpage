'use client'
import { useMemo } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

const PasswordStrength = ({ password }) => {
  const strength = useMemo(() => {
    if (!password) return { score: 0, label: '', color: '', checks: {} }

    let score = 0
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    }

    Object.values(checks).forEach(check => {
      if (check) score++
    })

    let label = ''
    let color = ''

    if (score <= 2) {
      label = 'Weak'
      color = 'bg-red-500'
    } else if (score <= 3) {
      label = 'Fair'
      color = 'bg-yellow-500'
    } else if (score <= 4) {
      label = 'Good'
      color = 'bg-blue-500'
    } else {
      label = 'Strong'
      color = 'bg-green-500'
    }

    return { score, label, color, checks }
  }, [password])

  if (!password) return null

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">Password Strength</span>
        <span className={`text-xs font-medium ${
          strength.label === 'Strong' ? 'text-green-600' :
          strength.label === 'Good' ? 'text-blue-600' :
          strength.label === 'Fair' ? 'text-yellow-600' :
          'text-red-600'
        }`}>
          {strength.label}
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${strength.color}`}
          style={{ width: `${(strength.score / 5) * 100}%` }}
        />
      </div>
      <div className="space-y-1 text-xs">
        <div className={`flex items-center gap-2 ${strength.checks.length ? 'text-green-600' : 'text-gray-400'}`}>
          {strength.checks.length ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <XCircle className="h-3 w-3" />
          )}
          <span>At least 8 characters</span>
        </div>
        <div className={`flex items-center gap-2 ${strength.checks.uppercase ? 'text-green-600' : 'text-gray-400'}`}>
          {strength.checks.uppercase ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <XCircle className="h-3 w-3" />
          )}
          <span>One uppercase letter</span>
        </div>
        <div className={`flex items-center gap-2 ${strength.checks.lowercase ? 'text-green-600' : 'text-gray-400'}`}>
          {strength.checks.lowercase ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <XCircle className="h-3 w-3" />
          )}
          <span>One lowercase letter</span>
        </div>
        <div className={`flex items-center gap-2 ${strength.checks.number ? 'text-green-600' : 'text-gray-400'}`}>
          {strength.checks.number ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <XCircle className="h-3 w-3" />
          )}
          <span>One number</span>
        </div>
        <div className={`flex items-center gap-2 ${strength.checks.special ? 'text-green-600' : 'text-gray-400'}`}>
          {strength.checks.special ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <XCircle className="h-3 w-3" />
          )}
          <span>One special character</span>
        </div>
      </div>
    </div>
  )
}

export default PasswordStrength

