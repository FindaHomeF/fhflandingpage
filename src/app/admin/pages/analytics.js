'use client'
import { useState } from 'react'
import { Calendar, Download, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ChartCard from '../components/ChartCard'
import StatsCard from '../components/StatsCard';
import { Users, Home, Wrench, DollarSign } from 'lucide-react';

// Mock analytics data
const mockAnalytics = {
  overview: {
    totalUsers: 1247,
    totalProperties: 89,
    totalServices: 156,
    totalRevenue: 2450000,
    userGrowth: 12.5,
    propertyGrowth: 8.3,
    serviceGrowth: 15.2,
    revenueGrowth: 18.7,
  },
  userAnalytics: {
    newUsers: [
      { name: 'Jan', value: 45 },
      { name: 'Feb', value: 52 },
      { name: 'Mar', value: 38 },
      { name: 'Apr', value: 67 },
      { name: 'May', value: 89 },
      { name: 'Jun', value: 95 },
    ],
    userRetention: [
      { name: 'Week 1', value: 85 },
      { name: 'Week 2', value: 72 },
      { name: 'Week 3', value: 68 },
      { name: 'Week 4', value: 75 },
    ],
    userSegments: [
      { name: 'Students', value: 65, color: 'var(--chart-blue)' },
      { name: 'Agents', value: 25, color: 'var(--chart-green)' },
      { name: 'Artisans', value: 10, color: 'var(--chart-yellow)' },
    ],
  },
  propertyAnalytics: {
    listings: [
      { name: 'Jan', value: 12 },
      { name: 'Feb', value: 18 },
      { name: 'Mar', value: 15 },
      { name: 'Apr', value: 22 },
      { name: 'May', value: 28 },
      { name: 'Jun', value: 35 },
    ],
    propertyTypes: [
      { name: 'Apartments', value: 45, color: 'var(--chart-blue)' },
      { name: 'Houses', value: 30, color: 'var(--chart-green)' },
      { name: 'Rooms', value: 25, color: 'var(--chart-yellow)' },
    ],
    averagePrice: [
      { name: 'Jan', value: 120000 },
      { name: 'Feb', value: 125000 },
      { name: 'Mar', value: 130000 },
      { name: 'Apr', value: 135000 },
      { name: 'May', value: 140000 },
      { name: 'Jun', value: 145000 },
    ],
  },
  revenueAnalytics: {
    monthlyRevenue: [
      { name: 'Jan', value: 400000 },
      { name: 'Feb', value: 450000 },
      { name: 'Mar', value: 500000 },
      { name: 'Apr', value: 550000 },
      { name: 'May', value: 600000 },
      { name: 'Jun', value: 650000 },
    ],
    revenueSources: [
      { name: 'Commission', value: 60, color: 'var(--chart-blue)' },
      { name: 'Premium Listings', value: 25, color: 'var(--chart-green)' },
      { name: 'Service Fees', value: 15, color: 'var(--chart-yellow)' },
    ],
  },
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('6months')
  const [activeTab, setActiveTab] = useState('overview')
  const [analytics] = useState(mockAnalytics)
  const [isLoading] = useState(false)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'users', name: 'Users' },
    { id: 'properties', name: 'Properties' },
    { id: 'revenue', name: 'Revenue' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into platform performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Users"
              value={analytics.overview.totalUsers}
              change={analytics.overview.userGrowth}
              icon={Users}
              color="blue"
            />
            <StatsCard
              title="Properties"
              value={analytics.overview.totalProperties}
              change={analytics.overview.propertyGrowth}
              icon={Home}
              color="green"
            />
            <StatsCard
              title="Services"
              value={analytics.overview.totalServices}
              change={analytics.overview.serviceGrowth}
              icon={Wrench}
              color="purple"
            />
            <StatsCard
              title="Revenue"
              value={`₦${(analytics.overview.totalRevenue / 1000000).toFixed(1)}M`}
              change={analytics.overview.revenueGrowth}
              icon={DollarSign}
              color="orange"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="User Growth"
              data={analytics.userAnalytics.newUsers}
              type="line"
              color="var(--chart-blue)"
            />
            <ChartCard
              title="Property Listings"
              data={analytics.propertyAnalytics.listings}
              type="bar"
              color="var(--chart-green)"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Revenue Trend"
              data={analytics.revenueAnalytics.monthlyRevenue}
              type="area"
              color="var(--chart-yellow)"
              format="currency"
            />
            <ChartCard
              title="User Retention"
              data={analytics.userAnalytics.userRetention}
              type="line"
              color="var(--chart-purple)"
            />
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="New User Registrations"
              data={analytics.userAnalytics.newUsers}
              type="line"
              color="var(--chart-blue)"
            />
            <ChartCard
              title="User Segments"
              data={analytics.userAnalytics.userSegments}
              type="pie"
              color="var(--chart-blue)"
            />
          </div>
          <ChartCard
            title="User Retention Rate"
            data={analytics.userAnalytics.userRetention}
            type="area"
            color="var(--chart-purple)"
          />
        </div>
      )}

      {/* Properties Tab */}
      {activeTab === 'properties' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Property Listings Over Time"
              data={analytics.propertyAnalytics.listings}
              type="bar"
              color="var(--chart-green)"
            />
            <ChartCard
              title="Property Types Distribution"
              data={analytics.propertyAnalytics.propertyTypes}
              type="pie"
              color="var(--chart-green)"
            />
          </div>
          <ChartCard
            title="Average Property Price"
            data={analytics.propertyAnalytics.averagePrice}
            type="line"
            color="var(--chart-yellow)"
            format="currency"
          />
        </div>
      )}

      {/* Revenue Tab */}
      {activeTab === 'revenue' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Monthly Revenue"
              data={analytics.revenueAnalytics.monthlyRevenue}
              type="area"
              color="var(--chart-yellow)"
              format="currency"
            />
            <ChartCard
              title="Revenue Sources"
              data={analytics.revenueAnalytics.revenueSources}
              type="pie"
              color="var(--chart-yellow)"
            />
          </div>
        </div>
      )}
    </div>
  );
}

