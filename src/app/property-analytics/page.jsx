'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TrendingUp, Eye, MessageCircle, Calendar, Phone, MapPin, Download } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const mockPropertyAnalytics = {
  totalProperties: 5,
  selectedProperty: {
    id: '1',
    title: 'Modern 2-Bedroom Apartment',
    totalViews: 1245,
    totalInquiries: 45,
    scheduledViewings: 12,
    applications: 8,
    conversionRate: 3.6
  },
  viewsData: [
    { date: 'Week 1', views: 180 },
    { date: 'Week 2', views: 220 },
    { date: 'Week 3', views: 195 },
    { date: 'Week 4', views: 250 },
    { date: 'Week 5', views: 280 },
    { date: 'Week 6', views: 320 }
  ],
  inquirySources: [
    { name: 'Platform Search', value: 65, color: '#3B82F6' },
    { name: 'Direct Link', value: 20, color: '#10B981' },
    { name: 'Featured Listing', value: 15, color: '#F59E0B' }
  ],
  inquiriesByDay: [
    { day: 'Mon', inquiries: 8 },
    { day: 'Tue', inquiries: 12 },
    { day: 'Wed', inquiries: 6 },
    { day: 'Thu', inquiries: 15 },
    { day: 'Fri', inquiries: 18 },
    { day: 'Sat', inquiries: 10 },
    { day: 'Sun', inquiries: 7 }
  ]
}

export default function PropertyAnalyticsPage() {
  const [analytics] = useState(mockPropertyAnalytics)
  const [selectedProperty, setSelectedProperty] = useState('1')

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Analytics</h1>
              <p className="text-gray-600">Track performance of your property listings</p>
            </div>
            <div className="flex gap-3">
              <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select Property" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Modern 2-Bedroom Apartment</SelectItem>
                  <SelectItem value="2">Single Room - North Gate</SelectItem>
                  <SelectItem value="3">Self Contain - South Gate</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Views</span>
                <Eye className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.selectedProperty.totalViews}</p>
              <p className="text-sm text-green-600 mt-1">+15% from last month</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Inquiries</span>
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.selectedProperty.totalInquiries}</p>
              <p className="text-sm text-green-600 mt-1">+8% from last month</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Viewings</span>
                <Calendar className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.selectedProperty.scheduledViewings}</p>
              <p className="text-sm text-gray-500 mt-1">Scheduled</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Applications</span>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.selectedProperty.applications}</p>
              <p className="text-sm text-gray-500 mt-1">Rental applications</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Conversion</span>
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.selectedProperty.conversionRate}%</p>
              <p className="text-sm text-gray-500 mt-1">Views to inquiries</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Views Over Time</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analytics.viewsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Inquiry Sources</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analytics.inquirySources}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {analytics.inquirySources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Inquiries by Day of Week</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analytics.inquiriesByDay}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="inquiries" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recommendations */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Insights</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Your property is receiving consistent views. Consider making it a featured listing to boost visibility.</li>
              <li>• Peak inquiry days are Thursday and Friday. Respond quickly during these days.</li>
              <li>• Most inquiries come from platform search. Optimize your listing keywords and description.</li>
              <li>• Your conversion rate is above average. Keep up the great work!</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
