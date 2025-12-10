// TanStack Query options for data fetching
// Centralized query options using TanStack Query

import { queryOptions } from '@tanstack/react-query'
import { mockApartments, mockDeclutteredItems, mockServices } from './mockData'

// Generic data fetcher with localStorage support
export const fetchFromStorage = (key, fallbackData = []) => {
  if (typeof window === 'undefined') return fallbackData
  
  try {
    const stored = localStorage.getItem(key)
    if (stored) {
      const parsed = JSON.parse(stored)
      return Array.isArray(parsed) ? parsed : fallbackData
    }
  } catch (error) {
    console.error(`Error fetching ${key} from localStorage:`, error)
  }
  
  return fallbackData
}

// Save to localStorage
export const saveToStorage = (key, data) => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error)
  }
}

// Helper to convert mock apartments to properties format
const convertMockApartmentsToProperties = () => {
  return mockApartments.map(apt => ({
    id: apt.propertyId || apt.id.toString(),
    propertyId: apt.propertyId || apt.id.toString(),
    title: apt.title,
    price: `₦${apt.price.toLocaleString()}`,
    category: apt.category,
    location: apt.location,
    condition: 'Good',
    room: apt.bedrooms,
    bathroom: apt.bathrooms,
    inventory: apt.inventory,
    status: 'Active',
    images: [apt.image, '/listing2.png', '/listing3.png', '/listing4.png', '/listing1.png'],
    featured: apt.featured,
    datePosted: apt.datePosted,
    agentId: null,
    studentId: null,
    isPremium: false,
    roommatesNeeded: null,
    currentRoommates: null,
    totalCapacity: null
  }))
}

// Helper to convert mock items to decluttered format
const convertMockItemsToDecluttered = () => {
  return mockDeclutteredItems.map(item => ({
    id: item.itemId || `#D${item.id.toString().padStart(3, '0')}`,
    title: item.title,
    price: `₦${item.price.toLocaleString()}`,
    category: item.category,
    condition: item.condition,
    location: 'North Gate, Akure',
    sellerName: 'Student Seller',
    description: `Quality ${item.title} in ${item.condition} condition`,
    inventory: item.inventory,
    status: item.status,
    images: [item.image, '/declutter1.png', '/declutter1.png', '/declutter1.png', '/declutter1.png'],
    agentId: null,
    studentId: null,
    isPremium: item.featured,
    datePosted: item.datePosted
  }))
}

// Helper to convert mock services to services format
const convertMockServicesToServices = () => {
  return mockServices.map(svc => ({
    id: svc.serviceId || svc.id.toString(),
    artisanId: null,
    serviceName: svc.title,
    category: svc.category,
    description: `Professional ${svc.category.toLowerCase()} services`,
    minPrice: svc.price * 0.8,
    maxPrice: svc.price * 1.2,
    price: svc.price,
    location: `${svc.location}, Akure`,
    phone: '08012345678',
    email: `contact@${svc.title.toLowerCase().replace(/\s+/g, '')}.com`,
    availability: 'available',
    status: 'Active',
    images: ['/hero-image.jpeg', '/hero-image.jpeg', '/hero-image.jpeg', '/hero-image.jpeg', '/hero-image.jpeg'],
    isPremium: svc.featured,
    verified: svc.verified,
    rating: svc.rating,
    datePosted: svc.datePosted
  }))
}

// Properties query options
export const propertiesQueryOptions = (filters = {}) => {
  return queryOptions({
    queryKey: ['properties', filters],
    queryFn: () => {
      const stored = fetchFromStorage('properties', [])
      let data = stored.length === 0 ? convertMockApartmentsToProperties() : stored
      
      // Apply filters
      if (Object.keys(filters).length > 0) {
        data = filterProperties(data, filters)
      }
      
      return data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Items/Decluttering query options
export const itemsQueryOptions = (filters = {}) => {
  return queryOptions({
    queryKey: ['items', filters],
    queryFn: () => {
      const stored = fetchFromStorage('items', [])
      let data = stored.length === 0 ? convertMockItemsToDecluttered() : stored
      
      // Apply filters
      if (Object.keys(filters).length > 0) {
        data = filterItems(data, filters)
      }
      
      return data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Services query options
export const servicesQueryOptions = (filters = {}) => {
  return queryOptions({
    queryKey: ['services', filters],
    queryFn: () => {
      const stored = fetchFromStorage('services', [])
      let data = stored.length === 0 ? convertMockServicesToServices() : stored
      
      // Apply filters
      if (Object.keys(filters).length > 0) {
        data = filterServices(data, filters)
      }
      
      return data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Users query options
export const usersQueryOptions = (filters = {}) => {
  return queryOptions({
    queryKey: ['users', filters],
    queryFn: () => {
      return fetchFromStorage('users', [])
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Transactions query options
export const transactionsQueryOptions = (userId, userType) => {
  return queryOptions({
    queryKey: ['transactions', userId, userType],
    queryFn: () => {
      const key = `${userType}Transactions-${userId}`
      return fetchFromStorage(key, [])
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Single property query options
export const propertyQueryOptions = (id) => {
  return queryOptions({
    queryKey: ['properties', id],
    queryFn: async () => {
      const stored = fetchFromStorage('properties', [])
      const data = stored.length === 0 ? convertMockApartmentsToProperties() : stored
      return data.find(p => p.id === id || p.propertyId === id)
    },
  })
}

// Single item query options
export const itemQueryOptions = (id) => {
  return queryOptions({
    queryKey: ['items', id],
    queryFn: async () => {
      const stored = fetchFromStorage('items', [])
      const data = stored.length === 0 ? convertMockItemsToDecluttered() : stored
      return data.find(i => i.id === id || i.itemId === id)
    },
  })
}

// Single service query options
export const serviceQueryOptions = (id) => {
  return queryOptions({
    queryKey: ['services', id],
    queryFn: async () => {
      const stored = fetchFromStorage('services', [])
      const data = stored.length === 0 ? convertMockServicesToServices() : stored
      return data.find(s => s.id === id || s.serviceId === id)
    },
  })
}

// Filter functions
export const filterProperties = (properties, filters = {}) => {
  return properties.filter(prop => {
    if (filters.search && !prop.title?.toLowerCase().includes(filters.search.toLowerCase()) && 
        !prop.location?.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    if (filters.category && filters.category !== 'all' && prop.category !== filters.category) {
      return false
    }
    if (filters.status && filters.status !== 'all' && prop.status !== filters.status) {
      return false
    }
    if (filters.agentId && prop.agentId !== filters.agentId) {
      return false
    }
    if (filters.studentId && prop.studentId !== filters.studentId) {
      return false
    }
    return true
  })
}

export const filterItems = (items, filters = {}) => {
  return items.filter(item => {
    if (filters.search && !item.title?.toLowerCase().includes(filters.search.toLowerCase()) && 
        !item.location?.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    if (filters.category && filters.category !== 'all' && item.category !== filters.category) {
      return false
    }
    if (filters.status && filters.status !== 'all' && item.status !== filters.status) {
      return false
    }
    if (filters.agentId && item.agentId !== filters.agentId) {
      return false
    }
    if (filters.studentId && item.studentId !== filters.studentId) {
      return false
    }
    return true
  })
}

export const filterServices = (services, filters = {}) => {
  return services.filter(service => {
    if (filters.search && !service.serviceName?.toLowerCase().includes(filters.search.toLowerCase()) && 
        !service.category?.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    if (filters.category && filters.category !== 'all' && service.category !== filters.category) {
      return false
    }
    if (filters.status && filters.status !== 'all' && service.status !== filters.status) {
      return false
    }
    if (filters.artisanId && service.artisanId !== filters.artisanId) {
      return false
    }
    return true
  })
}
