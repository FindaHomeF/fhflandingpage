'use client';

import { LuMapPin, LuTag } from 'react-icons/lu';

export default function ListingSection({ title, listings = [] }) {
  // Sample data to match the image
  const sampleListings = [
    {
      id: 1,
      name: "Marble Lodge",
      location: "North Gate, Akure",
      condition: "Good",
      price: "NGN 120,000",
      image: "/listing1.png"
    },
    {
      id: 2,
      name: "Celebrity Lodge", 
      location: "North Gate, Akure",
      condition: "Good",
      price: "NGN 120,000",
      image: "/listing2.png"
    },
    {
      id: 3,
      name: "Christian Star Lodge",
      location: "North Gate, Akure", 
      condition: "Good",
      price: "NGN 120,000",
      image: "/listing3.png"
    }
  ];

  const displayListings = listings.length > 0 ? listings : sampleListings;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <a href="#" className="text-sm text-tertiary hover:text-tertiary/50">View All</a>
      </div>
      
      <div className="space-y-4">
        {displayListings.map((listing) => (
          <div key={listing.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            {/* Property Image */}
            <div className="flex-shrink-0">
              <img 
                src={listing.image} 
                alt={listing.name}
                className="w-24 h-24 object-cover rounded-md"
              />
            </div>
            
            {/* Property Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-gray-800 truncate">
                {listing.name}
              </h4>
              
              <div className=" mt-1 space-y-4">
                <div className="flex items-center space-x-1">
                  <LuMapPin className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">{listing.location}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <LuTag className="w-3 h-3 text-secondary" />
                  <span className="text-sm text-black66 font-mediun">Condition: {listing.condition}</span>
                </div>
              </div>
            </div>
            
            {/* Price */}
            <div className="flex-shrink-0">
              <span className="text-lg font-semibold text-secondary">
                {listing.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
