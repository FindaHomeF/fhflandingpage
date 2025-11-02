'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Trophy, Users, TrendingUp, Gift, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

const mockAmbassadorStats = {
  rank: 5,
  totalPoints: 2450,
  referrals: 12,
  eventsHosted: 3,
  communityMembers: 48,
  nextTier: {
    name: 'Gold Ambassador',
    pointsNeeded: 5000,
    pointsRemaining: 2550
  }
}

export default function AmbassadorPortalPage() {
  const [stats] = useState(mockAmbassadorStats)

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Ambassador Portal</h1>
            <p className="text-gray-600">Welcome back! Track your progress and unlock exclusive benefits.</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Rank</span>
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold">#{stats.rank}</p>
              <p className="text-sm opacity-80 mt-1">Current ranking</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Points</span>
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900">{stats.totalPoints}</p>
              <p className="text-sm text-gray-500 mt-1">
                {stats.nextTier.pointsRemaining} to next tier
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Referrals</span>
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900">{stats.referrals}</p>
              <p className="text-sm text-gray-500 mt-1">Active referrals</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Events Hosted</span>
                <Gift className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900">{stats.eventsHosted}</p>
              <p className="text-sm text-gray-500 mt-1">Community events</p>
            </div>
          </div>

          {/* Progress to Next Tier */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Next Tier: {stats.nextTier.name}</h2>
                <p className="text-gray-600">
                  {stats.nextTier.pointsRemaining} points remaining to unlock
                </p>
              </div>
              <Trophy className="w-12 h-12 text-primary" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div
                className="bg-primary h-4 rounded-full transition-all"
                style={{
                  width: `${((stats.totalPoints / stats.nextTier.pointsNeeded) * 100)}%`
                }}
              />
            </div>
            <p className="text-sm text-gray-600">
              {stats.totalPoints} / {stats.nextTier.pointsNeeded} points
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Referral Program</h3>
              <p className="text-gray-600 text-sm mb-4">
                Earn points for every friend you refer to the platform. Get exclusive rewards and move up the ranks.
              </p>
              <Link href="/referral">
                <Button variant="outline" className="w-full">
                  View Referrals <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Rewards & Benefits</h3>
              <p className="text-gray-600 text-sm mb-4">
                Unlock exclusive rewards, discounts, and premium features as you level up your ambassador status.
              </p>
              <Link href="/rewards">
                <Button variant="outline" className="w-full">
                  View Rewards <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Events</h3>
              <p className="text-gray-600 text-sm mb-4">
                Host and participate in community events to earn bonus points and grow your network.
              </p>
              <Button variant="outline" className="w-full">
                View Events <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Benefits List */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Ambassador Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Early access to new features',
                'Priority customer support',
                'Exclusive event invitations',
                'Featured profile on platform',
                'Premium listing credits',
                'Special ambassador badge',
                'Monthly ambassador newsletter',
                'Networking opportunities'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link href="/ambassador/apply">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                Become an Ambassador
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
