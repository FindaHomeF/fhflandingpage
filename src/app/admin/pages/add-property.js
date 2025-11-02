'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Upload, X } from 'lucide-react'
import ImageUpload from './components/ImageUpload'
import QuantitySelector from './components/QuantitySelector'
import { toast } from 'sonner'

// Helper function to compress and convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      const img = new Image()
      img.src = e.target.result
      img.onload = () => {
        // Create canvas with max dimensions (800x600 to reduce size)
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
        
        // Convert to base64 with quality 0.7 (70% quality to reduce size)
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
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      price: '',
      description: '',
      category: '',
      condition: '',
      location: '',
      propertyOwner: '',
      rooms: 1,
      bathrooms: 1,
      kitchens: 1,
      parking: 0,
      balcony: 0,
      inventory: 1,
      otherFeatures: '',
      featuredImage: null,
      otherImages: []
    }
  })

  const onSubmit = async (data) => {
    console.log('Form data:', data)
    
    try {
      // Validate that at least one image is uploaded
      if (!data.featuredImage && (!data.otherImages || data.otherImages.length === 0)) {
        toast.error('Please upload at least one image (featured or other images)')
        return
      }
      
      toast.loading('Saving property...')
      
      // Get existing properties to calculate next ID
      const existingProperties = JSON.parse(localStorage.getItem('properties') || '[]')
      
      // Generate a temporary ID for the property using a counter-based approach
      const nextId = existingProperties.length + 1
      const tempId = nextId.toString()
      
      // Convert images to base64
      const images = []
      
      // Use featured image if available, otherwise use first other image
      if (data.featuredImage instanceof File) {
        const base64 = await fileToBase64(data.featuredImage)
        images.push(base64)
      } else if (data.otherImages && data.otherImages.length > 0 && data.otherImages[0] instanceof File) {
        // Use first other image as featured
        const base64 = await fileToBase64(data.otherImages[0])
        images.push(base64)
        toast.success('First image from "Other Images" used as featured image')
      } else {
        images.push('/hero-image.jpeg')
      }
      
      // Add remaining other images (skip first one if it was used as featured)
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
      
      // Pad with default images to ensure we have at least 5
      while (images.length < 5) {
        images.push('/hero-image.jpeg')
      }
      
      // Save to localStorage
      const propertyData = {
        id: tempId,
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
        propertyOwner: data.propertyOwner || '',
        inventory: parseInt(data.inventory) || 1,
        otherFeatures: data.otherFeatures || '',
        status: 'Active',
        images: images.slice(0, 5)
      }
      
      // Add new property
      existingProperties.push(propertyData)
      
      // Save back to localStorage
      localStorage.setItem('properties', JSON.stringify(existingProperties))
      
      toast.success('Property added successfully!')
      
      // Navigate to the property details page with the temp ID
      router.push(`/admin/properties/${tempId}`)
    } catch (error) {
      console.error('Error saving property:', error)
      toast.error('Failed to save property. Please try again.')
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="space-y-6 px-6 pb-12">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          {/* Header */}
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

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Title */}
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

                {/* Price */}
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
                </div>

                {/* Description */}
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

                {/* Upload Other Images */}
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

              {/* Middle Column */}
              <div className="space-y-6">
                {/* Category */}
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

                {/* Condition */}
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

                {/* Upload Featured Image */}
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
                  {errors.featuredImage && (
                    <p className="text-red-500 text-sm mt-1">{errors.featuredImage.message}</p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Location */}
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

                {/* Property Owner */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Owner
                  </label>
                  <Input
                    {...register('propertyOwner')}
                    placeholder="Enter property owner name"
                    className="w-full border-black10"
                  />
                </div>

                {/* Features */}
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

              {/* Other Features Section */}
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
                  <p className="text-xs text-gray-500 mt-1">
                    Separate multiple features with commas or list them one per line
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPropertyPage
