"use client"
import { MessageCircle, Phone, Mail } from 'lucide-react'

const ContactHero = () => {
  return (
    <div className="relative bg-primary text-white py-20 md:py-28">
      <div className="w-[90%] md:w-5/6 mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          We're Here to Help
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Questions about finding accommodation? Need assistance with our platform? Our dedicated support team is ready to help you every step of the way.
        </p>

        {/* Quick Contact Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Phone size={20} />
            </div>
            <span className="text-sm md:text-base">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Mail size={20} />
            </div>
            <span className="text-sm md:text-base">Quick Response</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <span className="text-sm md:text-base">Live Chat</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHero

