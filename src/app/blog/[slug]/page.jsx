'use client'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

const mockPost = {
  id: '1',
  slug: 'tips-for-finding-student-accommodation-in-akure',
  title: '10 Essential Tips for Finding Student Accommodation in Akure',
  content: `
    <p>Finding the right accommodation as a student in Akure can be challenging, but with the right approach, you can secure a comfortable and affordable place to live. Here are our top 10 tips to help you navigate the housing market.</p>
    
    <h2>1. Start Your Search Early</h2>
    <p>The best properties get taken quickly, especially near the Federal University of Technology, Akure (FUTA) campus. Begin your search at least 2-3 months before you need to move in.</p>
    
    <h2>2. Determine Your Budget</h2>
    <p>Before you start looking, decide how much you can comfortably afford each month. Remember to factor in utilities, internet, and transportation costs.</p>
    
    <h2>3. Consider Location Carefully</h2>
    <p>Think about proximity to campus, public transportation, markets, and essential services. Properties closer to campus may cost more but save you time and transport expenses.</p>
    
    <h2>4. Visit Properties in Person</h2>
    <p>Always schedule a viewing before committing. Check for signs of damage, verify the property matches the listing, and ask about any potential issues.</p>
    
    <h2>5. Read the Lease Agreement</h2>
    <p>Don't skip the fine print. Understand your rights, responsibilities, and any additional fees before signing.</p>
  `,
  category: 'Housing Tips',
  author: 'John Doe',
  authorRole: 'Housing Expert',
  date: '2024-01-15',
  image: '/declutter1.png',
  readTime: '5 min read',
  tags: ['Housing', 'Students', 'Akure', 'FUTA']
}

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const { slug } = params
  const post = mockPost // In real app, fetch by slug

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-4xl">
          <button
            onClick={() => router.push('/blog')}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>

          {/* Article Header */}
          <article>
            <div className="mb-6">
              <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="inline-flex items-center gap-2 text-primary font-medium mb-4 hover:underline">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                  {post.authorRole && (
                    <span className="text-gray-400">• {post.authorRole}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-gray-200">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg mb-8">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </article>

          {/* Related Posts */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Link key={i} href="/blog/related-post" className="group">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/declutter1.png"
                        alt="Related post"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        Related Article Title {i}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Brief description of the related article content...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
