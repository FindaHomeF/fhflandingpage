'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Gift, Trophy, Star, TrendingUp, Award, Zap } from 'lucide-react'
import Link from 'next/link'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

const mockRewards = [
  {
    id: '1',
    title: 'Early Adopter Badge',
    description: 'Join in the first month of launch',
    points: 100,
    icon: Trophy,
    color: 'bg-yellow-100 text-yellow-600',
    unlocked: true,
    unlockedDate: '2024-01-05'
  },
  {
    id: '2',
    title: 'Super Seller',
    description: 'List 10 items successfully',
    points: 250,
    icon: Star,
    color: 'bg-blue-100 text-blue-600',
    unlocked: true,
    unlockedDate: '2024-01-15'
  },
  {
    id: '3',
    title: 'Referral Master',
    description: 'Refer 20 friends',
    points: 500,
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
    unlocked: false,
    progress: 15,
    target: 20
  },
  {
    id: '4',
    title: 'Review Contributor',
    description: 'Write 5 helpful reviews',
    points: 150,
    icon: Award,
    color: 'bg-purple-100 text-purple-600',
    unlocked: false,
    progress: 3,
    target: 5
  },
  {
    id: '5',
    title: 'Power User',
    description: 'Active for 30 consecutive days',
    points: 300,
    icon: Zap,
    color: 'bg-orange-100 text-orange-600',
    unlocked: false,
    progress: 18,
    target: 30
  }
]

export default function RewardsPage() {
  const [rewards] = useState(mockRewards)
  const totalPoints = rewards.filter(r => r.unlocked).reduce((sum, r) => sum + r.points, 0)
  const unlockedCount = rewards.filter(r => r.unlocked).length

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Rewards & Achievements</h1>
              <p className="text-gray-600">Track your progress and unlock rewards</p>
            </div>
            <Link href="/referral">
              <Button variant="outline">View Referral Program</Button>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Total Points</span>
                <Gift className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold">{totalPoints}</p>
              <p className="text-sm opacity-80 mt-1">Points earned</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Achievements Unlocked</span>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900">{unlockedCount}</p>
              <p className="text-sm text-gray-500 mt-1">out of {rewards.length}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900">
                {Math.round((unlockedCount / rewards.length) * 100)}%
              </p>
              <p className="text-sm text-gray-500 mt-1">Completion rate</p>
            </div>
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => {
              const Icon = reward.icon
              const progress = reward.unlocked ? 100 : (reward.progress / reward.target) * 100

              return (
                <div
                  key={reward.id}
                  className={`border-2 rounded-lg p-6 transition-all ${
                    reward.unlocked
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 bg-white opacity-75'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full ${reward.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {reward.unlocked && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Unlocked
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{reward.description}</p>

                  {!reward.unlocked && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{reward.progress} / {reward.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {reward.unlocked && reward.unlockedDate && (
                    <p className="text-xs text-gray-500 mb-4">
                      Unlocked on {new Date(reward.unlockedDate).toLocaleDateString()}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      +{reward.points} points
                    </span>
                    {reward.unlocked && (
                      <Trophy className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Points Redemption */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Redeem Your Points</h2>
            <p className="text-gray-600 mb-6">
              Use your earned points to get discounts, premium features, and exclusive benefits
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold mb-1">₦100 Discount</p>
                <p className="text-sm text-gray-600 mb-3">200 points</p>
                <Button size="sm" variant="outline" className="w-full" disabled={totalPoints < 200}>
                  Redeem
                </Button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold mb-1">Premium Listing</p>
                <p className="text-sm text-gray-600 mb-3">500 points</p>
                <Button size="sm" variant="outline" className="w-full" disabled={totalPoints < 500}>
                  Redeem
                </Button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold mb-1">Featured Ad</p>
                <p className="text-sm text-gray-600 mb-3">1000 points</p>
                <Button size="sm" variant="outline" className="w-full" disabled={totalPoints < 1000}>
                  Redeem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
