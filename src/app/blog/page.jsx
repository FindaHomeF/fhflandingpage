'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

const mockBlogPosts = [
  {
    id: '1',
    slug: 'tips-for-finding-student-accommodation-in-akure',
    title: '10 Essential Tips for Finding Student Accommodation in Akure',
    excerpt: 'Discover the best strategies for finding safe, affordable, and convenient housing near FUTA campus.',
    category: 'Housing Tips',
    author: 'John Doe',
    date: '2024-01-15',
    image: '/declutter1.png',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '2',
    slug: 'budget-friendly-furniture-ideas',
    title: 'Budget-Friendly Furniture Ideas for Student Dorms',
    excerpt: 'Transform your student accommodation into a comfortable home without breaking the bank.',
    category: 'Lifestyle',
    author: 'Sarah Smith',
    date: '2024-01-10',
    image: '/declutter1.png',
    readTime: '4 min read',
    featured: false
  },
  {
    id: '3',
    slug: 'decluttering-guide-for-students',
    title: 'The Ultimate Decluttering Guide for Students',
    excerpt: 'Learn how to declutter your space and sell unwanted items to fellow students.',
    category: 'Decluttering',
    author: 'Mike Johnson',
    date: '2024-01-05',
    image: '/declutter1.png',
    readTime: '6 min read',
    featured: false
  }
]

const categories = ['All', 'Housing Tips', 'Lifestyle', 'Decluttering', 'Marketplace', 'Campus Life']

export default function BlogPage() {
  const [posts] = useState(mockBlogPosts)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = posts.find(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest tips, guides, and insights for student living in Akure
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && filteredPosts.includes(featuredPost) && (
            <div className="mb-12">
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="bg-white border-2 border-primary/20 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{featuredPost.category}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-primary">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
