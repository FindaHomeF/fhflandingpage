'use client';
import Link from 'next/link';
import { 
  Home, 
  Users, 
  Package, 
  Wrench, 
  DollarSign, 
  BarChart3, 
  Settings
} from 'lucide-react';
import Image from "next/image"
import { useAdmin } from '../context/AdminContext'

const navigation = [
  { name: 'Home', href: '/admin', icon: Home },
  { name: 'Property Mgt.', href: '/admin/properties', icon: Home },
  { name: 'Decluttered Items', href: '/admin/items', icon: Package },
  { name: 'Service Mgt.', href: '/admin/services', icon: Wrench },
  { name: 'User Mgt.', href: '/admin/users', icon: Users },
  { name: 'Transaction Mgt.', href: '/admin/transactions', icon: DollarSign },
  { name: 'Report Mgt.', href: '/admin/reports', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },

];


export default function AdminSidebar({ isOpen, onClose }) {
  const { isNavItemActive } = useAdmin();
  const Logo = "/Logo/Logosvg.svg"


  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 min-w-64 h-screen shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex-1 flex flex-col overflow-y-auto pt-7 px-2 z-[9999] bg-white">
          <div className="logo-container w-full h-[5rem] flex-shrink-0">
            <Link href={'/admin'}>
              <Image src={Logo}
                alt="fhflogo"
                width={200}
                height={54}
              />
            </Link>
          </div>

          <ul className="space-y-1 px-2 flex-1">
            {navigation.map((item) => {
              const isActive = isNavItemActive(item.href);
              
              const linkClasses = isActive
                ? "group flex items-center px-3 py-3 text-base font-medium rounded-2xl transition-colors relative bg-primary text-white border-l-2 border-white"
                : "group flex items-center px-3 py-3 text-base font-medium rounded-2xl transition-colors relative text-black hover:bg-primaryHover hover:text-white";
              
              const iconClasses = isActive
                ? "flex-shrink-0 w-8 h-8 text-tertiary rounded-xl p-2 bg-white"
                : "flex-shrink-0 w-8 h-8 text-tertiary rounded-xl p-2 bg-transparent group-hover:text-slate-300";
              
              return (
                <li key={item.name}>
                  <Link href={item.href} className={linkClasses} onClick={onClose}>
                    <item.icon className={iconClasses} />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="flex-shrink-0 mt-auto p-4">
            <div className="flex items-center px-3 py-2">
              <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-tertiary" />
              </div>
              <span className="ml-3 text-sm font-medium text-tertiary">Admin</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

