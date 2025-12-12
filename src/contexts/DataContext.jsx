'use client'
import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { 
  propertiesQueryOptions, 
  itemsQueryOptions, 
  servicesQueryOptions,
  usersQueryOptions,
  transactionsQueryOptions,
  propertyQueryOptions,
  itemQueryOptions,
  serviceQueryOptions
} from '@/lib/query-options'

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  // Query all data
  const propertiesQuery = useQuery(propertiesQueryOptions())
  const itemsQuery = useQuery(itemsQueryOptions())
  const servicesQuery = useQuery(servicesQueryOptions())
  const usersQuery = useQuery(usersQueryOptions())

  return (
    <DataContext.Provider value={{
      // Query data
      properties: propertiesQuery.data || [],
      items: itemsQuery.data || [],
      services: servicesQuery.data || [],
      users: usersQuery.data || [],
      
      // Loading states
      isLoading: propertiesQuery.isLoading || itemsQuery.isLoading || servicesQuery.isLoading || usersQuery.isLoading,
      
      // Query functions
      propertiesQuery,
      itemsQuery,
      servicesQuery,
      usersQuery,
      
      // Query options for use in components
      propertiesQueryOptions,
      itemsQueryOptions,
      servicesQueryOptions,
      usersQueryOptions,
      transactionsQueryOptions,
      propertyQueryOptions,
      itemQueryOptions,
      serviceQueryOptions
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}

// Hook to get filtered properties
export const useProperties = (filters = {}) => {
  return useQuery(propertiesQueryOptions(filters))
}

// Hook to get filtered items
export const useItems = (filters = {}) => {
  return useQuery(itemsQueryOptions(filters))
}

// Hook to get filtered services
export const useServices = (filters = {}) => {
  return useQuery(servicesQueryOptions(filters))
}

// Hook to get transactions
export const useTransactions = (userId, userType) => {
  return useQuery(transactionsQueryOptions(userId, userType))
}

// Hook to get single property
export const useProperty = (id) => {
  return useQuery(propertyQueryOptions(id))
}

// Hook to get single item
export const useItem = (id) => {
  return useQuery(itemQueryOptions(id))
}

// Hook to get single service
export const useService = (id) => {
  return useQuery(serviceQueryOptions(id))
}
