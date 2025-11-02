'use client';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize the function to ensure it has a stable reference and handles SSR properly
  const isNavItemActive = useMemo(() => {
    return (itemHref) => {
      // Always return false during SSR to prevent hydration mismatch
      if (!mounted) return false;
      if (!pathname) return false;
      // For exact matches (like Home or Settings)
      const isExactMatch = pathname === itemHref;
      // For module pages, check if current path starts with the module href
      const isModuleSubPage = itemHref !== '/admin' && 
                              itemHref !== '/admin/settings' &&
                              pathname.startsWith(itemHref + '/');
      return isExactMatch || isModuleSubPage;
    };
  }, [pathname, mounted]);

  return (
    <AdminContext.Provider value={{ isNavItemActive }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
