// API endpoints for admin dashboard
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/api/admin/auth/login',
  LOGOUT: '/api/admin/auth/logout',
  REFRESH: '/api/admin/auth/refresh',
  
  // Dashboard Stats
  DASHBOARD_STATS: '/api/admin/dashboard/stats',
  
  // Users Management
  USERS: '/api/admin/users',
  USER_DETAILS: (id) => `/api/admin/users/${id}`,
  USER_STATUS: (id) => `/api/admin/users/${id}/status`,
  
  // Properties Management
  PROPERTIES: '/api/admin/properties',
  PROPERTY_DETAILS: (id) => `/api/admin/properties/${id}`,
  PROPERTY_STATUS: (id) => `/api/admin/properties/${id}/status`,
  
  // Services Management
  SERVICES: '/api/admin/services',
  SERVICE_DETAILS: (id) => `/api/admin/services/${id}`,
  
  // Analytics
  ANALYTICS_OVERVIEW: '/api/admin/analytics/overview',
  ANALYTICS_USERS: '/api/admin/analytics/users',
  ANALYTICS_PROPERTIES: '/api/admin/analytics/properties',
  ANALYTICS_REVENUE: '/api/admin/analytics/revenue',
  
  // Reports
  REPORTS: '/api/admin/reports',
  GENERATE_REPORT: '/api/admin/reports/generate',
  
  // Settings
  SETTINGS: '/api/admin/settings',
  UPDATE_SETTINGS: '/api/admin/settings/update',
};

// HTTP methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

// API response status codes
export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

