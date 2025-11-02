"use client"
import { MapPin } from 'lucide-react'

const ContactMap = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Visit Our Office
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Prefer a face-to-face consultation? Visit our office near FUTA campus. Our team is ready to guide you through the accommodation search process and answer all your questions.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative bg-grayBg overflow-hidden rounded-2xl" style={{ height: "400px" }}>
        <iframe
          title="Find-a-Home FUTA Office Location"
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=futa%2C+akure&output=embed"
          style={{ width: "100%", height: "100%", border: "0" }}
        ></iframe>
      </div>

      {/* Address Card */}
      <div className="bg-primary text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <MapPin size={32} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">
            Find-a-Home FUTA Headquarters
          </h3>
          <p className="text-white/90 text-lg">
            North Gate Area, Federal University of Technology, Akure
          </p>
          <p className="text-white/80 mt-1">
            Ondo State, Nigeria
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactMap

