import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Custom hook for dashboard stats
export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      // Replace with actual API call
      const response = await fetch('/api/admin/dashboard/stats');
      if (!response.ok) throw new Error('Failed to fetch dashboard stats');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Custom hook for users management
export const useUsers = (filters = {}) => {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: async () => {
      // Replace with actual API call
      const params = new URLSearchParams(filters);
      const response = await fetch(`/api/admin/users?${params}`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
  });
};

// Custom hook for updating user status
export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ userId, status }) => {
      const response = await fetch(`/api/admin/users/${userId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update user status');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      toast.success('User status updated successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update user status');
    },
  });
};

// Custom hook for properties management
export const useProperties = (filters = {}) => {
  return useQuery({
    queryKey: ['properties', filters],
    queryFn: async () => {
      // Replace with actual API call
      const params = new URLSearchParams(filters);
      const response = await fetch(`/api/admin/properties?${params}`);
      if (!response.ok) throw new Error('Failed to fetch properties');
      return response.json();
    },
  });
};

// Custom hook for updating property status
export const useUpdatePropertyStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ propertyId, status }) => {
      const response = await fetch(`/api/admin/properties/${propertyId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update property status');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['properties']);
      toast.success('Property status updated successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update property status');
    },
  });
};

// Custom hook for services management
export const useServices = (filters = {}) => {
  return useQuery({
    queryKey: ['services', filters],
    queryFn: async () => {
      // Replace with actual API call
      const params = new URLSearchParams(filters);
      const response = await fetch(`/api/admin/services?${params}`);
      if (!response.ok) throw new Error('Failed to fetch services');
      return response.json();
    },
  });
};

// Custom hook for analytics data
export const useAnalytics = (type, timeRange = '6months') => {
  return useQuery({
    queryKey: ['analytics', type, timeRange],
    queryFn: async () => {
      // Replace with actual API call
      const response = await fetch(`/api/admin/analytics/${type}?range=${timeRange}`);
      if (!response.ok) throw new Error('Failed to fetch analytics');
      return response.json();
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Custom hook for generating reports
export const useGenerateReport = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (reportData) => {
      const response = await fetch('/api/admin/reports/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reportData),
      });
      if (!response.ok) throw new Error('Failed to generate report');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['reports']);
      toast.success('Report generation started. You will be notified when ready.');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to generate report');
    },
  });
};

// Custom hook for settings
export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      // Replace with actual API call
      const response = await fetch('/api/admin/settings');
      if (!response.ok) throw new Error('Failed to fetch settings');
      return response.json();
    },
  });
};

// Custom hook for updating settings
export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (settings) => {
      const response = await fetch('/api/admin/settings/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (!response.ok) throw new Error('Failed to update settings');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['settings']);
      toast.success('Settings updated successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update settings');
    },
  });
};

