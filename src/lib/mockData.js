// Mock data for apartments with filtering properties
export const mockApartments = [
  { id: 1, image: '/listing1.png', propertyId: "1", title: "Marble Lodge", location: "North Gate, Akure", category: "Single Rooms", featured: true, datePosted: new Date('2024-10-20'), price: 120000, bedrooms: 2, bathrooms: 1, inventory: 5 },
  { id: 2, image: '/listing2.png', propertyId: "2", title: "Sunset Villa", location: "South Gate, Akure", category: "Self-Contain", featured: false, datePosted: new Date('2024-10-19'), price: 85000, bedrooms: 1, bathrooms: 1, inventory: 3 },
  { id: 3, image: '/listing3.png', propertyId: "3", title: "Prime Apartment", location: "West Gate, Akure", category: "Flat / Apartments", featured: true, datePosted: new Date('2024-10-18'), price: 150000, bedrooms: 3, bathrooms: 2, inventory: 2 },
  { id: 4, image: '/listing4.png', propertyId: "4", title: "Student Haven", location: "North Gate, Akure", category: "Shared Apartments", featured: false, datePosted: new Date('2024-10-17'), price: 60000, bedrooms: 2, bathrooms: 1, inventory: 8 },
  { id: 5, image: '/listing1.png', propertyId: "5", title: "Cozy Room", location: "South Gate, Akure", category: "Single Rooms", featured: true, datePosted: new Date('2024-10-16'), price: 95000, bedrooms: 1, bathrooms: 1, inventory: 4 },
  { id: 6, image: '/listing2.png', propertyId: "6", title: "Shop Space", location: "North Gate, Akure", category: "Shop Spaces", featured: false, datePosted: new Date('2024-10-15'), price: 200000, bedrooms: 0, bathrooms: 1, inventory: 1 },
  { id: 7, image: '/listing3.png', propertyId: "7", title: "Luxury Shortlet", location: "West Gate, Akure", category: "Shortlets", featured: true, datePosted: new Date('2024-10-14'), price: 180000, bedrooms: 2, bathrooms: 2, inventory: 6 },
  { id: 8, image: '/listing4.png', propertyId: "8", title: "Budget Room", location: "South Gate, Akure", category: "Single Rooms", featured: false, datePosted: new Date('2024-10-13'), price: 70000, bedrooms: 1, bathrooms: 1, inventory: 10 },
  { id: 9, image: '/listing1.png', propertyId: "9", title: "Modern Self-Con", location: "North Gate, Akure", category: "Self-Contain", featured: false, datePosted: new Date('2024-10-12'), price: 110000, bedrooms: 1, bathrooms: 1, inventory: 3 },
  { id: 10, image: '/listing2.png', propertyId: "10", title: "Family Apartment", location: "West Gate, Akure", category: "Flat / Apartments", featured: true, datePosted: new Date('2024-10-11'), price: 250000, bedrooms: 3, bathrooms: 2, inventory: 2 },
  { id: 11, image: '/listing3.png', propertyId: "11", title: "Shared Living", location: "South Gate, Akure", category: "Shared Apartments", featured: false, datePosted: new Date('2024-10-10'), price: 50000, bedrooms: 2, bathrooms: 1, inventory: 12 },
  { id: 12, image: '/listing4.png', propertyId: "12", title: "Executive Room", location: "North Gate, Akure", category: "Single Rooms", featured: true, datePosted: new Date('2024-10-09'), price: 135000, bedrooms: 1, bathrooms: 1, inventory: 4 },
  { id: 13, image: '/listing1.png', propertyId: "13", title: "Commercial Shop", location: "West Gate, Akure", category: "Shop Spaces", featured: false, datePosted: new Date('2024-10-08'), price: 300000, bedrooms: 0, bathrooms: 1, inventory: 1 },
  { id: 14, image: '/listing2.png', propertyId: "14", title: "Holiday Shortlet", location: "South Gate, Akure", category: "Shortlets", featured: true, datePosted: new Date('2024-10-07'), price: 150000, bedrooms: 2, bathrooms: 1, inventory: 5 },
  { id: 15, image: '/listing3.png', propertyId: "15", title: "Spacious Self-Con", location: "North Gate, Akure", category: "Self-Contain", featured: false, datePosted: new Date('2024-10-06'), price: 125000, bedrooms: 1, bathrooms: 1, inventory: 2 },
  { id: 16, image: '/listing4.png', propertyId: "16", title: "Affordable Room", location: "West Gate, Akure", category: "Single Rooms", featured: false, datePosted: new Date('2024-10-05'), price: 80000, bedrooms: 1, bathrooms: 1, inventory: 7 },
  { id: 17, image: '/listing1.png', propertyId: "17", title: "Luxury Flat", location: "South Gate, Akure", category: "Flat / Apartments", featured: true, datePosted: new Date('2024-10-04'), price: 280000, bedrooms: 4, bathrooms: 3, inventory: 1 },
  { id: 18, image: '/listing2.png', propertyId: "18", title: "Student Shared", location: "North Gate, Akure", category: "Shared Apartments", featured: false, datePosted: new Date('2024-10-03'), price: 55000, bedrooms: 2, bathrooms: 1, inventory: 9 },
  { id: 19, image: '/listing3.png', propertyId: "19", title: "Premium Room", location: "West Gate, Akure", category: "Single Rooms", featured: true, datePosted: new Date('2024-10-02'), price: 145000, bedrooms: 1, bathrooms: 1, inventory: 3 },
  { id: 20, image: '/listing4.png', propertyId: "20", title: "Retail Shop", location: "South Gate, Akure", category: "Shop Spaces", featured: false, datePosted: new Date('2024-10-01'), price: 350000, bedrooms: 0, bathrooms: 1, inventory: 1 },
  { id: 21, image: '/listing1.png', propertyId: "21", title: "Weekend Shortlet", location: "North Gate, Akure", category: "Shortlets", featured: false, datePosted: new Date('2024-09-30'), price: 120000, bedrooms: 2, bathrooms: 1, inventory: 4 },
  { id: 22, image: '/listing2.png', propertyId: "22", title: "Deluxe Self-Con", location: "West Gate, Akure", category: "Self-Contain", featured: true, datePosted: new Date('2024-09-29'), price: 165000, bedrooms: 1, bathrooms: 1, inventory: 2 },
  { id: 23, image: '/listing3.png', propertyId: "23", title: "Standard Flat", location: "South Gate, Akure", category: "Flat / Apartments", featured: false, datePosted: new Date('2024-09-28'), price: 190000, bedrooms: 2, bathrooms: 2, inventory: 3 },
  { id: 24, image: '/listing4.png', propertyId: "24", title: "Classic Room", location: "North Gate, Akure", category: "Single Rooms", featured: true, datePosted: new Date('2024-09-27'), price: 105000, bedrooms: 1, bathrooms: 1, inventory: 5 },
];

// Mock data for decluttered items
export const mockDeclutteredItems = [
  { id: 1, image: '/declutter1.png', itemId: "1", title: "Wooden Study Desk", category: "Furniture", featured: true, datePosted: new Date('2024-10-20'), price: 15000, condition: "Good", status: "Available", inventory: 3 },
  { id: 2, image: '/declutter1.png', itemId: "2", title: "Laptop HP Core i5", category: "Electronics", featured: false, datePosted: new Date('2024-10-19'), price: 45000, condition: "Like New", status: "Available", inventory: 1 },
  { id: 3, image: '/declutter1.png', itemId: "3", title: "Engineering Textbooks", category: "Books & Study Materials", featured: true, datePosted: new Date('2024-10-18'), price: 8000, condition: "Good", status: "Available", inventory: 15 },
  { id: 4, image: '/declutter1.png', itemId: "4", title: "Microwave Oven", category: "Home Appliances", featured: false, datePosted: new Date('2024-10-17'), price: 12000, condition: "Fair", status: "Reserved", inventory: 2 },
  { id: 5, image: '/declutter1.png', itemId: "5", title: "Office Chair", category: "Furniture", featured: true, datePosted: new Date('2024-10-16'), price: 18000, condition: "Good", status: "Available", inventory: 5 },
  { id: 6, image: '/declutter1.png', itemId: "6", title: "Cookware Set", category: "Kitchen Items", featured: false, datePosted: new Date('2024-10-15'), price: 6000, condition: "Used", status: "Available", inventory: 8 },
  { id: 7, image: '/declutter1.png', itemId: "7", title: "Wall Art", category: "Room Decor", featured: true, datePosted: new Date('2024-10-14'), price: 4000, condition: "Like New", status: "Available", inventory: 12 },
  { id: 8, image: '/declutter1.png', itemId: "8", title: "Smartphone", category: "Electronics", featured: false, datePosted: new Date('2024-10-13'), price: 35000, condition: "Good", status: "Available", inventory: 2 },
  { id: 9, image: '/declutter1.png', itemId: "9", title: "Wooden Wardrobe", category: "Furniture", featured: false, datePosted: new Date('2024-10-12'), price: 25000, condition: "Fair", status: "Sold", inventory: 0 },
  { id: 10, image: '/declutter1.png', itemId: "10", title: "Calculator", category: "Others", featured: true, datePosted: new Date('2024-10-11'), price: 3000, condition: "Like New", status: "Available", inventory: 20 },
  { id: 11, image: '/declutter1.png', itemId: "11", title: "Physics Textbook", category: "Books & Study Materials", featured: false, datePosted: new Date('2024-10-10'), price: 5000, condition: "Good", status: "Available", inventory: 10 },
  { id: 12, image: '/declutter1.png', itemId: "12", title: "Reading Lamp", category: "Furniture", featured: true, datePosted: new Date('2024-10-09'), price: 7000, condition: "Good", status: "Available", inventory: 6 },
  { id: 13, image: '/declutter1.png', itemId: "13", title: "Electric Kettle", category: "Home Appliances", featured: false, datePosted: new Date('2024-10-08'), price: 4500, condition: "Used", status: "Available", inventory: 4 },
  { id: 14, image: '/declutter1.png', itemId: "14", title: "Plates & Cutlery", category: "Kitchen Items", featured: true, datePosted: new Date('2024-10-07'), price: 3500, condition: "Good", status: "Available", inventory: 10 },
  { id: 15, image: '/declutter1.png', itemId: "15", title: "Bluetooth Speaker", category: "Electronics", featured: false, datePosted: new Date('2024-10-06'), price: 8500, condition: "Like New", status: "Reserved", inventory: 3 },
  { id: 16, image: '/declutter1.png', itemId: "16", title: "Bed Frame", category: "Furniture", featured: false, datePosted: new Date('2024-10-05'), price: 22000, condition: "Fair", status: "Available", inventory: 2 },
  { id: 17, image: '/declutter1.png', itemId: "17", title: "Curtains Set", category: "Room Decor", featured: true, datePosted: new Date('2024-10-04'), price: 5500, condition: "Good", status: "Available", inventory: 7 },
  { id: 18, image: '/declutter1.png', itemId: "18", title: "Backpack", category: "Others", featured: false, datePosted: new Date('2024-10-03'), price: 2500, condition: "Used", status: "Available", inventory: 15 },
  { id: 19, image: '/declutter1.png', itemId: "19", title: "Study Table", category: "Furniture", featured: true, datePosted: new Date('2024-10-02'), price: 16000, condition: "Good", status: "Available", inventory: 4 },
  { id: 20, image: '/declutter1.png', itemId: "20", title: "Chemistry Notes", category: "Books & Study Materials", featured: false, datePosted: new Date('2024-10-01'), price: 2000, condition: "Fair", status: "Available", inventory: 25 },
  { id: 21, image: '/declutter1.png', itemId: "21", title: "Headphones", category: "Electronics", featured: false, datePosted: new Date('2024-09-30'), price: 6500, condition: "Good", status: "Available", inventory: 5 },
  { id: 22, image: '/declutter1.png', itemId: "22", title: "Bookshelf", category: "Furniture", featured: true, datePosted: new Date('2024-09-29'), price: 12000, condition: "Good", status: "Available", inventory: 3 },
  { id: 23, image: '/declutter1.png', itemId: "23", title: "Iron & Board", category: "Home Appliances", featured: false, datePosted: new Date('2024-09-28'), price: 7500, condition: "Used", status: "Available", inventory: 6 },
  { id: 24, image: '/declutter1.png', itemId: "24", title: "Pots & Pans", category: "Kitchen Items", featured: true, datePosted: new Date('2024-09-27'), price: 4000, condition: "Good", status: "Available", inventory: 9 },
];

// Mock data for services
export const mockServices = [
  { id: 1, serviceId: "1", title: "Pro Clean Services", category: "Cleaning Services", featured: true, datePosted: new Date('2024-10-20'), price: 5000, rating: 4.8, location: "North Gate", verified: true },
  { id: 2, serviceId: "2", title: "Swift Movers", category: "Moving & Transportation", featured: false, datePosted: new Date('2024-10-19'), price: 15000, rating: 4.5, location: "South Gate", verified: true },
  { id: 3, serviceId: "3", title: "Spark Electricians", category: "Electrical Work", featured: true, datePosted: new Date('2024-10-18'), price: 8000, rating: 4.9, location: "West Gate", verified: true },
  { id: 4, serviceId: "4", title: "Flow Plumbers", category: "Plumbing Services", featured: false, datePosted: new Date('2024-10-17'), price: 7000, rating: 4.3, location: "North Gate", verified: true },
  { id: 5, serviceId: "5", title: "Elite Cleaners", category: "Cleaning Services", featured: true, datePosted: new Date('2024-10-16'), price: 6000, rating: 5.0, location: "South Gate", verified: true },
  { id: 6, serviceId: "6", title: "Wood Masters", category: "Carpentry & Furniture", featured: false, datePosted: new Date('2024-10-15'), price: 12000, rating: 4.6, location: "West Gate", verified: true },
  { id: 7, serviceId: "7", title: "Design Pro", category: "Interior Decoration", featured: true, datePosted: new Date('2024-10-14'), price: 20000, rating: 4.7, location: "North Gate", verified: true },
  { id: 8, serviceId: "8", title: "Handy Helper", category: "Others", featured: false, datePosted: new Date('2024-10-13'), price: 4000, rating: 4.2, location: "South Gate", verified: false },
  { id: 9, serviceId: "9", title: "Fresh Clean Co", category: "Cleaning Services", featured: false, datePosted: new Date('2024-10-12'), price: 5500, rating: 4.4, location: "West Gate", verified: true },
  { id: 10, serviceId: "10", title: "Quick Move Express", category: "Moving & Transportation", featured: true, datePosted: new Date('2024-10-11'), price: 18000, rating: 4.8, location: "North Gate", verified: true },
  { id: 11, serviceId: "11", title: "Power Fix", category: "Electrical Work", featured: false, datePosted: new Date('2024-10-10'), price: 9000, rating: 4.5, location: "South Gate", verified: true },
  { id: 12, serviceId: "12", title: "Pipe Masters", category: "Plumbing Services", featured: true, datePosted: new Date('2024-10-09'), price: 7500, rating: 4.9, location: "West Gate", verified: true },
  { id: 13, serviceId: "13", title: "Sparkle Clean", category: "Cleaning Services", featured: false, datePosted: new Date('2024-10-08'), price: 4500, rating: 4.1, location: "North Gate", verified: true },
  { id: 14, serviceId: "14", title: "Custom Furniture", category: "Carpentry & Furniture", featured: true, datePosted: new Date('2024-10-07'), price: 15000, rating: 4.7, location: "South Gate", verified: true },
  { id: 15, serviceId: "15", title: "Style Interiors", category: "Interior Decoration", featured: false, datePosted: new Date('2024-10-06'), price: 25000, rating: 4.6, location: "West Gate", verified: true },
  { id: 16, serviceId: "16", title: "Fix It All", category: "Others", featured: false, datePosted: new Date('2024-10-05'), price: 3500, rating: 4.0, location: "North Gate", verified: false },
  { id: 17, serviceId: "17", title: "Deep Clean Pro", category: "Cleaning Services", featured: true, datePosted: new Date('2024-10-04'), price: 6500, rating: 4.9, location: "South Gate", verified: true },
  { id: 18, serviceId: "18", title: "Reliable Movers", category: "Moving & Transportation", featured: false, datePosted: new Date('2024-10-03'), price: 16000, rating: 4.4, location: "West Gate", verified: true },
  { id: 19, serviceId: "19", title: "Voltage Experts", category: "Electrical Work", featured: true, datePosted: new Date('2024-10-02'), price: 10000, rating: 4.8, location: "North Gate", verified: true },
  { id: 20, serviceId: "20", title: "Drain Doctors", category: "Plumbing Services", featured: false, datePosted: new Date('2024-10-01'), price: 8500, rating: 4.5, location: "South Gate", verified: true },
  { id: 21, serviceId: "21", title: "Craft Carpenters", category: "Carpentry & Furniture", featured: false, datePosted: new Date('2024-09-30'), price: 11000, rating: 4.3, location: "West Gate", verified: true },
  { id: 22, serviceId: "22", title: "Décor Experts", category: "Interior Decoration", featured: true, datePosted: new Date('2024-09-29'), price: 22000, rating: 4.8, location: "North Gate", verified: true },
  { id: 23, serviceId: "23", title: "Home Shine", category: "Cleaning Services", featured: false, datePosted: new Date('2024-09-28'), price: 5000, rating: 4.2, location: "South Gate", verified: true },
  { id: 24, serviceId: "24", title: "General Services", category: "Others", featured: true, datePosted: new Date('2024-09-27'), price: 4500, rating: 4.4, location: "West Gate", verified: false },
];

// Apartment categories
export const apartmentCategories = [
  "Single Rooms",
  "Self-Contain",
  "Flat / Apartments",
  "Shared Apartments",
  "Shop Spaces",
  "Shortlets"
];

// Decluttering categories
export const declutteringCategories = [
  "Furniture",
  "Electronics",
  "Books & Study Materials",
  "Home Appliances",
  "Kitchen Items",
  "Room Decor",
  "Others"
];

// Service categories
export const serviceCategories = [
  "Cleaning Services",
  "Moving & Transportation",
  "Electrical Work",
  "Plumbing Services",
  "Carpentry & Furniture",
  "Interior Decoration",
  "Others"
];

