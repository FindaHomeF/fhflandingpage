'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function AdminBreadcrumb() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [
      { name: 'Admin', href: '/admin', icon: Home }
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        name: name,
        href: currentPath,
        isLast: index === segments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 py-4 px-6 bg-white border-b border-gray-200">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          <Link
            href={breadcrumb.href}
            className={`hover:text-gray-700 transition-colors ${
              breadcrumb.isLast ? 'text-gray-900 font-medium' : ''
            }`}
          >
            {breadcrumb.icon && <breadcrumb.icon className="w-4 h-4 inline mr-1" />}
            {breadcrumb.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}

