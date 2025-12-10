'use client';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const StudentContext = createContext(null);

export const StudentProvider = ({ children }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Load student profile from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('studentProfile');
      if (stored) {
        setStudentProfile(JSON.parse(stored));
      }
    }
  }, []);

  // Check if profile is complete
  const isProfileComplete = useMemo(() => {
    if (!studentProfile) return false;
    return !!(
      studentProfile.profilePicture &&
      studentProfile.description &&
      studentProfile.location
    );
  }, [studentProfile]);

  // Check if Student ID is uploaded
  const isStudentIdUploaded = useMemo(() => {
    if (!studentProfile) return false;
    return !!studentProfile.studentIdDocument;
  }, [studentProfile]);

  // Check if Student ID is approved
  const isStudentIdApproved = useMemo(() => {
    if (!studentProfile) return false;
    return studentProfile.studentIdApprovalStatus === 'approved';
  }, [studentProfile]);

  // Check if can manage listings (profile complete + Student ID approved)
  const canManageListings = useMemo(() => {
    return isProfileComplete && isStudentIdUploaded && isStudentIdApproved;
  }, [isProfileComplete, isStudentIdUploaded, isStudentIdApproved]);

  const isNavItemActive = useMemo(() => {
    return (itemHref) => {
      if (!mounted) return false;
      if (!pathname) return false;
      const isExactMatch = pathname === itemHref;
      const isModuleSubPage = itemHref !== '/student' && 
                              itemHref !== '/student/profile' &&
                              pathname.startsWith(itemHref + '/');
      return isExactMatch || isModuleSubPage;
    };
  }, [pathname, mounted]);

  const updateProfile = (updates) => {
    const updated = { ...studentProfile, ...updates };
    setStudentProfile(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('studentProfile', JSON.stringify(updated));
    }
  };

  return (
    <StudentContext.Provider value={{ 
      isNavItemActive, 
      studentProfile, 
      setStudentProfile: updateProfile,
      isProfileComplete,
      isStudentIdUploaded,
      isStudentIdApproved,
      canManageListings
    }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within StudentProvider');
  }
  return context;
};

