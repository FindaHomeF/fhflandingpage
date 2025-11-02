'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import ImageUpload from '@/app/admin/pages/components/ImageUpload'
import QuantitySelector from '@/app/admin/pages/components/QuantitySelector'
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

const EditPropertyPage = () => {
  const router = useRouter()
  const params = useParams()
  const propertyId = params?.id
  const [isLoading, setIsLoading] = useState(true)
  const [existingProperty, setExistingProperty] = useState(null)

  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm({
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

  useEffect(() => {
    if (typeof window !== 'undefined' && propertyId) {
      const properties = JSON.parse(localStorage.getItem('properties') || '[]')
      const property = properties.find(p => p.id === propertyId)
      
      if (property) {
        setExistingProperty(property)
        const priceValue = property.price.replace(/[₦\s,]/g, '')
        
        reset({
          title: property.title,
          price: priceValue,
          description: property.description,
          category: property.category,
          condition: property.condition,
          location: property.location,
          propertyOwner: property.propertyOwner || '',
          rooms: property.room || 1,
          bathrooms: property.bathroom || 1,
          kitchens: property.kitchen || 1,
          parking: property.parking || 0,
          balcony: property.balcony || 0,
          inventory: property.inventory || 1,
          otherFeatures: property.otherFeatures || '',
          featuredImage: null,
          otherImages: []
        })
        
        setValue('category', property.category)
        setValue('condition', property.condition)
      }
      setIsLoading(false)
    }
  }, [propertyId, reset, setValue])

  const onSubmit = async (data) => {
    try {
      toast.loading('Updating property...')
      
      const existingProperties = JSON.parse(localStorage.getItem('properties') || '[]')
      const propertyIndex = existingProperties.findIndex(p => p.id === propertyId)
      
      if (propertyIndex !== -1) {
        const updatedImages = [...existingProperty.images]
        
        if (data.featuredImage instanceof File) {
          const base64 = await fileToBase64(data.featuredImage)
          updatedImages[0] = base64
        }
        
        if (data.otherImages && data.otherImages.length > 0) {
          for (let i = 0; i < data.otherImages.length && i + 1 < 5; i++) {
            const file = data.otherImages[i]
            if (file instanceof File) {
              const base64 = await fileToBase64(file)
              if (updatedImages[i + 1]) {
                updatedImages[i + 1] = base64
              } else {
                updatedImages.push(base64)
              }
            } else if (typeof file === 'string' && !file.startsWith('data:') && !file.startsWith('blob:')) {
              if (updatedImages[i + 1]) {
                updatedImages[i + 1] = file
              } else {
                updatedImages.push(file)
              }
            }
          }
        }
        
        while (updatedImages.length < 5) {
          updatedImages.push('/hero-image.jpeg')
        }
        
        existingProperties[propertyIndex] = {
          ...existingProperties[propertyIndex],
          id: propertyId,
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
          images: updatedImages.slice(0, 5)
        }
        
        localStorage.setItem('properties', JSON.stringify(existingProperties))
        
        toast.success('Property updated successfully!')
        router.push(`/agent/properties/${propertyId}`)
      }
    } catch (error) {
      console.error('Error updating property:', error)
      toast.error('Failed to update property. Please try again.')
    }
  }

  const handleCancel = () => {
    router.back()
  }

  if (isLoading) {
    return (
      <div className="space-y-6 px-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-center text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  if (!existingProperty) {
    return (
      <div className="space-y-6 px-6">
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Property not found</p>
          <Button onClick={() => router.push('/agent/properties')} className="mt-4">
            Back to Properties
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
            <h1 className="text-2xl font-bold text-gray-900">Edit Property</h1>
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
                Update Property
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
                    Upload Other Images
                  </label>
                  <ImageUpload
                    multiple={true}
                    onUpload={(files) => setValue('otherImages', files)}
                    placeholder="Upload Image here"
                    subtitle="High quality images only"
                    existingImages={existingProperty?.images?.slice(1, 5) || []}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <Select onValueChange={(value) => setValue('category', value)} defaultValue={watch('category')}>
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
                  <Select onValueChange={(value) => setValue('condition', value)} defaultValue={watch('condition')}>
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
                    Upload Featured Image *
                  </label>
                  <ImageUpload
                    multiple={false}
                    onUpload={(file) => setValue('featuredImage', file)}
                    placeholder="Upload Image here"
                    subtitle="High quality images only"
                    required={true}
                    existingImages={existingProperty?.images?.[0] ? [existingProperty.images[0]] : []}
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
                    Property Owner
                  </label>
                  <Input
                    {...register('propertyOwner')}
                    placeholder="Enter property owner name"
                    className="w-full border-black10"
                  />
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

export default EditPropertyPage

