'use client'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

const VerificationSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Account Activated!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your email has been successfully verified. Your account is now active and ready to use.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-green-800">
              <strong>What's next?</strong> You can now log in to your account and start exploring properties, services, and more on Find-a-Home FUTA.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/auth">
              <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto min-w-[200px]">
                Continue to Login
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <div>
              <Link href="/">
                <Button variant="outline" className="w-full md:w-auto">
                  Go to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default VerificationSuccessPage

