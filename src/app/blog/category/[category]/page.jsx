'use client'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

const mockCategoryPosts = [
  {
    id: '1',
    slug: 'tips-for-finding-student-accommodation-in-akure',
    title: '10 Essential Tips for Finding Student Accommodation in Akure',
    excerpt: 'Discover the best strategies for finding safe, affordable, and convenient housing near FUTA campus.',
    author: 'John Doe',
    date: '2024-01-15',
    image: '/declutter1.png',
    readTime: '5 min read'
  },
  {
    id: '2',
    slug: 'understanding-lease-agreements',
    title: 'Understanding Lease Agreements: A Student Guide',
    excerpt: 'Everything you need to know about lease agreements before signing your first rental contract.',
    author: 'Jane Smith',
    date: '2024-01-10',
    image: '/declutter1.png',
    readTime: '4 min read'
  }
]

export default function BlogCategoryPage() {
  const params = useParams()
  const { category } = params
  
  // Format category name for display
  const categoryName = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{categoryName}</h1>
            </div>
            <p className="text-gray-600">
              {mockCategoryPosts.length} {mockCategoryPosts.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </div>

          {mockCategoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCategoryPosts.map((post) => (
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No articles found in this category.</p>
              <Link href="/blog">
                <Button variant="outline">Browse All Articles</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
