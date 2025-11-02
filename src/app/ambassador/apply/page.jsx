'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import { toast } from 'sonner'

export default function AmbassadorApplicationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    department: '',
    level: '',
    whyAmbassador: '',
    experience: '',
    ideas: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast.success('Application submitted successfully! We\'ll review and get back to you soon.')
      setIsSubmitting(false)
      router.push('/ambassador')
    }, 1500)
  }

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-3xl">
          <button
            onClick={() => router.push('/ambassador')}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portal
          </button>

          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become an Ambassador</h1>
            <p className="text-gray-600">
              Join our ambassador program and help build a stronger student community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
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
                    placeholder="08012345678"
                  />
                </div>
                <div>
                  <Label htmlFor="studentId">Student ID *</Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    placeholder="FUTA/2019/123456"
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
                    placeholder="Computer Science"
                  />
                </div>
                <div>
                  <Label htmlFor="level">Level *</Label>
                  <Input
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                    placeholder="200, 300, 400, etc."
                  />
                </div>
              </div>
            </div>

            {/* Why Ambassador */}
            <div>
              <Label htmlFor="whyAmbassador">
                Why do you want to become an ambassador? *
              </Label>
              <Textarea
                id="whyAmbassador"
                name="whyAmbassador"
                value={formData.whyAmbassador}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us what motivates you to join our ambassador program..."
              />
            </div>

            {/* Experience */}
            <div>
              <Label htmlFor="experience">
                Relevant Experience (Optional)
              </Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                placeholder="Any leadership roles, community involvement, or relevant experience..."
              />
            </div>

            {/* Ideas */}
            <div>
              <Label htmlFor="ideas">
                Ideas for Community Engagement (Optional)
              </Label>
              <Textarea
                id="ideas"
                name="ideas"
                value={formData.ideas}
                onChange={handleInputChange}
                rows={4}
                placeholder="Share your ideas for events, workshops, or initiatives you'd like to organize..."
              />
            </div>

            {/* Requirements */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-3">Requirements:</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Must be an active FUTA student</li>
                <li>Active on the platform (at least 3 months)</li>
                <li>Good standing with the community</li>
                <li>Commitment to host at least 1 event per semester</li>
                <li>Willing to promote the platform responsibly</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
