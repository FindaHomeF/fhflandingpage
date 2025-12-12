'use client';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ArtisanContext = createContext(null);

export const ArtisanProvider = ({ children }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [artisanProfile, setArtisanProfile] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Load artisan profile from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('artisanProfile');
      if (stored) {
        setArtisanProfile(JSON.parse(stored));
      }
    }
  }, []);

  // Check if profile is complete
  const isProfileComplete = useMemo(() => {
    if (!artisanProfile) return false;
    return !!(
      artisanProfile.profilePicture &&
      artisanProfile.description &&
      artisanProfile.location
    );
  }, [artisanProfile]);

  // Check if NIN is uploaded
  const isNinUploaded = useMemo(() => {
    if (!artisanProfile) return false;
    return !!artisanProfile.ninDocument;
  }, [artisanProfile]);

  // Check if NIN is approved
  const isNinApproved = useMemo(() => {
    if (!artisanProfile) return false;
    return artisanProfile.ninApprovalStatus === 'approved';
  }, [artisanProfile]);

  // Check if can manage services (profile complete + NIN approved)
  const canManageServices = useMemo(() => {
    return isProfileComplete && isNinUploaded && isNinApproved;
  }, [isProfileComplete, isNinUploaded, isNinApproved]);

  const isNavItemActive = useMemo(() => {
    return (itemHref) => {
      if (!mounted) return false;
      if (!pathname) return false;
      const isExactMatch = pathname === itemHref;
      const isModuleSubPage = itemHref !== '/artisan' && 
                              itemHref !== '/artisan/profile' &&
                              pathname.startsWith(itemHref + '/');
      return isExactMatch || isModuleSubPage;
    };
  }, [pathname, mounted]);

  const updateProfile = (updates) => {
    const updated = { ...artisanProfile, ...updates };
    setArtisanProfile(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('artisanProfile', JSON.stringify(updated));
    }
  };

  return (
    <ArtisanContext.Provider value={{ 
      isNavItemActive, 
      artisanProfile, 
      setArtisanProfile: updateProfile,
      isProfileComplete,
      isNinUploaded,
      isNinApproved,
      canManageServices
    }}>
      {children}
    </ArtisanContext.Provider>
  );
};

export const useArtisan = () => {
  const context = useContext(ArtisanContext);
  if (!context) {
    throw new Error('useArtisan must be used within ArtisanProvider');
  }
  return context;
};

