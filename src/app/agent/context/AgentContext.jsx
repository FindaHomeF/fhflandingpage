'use client';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AgentContext = createContext(null);

export const AgentProvider = ({ children }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [agentProfile, setAgentProfile] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Load agent profile from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('agentProfile');
      if (stored) {
        setAgentProfile(JSON.parse(stored));
      }
    }
  }, []);

  // Check if profile is complete
  const isProfileComplete = useMemo(() => {
    if (!agentProfile) return false;
    return !!(
      agentProfile.profilePicture &&
      agentProfile.description &&
      agentProfile.location
    );
  }, [agentProfile]);

  // Check if ID is uploaded
  const isIdUploaded = useMemo(() => {
    if (!agentProfile) return false;
    return !!agentProfile.idDocument;
  }, [agentProfile]);

  // Check if ID is approved
  const isIdApproved = useMemo(() => {
    if (!agentProfile) return false;
    return agentProfile.idApprovalStatus === 'approved';
  }, [agentProfile]);

  // Check if can manage items (profile complete + ID approved)
  const canManageItems = useMemo(() => {
    return isProfileComplete && isIdUploaded && isIdApproved;
  }, [isProfileComplete, isIdUploaded, isIdApproved]);

  const isNavItemActive = useMemo(() => {
    return (itemHref) => {
      if (!mounted) return false;
      if (!pathname) return false;
      const isExactMatch = pathname === itemHref;
      const isModuleSubPage = itemHref !== '/agent' && 
                              itemHref !== '/agent/profile' &&
                              pathname.startsWith(itemHref + '/');
      return isExactMatch || isModuleSubPage;
    };
  }, [pathname, mounted]);

  const updateProfile = (updates) => {
    const updated = { ...agentProfile, ...updates };
    setAgentProfile(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('agentProfile', JSON.stringify(updated));
    }
  };

  return (
    <AgentContext.Provider value={{ 
      isNavItemActive, 
      agentProfile, 
      setAgentProfile: updateProfile,
      isProfileComplete,
      isIdUploaded,
      isIdApproved,
      canManageItems
    }}>
      {children}
    </AgentContext.Provider>
  );
};

export const useAgent = () => {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error('useAgent must be used within AgentProvider');
  }
  return context;
};


