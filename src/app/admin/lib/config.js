// Admin Dashboard Configuration
export const ADMIN_CONFIG = {
  // API Configuration
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  ADMIN_API_URL: process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3000/api/admin',
  
  // EmailJS Configuration
  EMAILJS: {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  },
  
  // Feature Flags
  FEATURES: {
    ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    REPORTS: process.env.NEXT_PUBLIC_ENABLE_REPORTS === 'true',
    EMAIL_NOTIFICATIONS: process.env.NEXT_PUBLIC_ENABLE_EMAIL_NOTIFICATIONS === 'true',
  },
  
  // Performance Configuration
  PERFORMANCE: {
    CACHE_DURATION: parseInt(process.env.NEXT_PUBLIC_CACHE_DURATION) || 300000, // 5 minutes
    MAX_RETRIES: parseInt(process.env.NEXT_PUBLIC_MAX_RETRIES) || 3,
    DEBOUNCE_DELAY: 300,
  },
  
  // Security Configuration
  SECURITY: {
    SESSION_TIMEOUT: 30, // minutes
    MAX_LOGIN_ATTEMPTS: 5,
    PASSWORD_POLICY: 'strong',
  },
  
  // UI Configuration
  UI: {
    SIDEBAR_COLLAPSED_BY_DEFAULT: false,
    THEME: 'light',
    ANIMATIONS_ENABLED: true,
  },
  
  // Development Configuration
  DEBUG: {
    ENABLED: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
    MOCK_API: process.env.NEXT_PUBLIC_MOCK_API === 'true',
    LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL || 'error',
  },
};

// Validation function
export const validateConfig = () => {
  const required = [
    'EMAILJS.SERVICE_ID',
    'EMAILJS.PUBLIC_KEY',
    'EMAILJS.TEMPLATE_ID',
  ];
  
  const missing = required.filter(key => {
    const value = key.split('.').reduce((obj, k) => obj?.[k], ADMIN_CONFIG);
    return !value || value.includes('your_');
  });
  
  if (missing.length > 0) {
    console.warn('Admin Dashboard: Missing configuration for:', missing.join(', '));
  }
  
  return missing.length === 0;
};

// Initialize configuration
if (typeof window !== 'undefined') {
  validateConfig();
}

