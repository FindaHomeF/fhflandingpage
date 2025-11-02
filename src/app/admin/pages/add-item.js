'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import ImageUpload from './components/ImageUpload'
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

const AddItemPage = () => {
  const router = useRouter()
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      price: '',
      description: '',
      category: '',
      condition: '',
      location: '',
      sellerName: '',
      inventory: 1,
      featuredImage: null,
      otherImages: []
    }
  })

  const onSubmit = async (data) => {
    
    try {
      // Validate that at least one image is uploaded
      if (!data.featuredImage && (!data.otherImages || data.otherImages.length === 0)) {
        toast.error('Please upload at least one image (featured or other images)')
        return
      }
      
      toast.loading('Saving item...')
      
      // Generate a temporary ID for the item using a counter-based approach
      const existingItems = JSON.parse(localStorage.getItem('items') || '[]')
      const nextId = existingItems.length + 1
      const tempId = `#D${nextId.toString().padStart(3, '0')}`
      
      // Convert images to base64
      const images = []
      
      // Use featured image if available, otherwise use first other image
      if (data.featuredImage instanceof File) {
        const base64 = await fileToBase64(data.featuredImage)
        images.push(base64)
      } else if (data.otherImages && data.otherImages.length > 0 && data.otherImages[0] instanceof File) {
        const base64 = await fileToBase64(data.otherImages[0])
        images.push(base64)
        toast.success('First image from "Other Images" used as featured image')
      } else {
        images.push('/declutter1.png')
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
        images.push('/declutter1.png')
      }
      
      // Save to localStorage
      const itemData = {
        id: tempId,
        title: data.title,
        price: `₦${data.price}`,
        category: data.category,
        condition: data.condition,
        location: data.location,
        sellerName: data.sellerName || '',
        description: data.description,
        inventory: parseInt(data.inventory) || 1,
        status: 'Active',
        images: images.slice(0, 5)
      }
      
      // Add new item
      existingItems.push(itemData)
      
      // Save back to localStorage
      localStorage.setItem('items', JSON.stringify(existingItems))
      
      toast.success('Item added successfully!')
      
      // Navigate to the item details page with the temp ID
      router.push(`/admin/items/${encodeURIComponent(tempId)}`)
    } catch (error) {
      console.error('Error saving item:', error)
      toast.error('Failed to save item. Please try again.')
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="space-y-6 px-6 pb-12">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Add Item</h1>
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
                    placeholder="Enter item title"
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
                    placeholder="Enter item description"
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
                      <SelectItem value="Furniture">Furniture</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Books">Books</SelectItem>
                      <SelectItem value="Appliances">Appliances</SelectItem>
                      <SelectItem value="Room Decor">Room Decor</SelectItem>
                      <SelectItem value="Kitchen Items">Kitchen Items</SelectItem>
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
                      <SelectItem value="Excellent">Excellent</SelectItem>
                      <SelectItem value="Good">Good</SelectItem>
                      <SelectItem value="Fair">Fair</SelectItem>
                      <SelectItem value="Poor">Poor</SelectItem>
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
                    Seller Name *
                  </label>
                  <Input
                    {...register('sellerName', { required: 'Seller name is required' })}
                    placeholder="Enter seller name"
                    className="w-full border-black10"
                  />
                  {errors.sellerName && (
                    <p className="text-red-500 text-sm mt-1">{errors.sellerName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddItemPage
