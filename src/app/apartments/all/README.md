# All Apartments Page

A comprehensive listings page that displays all available apartments with filtering, sorting, and pagination.

## 📍 Route
`/apartments/all`

## 🎨 Features

### 1. Hero Section
- Similar to the services page hero section
- Displays welcoming message
- Call-to-action buttons for listing and browsing
- No scroll-down button (showScrollDownButton={false})

### 2. Filter Component
- Full-featured filter with:
  - **Price Range**: Min/Max price inputs
  - **Property Specification**: Rooms, Bathrooms
  - **Property Type**: Single Rooms, Shared Apartments, etc.
  - **Furnishing**: Furnished/Unfurnished
  - **Location**: Time from gate, Specific areas
  - **Amenities**: Water, Security, Parking, Electricity
- Search bar with location/type/amenities search
- Sort dropdown: Lowest/Highest/Popularity
- Responsive: Sheet on desktop, Drawer on mobile

### 3. Listings Grid
- **Responsive Grid Layout**:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
  - Large Desktop: 4 columns
- Shows count: "Showing 1-12 of 24 properties"
- Uses existing `ListingBox` component
- Each listing has unique propertyId

### 4. Pagination
- Smart pagination with ellipsis for many pages
- Previous/Next buttons
- Current page highlighted with secondary color
- Auto-scroll to top on page change
- Shows up to 5 page numbers at once

### 5. Layout
- Header at top
- Footer with CTA section at bottom
- Consistent spacing and margins

## 📊 Mock Data

Currently displays **24 mock apartments** with:
- 12 items per page = 2 pages total
- Cycling through 4 listing images (listing1-4.png)
- Sequential property IDs (1-24)

## 🔧 Customization

### Change Items Per Page
```jsx
const ITEMS_PER_PAGE = 12; // Change this value
```

### Update Mock Data
```jsx
const mockListings = [
  { id: 1, image: List1, propertyId: "1" },
  // Add more listings...
];
```

### Modify Hero Text
Edit the `HeroSection` component props or create a custom hero

### Adjust Grid Layout
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
// Modify the responsive breakpoints as needed
```

## 🚀 Navigation

### From Home Page
Click "See All" button on any listing section

### Direct Link
```jsx
<Link href="/apartments/all">View All Apartments</Link>
```

### Back Button
Use browser back or Header navigation

## 📱 Responsive Behavior

- **Mobile**: Single column, drawer filter, touch-friendly pagination
- **Tablet**: 2 columns, sheet filter
- **Desktop**: 3-4 columns, full filter sidebar
- **All**: Smooth scroll to top on page change

## 🔄 State Management

- `currentPage`: Tracks current pagination page
- Filter states managed in `Filter` component
- Auto-updates displayed items based on page

## 🎯 Future Enhancements

- [ ] Connect to real API/database
- [ ] Implement actual filtering logic
- [ ] Add loading states
- [ ] Add empty states
- [ ] Implement favorites/wishlist
- [ ] Add property comparison
- [ ] URL query parameters for filters
- [ ] Share functionality per listing

