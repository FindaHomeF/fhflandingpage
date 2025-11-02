'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy, Gift, Users, TrendingUp, CheckCircle, Share2, QrCode } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import { toast } from 'sonner'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const mockReferralData = {
  stats: {
    totalReferrals: 24,
    activeReferrals: 15,
    totalEarnings: 12000,
    pendingEarnings: 3000,
    conversionRate: 62.5
  },
  referralCode: 'FHF-USER-12345',
  referralLink: 'https://findahomefuta.com/signup?ref=FHF-USER-12345',
  earningsData: [
    { month: 'Jan', earnings: 2000 },
    { month: 'Feb', earnings: 3000 },
    { month: 'Mar', earnings: 2500 },
    { month: 'Apr', earnings: 4500 },
    { month: 'May', earnings: 0 },
    { month: 'Jun', earnings: 0 }
  ],
  referrals: [
    {
      id: '1',
      name: 'John Doe',
      joinedDate: '2024-01-15',
      status: 'active',
      earnings: 500
    },
    {
      id: '2',
      name: 'Sarah Smith',
      joinedDate: '2024-02-20',
      status: 'active',
      earnings: 500
    }
  ]
}

export default function ReferralPage() {
  const [referralData] = useState(mockReferralData)
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralData.referralLink)
    setCopied(true)
    toast.success('Referral link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralData.referralCode)
    toast.success('Referral code copied!')
  }

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Referral Program</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Total Referrals</span>
                <Users className="w-5 h-5" />
              </div>
              <p className="text-3xl font-bold">{referralData.stats.totalReferrals}</p>
              <p className="text-sm opacity-80 mt-1">Refer new users</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Active Referrals</span>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{referralData.stats.activeReferrals}</p>
              <p className="text-sm text-gray-500 mt-1">{referralData.stats.conversionRate}% conversion</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Earnings</span>
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">₦{referralData.stats.totalEarnings.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">All time earnings</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Pending</span>
                <CheckCircle className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">₦{referralData.stats.pendingEarnings.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">Awaiting payout</p>
            </div>
          </div>

          {/* Referral Code Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Referral Link</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Referral Code</label>
                <div className="flex gap-2">
                  <Input
                    value={referralData.referralCode}
                    readOnly
                    className="font-mono text-lg font-bold"
                  />
                  <Button onClick={handleCopyCode} variant="outline">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Referral Link</label>
                <div className="flex gap-2">
                  <Input
                    value={referralData.referralLink}
                    readOnly
                    className="text-sm"
                  />
                  <Button onClick={handleCopyLink} className={copied ? 'bg-green-600 hover:bg-green-700' : ''}>
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on WhatsApp
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on Twitter
                </Button>
                <Button variant="outline">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="earnings" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="referrals">My Referrals</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            <TabsContent value="earnings">
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6">Earnings Over Time</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={referralData.earningsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="earnings" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="referrals">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">My Referrals</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {referralData.referrals.map((referral) => (
                    <div key={referral.id} className="p-6 flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{referral.name}</p>
                        <p className="text-sm text-gray-500">Joined {referral.joinedDate}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          referral.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {referral.status}
                        </span>
                        <p className="text-sm text-gray-600 mt-1">Earned: ₦{referral.earnings.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rewards">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">How It Works</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-semibold">Share Your Link</p>
                        <p className="text-sm text-gray-600">Share your unique referral link with friends</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-semibold">They Sign Up</p>
                        <p className="text-sm text-gray-600">Your friends sign up using your referral link</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-semibold">You Earn Rewards</p>
                        <p className="text-sm text-gray-600">Earn ₦500 when they make their first purchase or list a property</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Reward Tiers</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 1-5 referrals: ₦500 per referral</li>
                    <li>• 6-10 referrals: ₦750 per referral</li>
                    <li>• 11+ referrals: ₦1,000 per referral</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
