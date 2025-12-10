'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import ImageUpload from '@/app/admin/pages/components/ImageUpload'
import QuantitySelector from '@/app/admin/pages/components/QuantitySelector'
import CommissionCalculator from '@/components/ui/commission-calculator'
import PremiumToggle from '@/components/ui/premium-toggle'
import RoommateFinderOption from '@/components/ui/roommate-finder-option'
import { useStudent } from '../../context/StudentContext'
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

const AddPropertyPage = () => {
  const router = useRouter()
  const { canManageListings } = useStudent()
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      price: '',
      description: '',
      category: '',
      condition: '',
      location: '',
      rooms: 1,
      bathrooms: 1,
      kitchens: 1,
      parking: 0,
      balcony: 0,
      inventory: 1,
      otherFeatures: '',
      featuredImage: null,
      otherImages: [],
      isPremium: false,
      roommateFinder: false,
      roommatesNeeded: 0,
      totalCapacity: 0,
      roommatePreferences: ''
    }
  })

  const price = watch('price')
  const roommateFinder = watch('roommateFinder')

  // Redirect if not verified
  React.useEffect(() => {
    if (!canManageListings) {
      toast.error('Please complete your profile and verify your Student ID to create properties')
      router.push('/student/profile')
    }
  }, [canManageListings, router])

  const onSubmit = async (data) => {
    try {
      if (!data.featuredImage && (!data.otherImages || data.otherImages.length === 0)) {
        toast.error('Please upload at least one image (featured or other images)')
        return
      }
      
      toast.loading('Saving property...')
      
      const existingProperties = JSON.parse(localStorage.getItem('properties') || '[]')
      const nextId = existingProperties.length + 1
      const tempId = nextId.toString()
      
      const images = []
      
      if (data.featuredImage instanceof File) {
        const base64 = await fileToBase64(data.featuredImage)
        images.push(base64)
      } else if (data.otherImages && data.otherImages.length > 0 && data.otherImages[0] instanceof File) {
        const base64 = await fileToBase64(data.otherImages[0])
        images.push(base64)
      } else {
        images.push('/hero-image.jpeg')
      }
      
      const startIndex = (data.featuredImage instanceof File || 
                          (data.otherImages && data.otherImages.length > 0 && !data.featuredImage)) && 
                         !data.featuredImage ? 1 : 0
      
      if (data.otherImages && data.otherImages.length > startIndex) {
        for (let i = startIndex; i < data.otherImages.length; i++) {
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
      
      const propertyData = {
        id: tempId,
        studentId: 'student-1', // In real app, get from auth
        title: data.title,
        price: `₦ ${data.price}`,
        category: data.category,
        condition: data.condition,
        location: data.location,
        room: data.rooms,
        bathroom: data.bathrooms,
        kitchen: data.kitchens,
        parking: data.parking,
        balcony: data.balcony,
        description: data.description,
        inventory: parseInt(data.inventory) || 1,
        otherFeatures: data.otherFeatures || '',
        status: 'Pending', // Properties need admin approval
        images: images.slice(0, 5),
        isPremium: data.isPremium || false,
        premiumExpiry: data.isPremium ? new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() : null,
        // Roommate finder data (only for students)
        roommatesNeeded: data.roommateFinder ? data.roommatesNeeded : null,
        currentRoommates: data.roommateFinder ? 0 : null,
        totalCapacity: data.roommateFinder ? data.totalCapacity : null,
        roommatePreferences: data.roommateFinder ? data.roommatePreferences : null
      }
      
      existingProperties.push(propertyData)
      localStorage.setItem('properties', JSON.stringify(existingProperties))
      
      toast.success('Property added successfully! Waiting for admin approval.')
      
      router.push(`/student/properties`)
    } catch (error) {
      console.error('Error saving property:', error)
      toast.error('Failed to save property. Please try again.')
    }
  }

  const handleCancel = () => {
    router.back()
  }

  if (!canManageListings) {
    return (
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Please complete your profile and verify your Student ID to create properties.</p>
          <Button onClick={() => router.push('/student/profile')} className="bg-primary hover:bg-primary/90">
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
            <h1 className="text-2xl font-bold text-gray-900">Add Property</h1>
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
                    Title *
                  </label>
                  <Input
                    {...register('title', { required: 'Title is required' })}
                    placeholder="Enter property title"
                    className="w-full border-black10"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                    <Input
                      {...register('price', { required: 'Price is required' })}
                      placeholder="0"
                      className="pl-8 w-full border-black10"
                      type="number"
                    />
                  </div>
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                  )}
                  {/* Commission Calculator */}
                  {price && parseFloat(price) > 0 && (
                    <div className="mt-3">
                      <CommissionCalculator 
                        price={parseFloat(price)} 
                        type="apartment" 
                        isAdmin={false}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <Textarea
                    {...register('description', { required: 'Description is required' })}
                    placeholder="Enter property description"
                    rows={4}
                    className="w-full border-black10"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Other Images *
                  </label>
                  <ImageUpload
                    multiple={true}
                    onUpload={(files) => setValue('otherImages', files)}
                    placeholder="Upload Additional Images"
                    subtitle="First image will be used as featured if none uploaded above"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <Select onValueChange={(value) => setValue('category', value)}>
                    <SelectTrigger className="w-full border-black10">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat">Flat</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="single-room">Single Room</SelectItem>
                      <SelectItem value="shared-apartment">Shared Apartment</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <Select onValueChange={(value) => setValue('condition', value)}>
                    <SelectTrigger className="w-full border-black10">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.condition && (
                    <p className="text-red-500 text-sm mt-1">{errors.condition.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Featured Image
                  </label>
                  <ImageUpload
                    multiple={false}
                    onUpload={(file) => setValue('featuredImage', file)}
                    placeholder="Upload Featured Image"
                    subtitle="At least one image is required (featured or other)"
                    required={false}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input
                    {...register('location', { required: 'Location is required' })}
                    placeholder="Enter location"
                    className="w-full border-black10"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Features *
                  </label>
                  <div className="space-y-4">
                    <QuantitySelector
                      label="Room"
                      value={watch('rooms')}
                      onChange={(value) => setValue('rooms', value)}
                      min={1}
                    />
                    <QuantitySelector
                      label="Bathroom & toilet"
                      value={watch('bathrooms')}
                      onChange={(value) => setValue('bathrooms', value)}
                      min={1}
                    />
                    <QuantitySelector
                      label="Kitchen"
                      value={watch('kitchens')}
                      onChange={(value) => setValue('kitchens', value)}
                      min={1}
                    />
                    <QuantitySelector
                      label="Parking Space"
                      value={watch('parking')}
                      onChange={(value) => setValue('parking', value)}
                      min={0}
                    />
                    <QuantitySelector
                      label="Balcony"
                      value={watch('balcony')}
                      onChange={(value) => setValue('balcony', value)}
                      min={0}
                    />
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Inventory *
                      </label>
                      <Input
                        {...register('inventory', { 
                          required: 'Inventory is required',
                          min: { value: 0, message: 'Inventory cannot be negative' },
                          valueAsNumber: true
                        })}
                        placeholder="Enter inventory quantity"
                        className="w-full border-black10"
                        type="number"
                        min="0"
                      />
                      {errors.inventory && (
                        <p className="text-red-500 text-sm mt-1">{errors.inventory.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Other Features
                  </label>
                  <Textarea
                    {...register('otherFeatures')}
                    placeholder="Add any additional features (e.g., Air conditioning, Wi-Fi, Swimming pool, Gym, Security, etc.)"
                    rows={4}
                    className="w-full border-black10"
                  />
                </div>
              </div>

              <div className="col-span-full mt-6">
                {/* Roommate Finder Option - Only for students */}
                <RoommateFinderOption
                  enabled={watch('roommateFinder')}
                  onToggle={(value) => setValue('roommateFinder', value)}
                  onUpdate={(data) => {
                    setValue('roommatesNeeded', data.roommatesNeeded)
                    setValue('totalCapacity', data.totalCapacity)
                    setValue('roommatePreferences', data.roommatePreferences)
                  }}
                  currentRoommates={watch('roommatesNeeded')}
                  totalCapacity={watch('totalCapacity')}
                  preferences={watch('roommatePreferences')}
                />
              </div>

              <div className="col-span-full mt-6">
                {/* Premium Toggle */}
                <PremiumToggle
                  listingId="new"
                  listingType="apartment"
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

export default AddPropertyPage

