'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import ImageUpload from '@/app/admin/pages/components/ImageUpload'
import CommissionCalculator from '@/components/ui/commission-calculator'
import PremiumToggle from '@/components/ui/premium-toggle'
import { useArtisan } from '../../context/ArtisanContext'
import { toast } from 'sonner'

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      const img = new Image()
      img.src = e.target.result
      img.onload = () => {
        const MAX_WIDTH = 800
        const MAX_HEIGHT = 600
        let width = img.width
        let height = img.height
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = (height * MAX_WIDTH) / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = (width * MAX_HEIGHT) / height
            height = MAX_HEIGHT
          }
        }
        
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        
        const compressed = canvas.toDataURL('image/jpeg', 0.7)
        resolve(compressed)
      }
      img.onerror = (error) => reject(error)
    }
    reader.onerror = (error) => reject(error)
  })
}

const AddServicePage = () => {
  const router = useRouter()
  const { canManageServices } = useArtisan()
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      serviceName: '',
      category: '',
      description: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      phone: '',
      email: '',
      availability: 'available',
      otherImages: [],
      isPremium: false
    }
  })

  const minPrice = watch('minPrice')
  const maxPrice = watch('maxPrice')
  const averagePrice = minPrice && maxPrice ? (parseInt(minPrice) + parseInt(maxPrice)) / 2 : minPrice || maxPrice || 0

  // Redirect if not verified
  React.useEffect(() => {
    if (!canManageServices) {
      toast.error('Please complete your profile and verify your NIN to create services')
      router.push('/artisan/profile')
    }
  }, [canManageServices, router])

  const onSubmit = async (data) => {
    try {
      if (!data.otherImages || data.otherImages.length === 0) {
        toast.error('Please upload at least one image')
        return
      }
      
      if (data.minPrice && data.maxPrice && parseInt(data.minPrice) > parseInt(data.maxPrice)) {
        toast.error('Minimum price cannot be greater than maximum price')
        return
      }
      
      toast.loading('Saving service...')
      
      const existingServices = JSON.parse(localStorage.getItem('services') || '[]')
      const nextId = existingServices.length + 1
      const tempId = nextId.toString()
      
      const images = []
      
      if (data.otherImages && data.otherImages.length > 0) {
        for (let i = 0; i < Math.min(data.otherImages.length, 5); i++) {
          const file = data.otherImages[i]
          if (file instanceof File) {
            const base64 = await fileToBase64(file)
            images.push(base64)
          }
        }
      }
      
      while (images.length < 5) {
        images.push('/hero-image.jpeg')
      }
      
      const serviceData = {
        id: tempId,
        artisanId: 'artisan-1', // In real app, get from auth
        serviceName: data.serviceName,
        category: data.category,
        description: data.description,
        minPrice: data.minPrice || null,
        maxPrice: data.maxPrice || null,
        price: data.minPrice && data.maxPrice ? null : (data.minPrice || data.maxPrice),
        location: data.location,
        phone: data.phone,
        email: data.email,
        availability: data.availability,
        status: 'Pending', // Services need admin approval
        images: images.slice(0, 5),
        isPremium: data.isPremium || false,
        premiumExpiry: data.isPremium ? new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() : null,
        createdAt: new Date().toISOString()
      }
      
      existingServices.push(serviceData)
      localStorage.setItem('services', JSON.stringify(existingServices))
      
      toast.success('Service added successfully! Waiting for admin approval.')
      
      router.push(`/artisan/services`)
    } catch (error) {
      console.error('Error saving service:', error)
      toast.error('Failed to save service. Please try again.')
    }
  }

  const handleCancel = () => {
    router.back()
  }

  if (!canManageServices) {
    return (
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Please complete your profile and verify your NIN to create services.</p>
          <Button onClick={() => router.push('/artisan/profile')} className="bg-primary hover:bg-primary/90">
            Go to Profile
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-6 pb-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create Service</h1>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleCancel}
                className="px-6 py-2 border-black10 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit(onSubmit)}
                className="px-6 py-2 bg-primary text-white hover:bg-primary/90"
              >
                Confirm
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name *
                  </label>
                  <Input
                    {...register('serviceName', { required: 'Service name is required' })}
                    placeholder="e.g., Professional Cleaning Service"
                    className="w-full border-black10"
                  />
                  {errors.serviceName && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <Select onValueChange={(value) => setValue('category', value)}>
                    <SelectTrigger className="w-full border-black10">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Electronics Repair">Electronics Repair</SelectItem>
                      <SelectItem value="Cleaning">Cleaning</SelectItem>
                      <SelectItem value="Laundry">Laundry</SelectItem>
                      <SelectItem value="Food Service">Food Service</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Photography">Photography</SelectItem>
                      <SelectItem value="Beauty">Beauty</SelectItem>
                      <SelectItem value="Printing">Printing</SelectItem>
                      <SelectItem value="Tailoring">Tailoring</SelectItem>
                      <SelectItem value="Plumbing">Plumbing</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <Textarea
                    {...register('description', { required: 'Description is required' })}
                    placeholder="Describe your service in detail..."
                    rows={6}
                    className="w-full border-black10"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Service Images *
                  </label>
                  <ImageUpload
                    multiple={true}
                    onUpload={(files) => setValue('otherImages', files)}
                    placeholder="Upload Service Images"
                    subtitle="Upload images showcasing your service (up to 5)"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Price (₦) *
                  </label>
                  <Input
                    {...register('minPrice', { required: 'Minimum price is required' })}
                    placeholder="0"
                    className="w-full border-black10"
                    type="number"
                    min="0"
                  />
                  {errors.minPrice && (
                    <p className="text-red-500 text-sm mt-1">{errors.minPrice.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Price (₦) *
                  </label>
                  <Input
                    {...register('maxPrice', { required: 'Maximum price is required' })}
                    placeholder="0"
                    className="w-full border-black10"
                    type="number"
                    min="0"
                  />
                  {errors.maxPrice && (
                    <p className="text-red-500 text-sm mt-1">{errors.maxPrice.message}</p>
                  )}
                </div>

                {/* Commission Calculator */}
                {averagePrice > 0 && (
                  <CommissionCalculator 
                    price={averagePrice} 
                    type="service" 
                    isAdmin={false}
                  />
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input
                    {...register('location', { required: 'Location is required' })}
                    placeholder="e.g., North Gate, Akure"
                    className="w-full border-black10"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    {...register('phone', { required: 'Phone number is required' })}
                    placeholder="08012345678"
                    className="w-full border-black10"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    {...register('email', { 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder="email@example.com"
                    className="w-full border-black10"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <Select onValueChange={(value) => setValue('availability', value)} defaultValue="available">
                    <SelectTrigger className="w-full border-black10">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="limited">Limited</SelectItem>
                      <SelectItem value="unavailable">Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                {/* Premium Toggle */}
                <PremiumToggle
                  listingId="new"
                  listingType="service"
                  currentPremium={watch('isPremium')}
                  onToggle={(value) => setValue('isPremium', value)}
                  isAdmin={false}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddServicePage

