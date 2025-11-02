// Filter configurations for different content types

export const apartmentFilters = {
  priceRange: {
    min: 5000,
    max: 500000,
    default: [50000, 200000]
  },
  specifications: {
    rooms: ['Any', '1', '2', '3', '4', '5+'],
    bathrooms: ['Any', '1', '2', '3', '4', '5+'],
  },
  propertyTypes: [
    'Single Rooms',
    'Shared Apartments',
    'Shortlets',
    'Self Contain',
    'Shop Spaces',
    'Flat / Apartments'
  ],
  furnishing: ['Furnished', 'Unfurnished'],
  timeFromGate: ['Any', '1-5 mins', '6-10 mins', '11-15 mins', '15+ mins'],
  areas: ['North Gate', 'South Gate', 'West Gate', 'East Gate'],
  amenities: [
    'Water Supply',
    'Security',
    'Parking Space',
    'Electricity Stability',
    'WiFi',
    'Generator'
  ]
};

export const declutteringFilters = {
  priceRange: {
    min: 1000,
    max: 100000,
    default: [5000, 50000]
  },
  categories: [
    'Furniture',
    'Electronics',
    'Books & Study Materials',
    'Home Appliances',
    'Kitchen Items',
    'Room Decor',
    'Others'
  ],
  condition: ['New', 'Like New', 'Good', 'Fair', 'Used'],
  availability: ['Available', 'Reserved', 'Sold'],
};

export const serviceFilters = {
  priceRange: {
    min: 1000,
    max: 50000,
    default: [5000, 20000]
  },
  categories: [
    'Cleaning Services',
    'Moving & Transportation',
    'Electrical Work',
    'Plumbing Services',
    'Carpentry & Furniture',
    'Interior Decoration',
    'Others'
  ],
  rating: ['Any', '4+', '4.5+', '5'],
  responseTime: ['Any', 'Within 1 hour', 'Within 2 hours', 'Within 24 hours'],
  areas: ['North Gate', 'South Gate', 'West Gate', 'East Gate'],
  availability: ['Available Now', 'By Appointment'],
};

export const getFilterConfig = (type) => {
  switch(type) {
    case 'apartments':
      return apartmentFilters;
    case 'decluttering':
      return declutteringFilters;
    case 'services':
      return serviceFilters;
    default:
      return apartmentFilters;
  }
};


