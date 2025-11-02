'use client';

import { LuTag } from 'react-icons/lu';

export default function ItemListingSection({ title, items = [] }) {
  // Sample data to match the image
  const sampleItems = [
    {
      id: 1,
      name: "Electronic Blender",
      price: "NGN 10,000",
      condition: "Good",
      image: "/features-service.png" // Using available image
    },
    {
      id: 2,
      name: "Washing Machine", 
      price: "NGN 10,000",
      condition: "Good",
      image: "/features-apartment.png" // Using available image
    },
    {
      id: 3,
      name: "Playstation 5",
      price: "NGN 10,000", 
      condition: "Good",
      image: "/features-declutter.png" // Using available image
    }
  ];

  const displayItems = items.length > 0 ? items : sampleItems;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <a href="#" className="text-sm text-tertiary hover:text-tertiary/50">View All</a>
      </div>
      
      <div className="space-y-4">
        {displayItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            {/* Item Image */}
            <div className="flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
            
            {/* Item Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-gray-800 mb-1">
                {item.name}
              </h4>
              
              <p className="text-sm font-medium text-gray-600 mb-3">
                {item.price}
              </p>
              
              <div className="flex items-center space-x-1">
                <LuTag className="w-3 h-3 text-secondary" />
                <span className="text-sm text-black66">Condition: {item.condition}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
