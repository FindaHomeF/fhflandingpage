'use client';
import { Plus, Users, Home, Wrench, FileText } from 'lucide-react';
import Link from 'next/link';

const quickActions = [
  {
    title: 'Add User',
    description: 'Create new user account',
    icon: Plus,
    href: '/admin/users/new',
    color: 'bg-blue-500',
  },
  {
    title: 'Verify Property',
    description: 'Review property listings',
    icon: Home,
    href: '/admin/properties/pending',
    color: 'bg-green-500',
  },
  {
    title: 'Approve Service',
    description: 'Review service providers',
    icon: Wrench,
    href: '/admin/services/pending',
    color: 'bg-purple-500',
  },
  {
    title: 'Generate Report',
    description: 'Create monthly report',
    icon: FileText,
    href: '/admin/reports/generate',
    color: 'bg-orange-500',
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mr-3`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{action.title}</p>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

