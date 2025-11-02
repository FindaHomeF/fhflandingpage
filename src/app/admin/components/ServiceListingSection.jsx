'use client';

export default function ServiceListingSection({ title, services = [] }) {
  // Sample data to match the image
  const sampleServices = [
    {
      id: 1,
      name: "John Doe",
      serviceType: "Carpenter",
      price: "Starting at NGN 10,000",
      image: "/alex.PNG" // Using available profile image
    },
    {
      id: 2,
      name: "John Doe", 
      serviceType: "Cleaner",
      price: "Starting at NGN 10,000",
      image: "/babs.PNG" // Using available profile image
    },
    {
      id: 3,
      name: "John Doe",
      serviceType: "Electrician", 
      price: "Starting at NGN 10,000",
      image: "/demilade.PNG" // Using available profile image
    }
  ];

  const displayServices = services.length > 0 ? services : sampleServices;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <a href="#" className="text-sm text-tertiary hover:text-tertiary/50">View All</a>
      </div>
      
      <div className="space-y-4">
        {displayServices.map((service) => (
          <div key={service.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            
            {/* Service Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-gray-800 mb-1">
                {service.name}
              </h4>
              
              <p className="text-sm text-gray-600 mb-2">
                {service.serviceType}
              </p>
              
              <p className="text-sm font-medium text-secondary">
                {service.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
