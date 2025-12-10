# Context-Aware Filtering System

## 🎯 Overview

The filtering system now intelligently routes users to filtered views based on which "See All" button they click, with the ability to toggle filters on/off.

## 📊 How It Works

### 1. **Filter Types**

#### **Recent** (filterType: "recent")
- Shows items sorted by newest first
- Based on `datePosted` field
- URL: `/apartments/all?filterType=recent`

#### **Featured** (filterType: "featured")
- Shows only items with `featured: true`
- Highlights premium/promoted items
- URL: `/apartments/all?filterType=featured`

#### **Category** (filterType: "category", filterValue: "CategoryName")
- Shows items in specific category
- Based on `category` field
- URL: `/apartments/all?filterType=category&filterValue=Furniture`

## 🔄 Data Structure

### Mock Data with Filtering Fields
```javascript
// src/lib/mockData.js
export const mockApartments = [
  {
    id: 1,
    image: '/listing1.png',
    propertyId: "1",
    category: "Single Rooms",      // For category filtering
    featured: true,                 // For featured filtering
    datePosted: new Date('2024-10-20') // For recent filtering
  },
  // ... 24 total items
];
```

### Categories Defined:
- **Apartments**: Single Rooms, Self-Contain, Flat/Apartments, etc.
- **Decluttering**: Furniture, Electronics, Books, etc.
- **Services**: Cleaning, Moving, Electrical, etc.

## 🎨 Section-to-Filter Mapping

### Decluttering Page Sections

| Section | Filter Type | Filter Value | URL |
|---------|-------------|--------------|-----|
| **Recent Items** | `recent` | - | `/decluttering/all?filterType=recent` |
| **Featured Deals** | `featured` | - | `/decluttering/all?filterType=featured` |
| **Categories** | `category` | Selected category | `/decluttering/all?filterType=category&filterValue=Furniture` |

### Apartments Page Sections

| Section | Filter Type | Filter Value | URL |
|---------|-------------|--------------|-----|
| **Latest Listings** | `recent` | - | `/apartments/all?filterType=recent` |
| **Premium Apartments** | `featured` | - | `/apartments/all?filterType=featured` |
| **Categories** | `category` | Selected category | `/apartments/all?filterType=category&filterValue=Single+Rooms` |

### Services Page Sections

| Section | Filter Type | Filter Value | URL |
|---------|-------------|--------------|-----|
| **Latest Listings** | `recent` | - | `/service/all?filterType=recent` |
| **Top-Rated Professionals** | `featured` | - | `/service/all?filterType=featured` |
| **Categories** | `category` | Selected category | `/service/all?filterType=category&filterValue=Cleaning+Services` |

## 🔧 Implementation

### SeeAll Button (Updated)

```jsx
<SeeAll 
  cta="/apartments/all"
  filterType="category"
  filterValue="Single Rooms"
/>

// Generates: /apartments/all?filterType=category&filterValue=Single+Rooms
```

### Grid Components (Client)

Each grid component:
1. **Reads URL params** on load
2. **Applies filters** to items
3. **Shows active filters** with remove buttons
4. **Allows clearing** individual or all filters

```jsx
// ApartmentsGrid.jsx
const searchParams = useSearchParams();
const [filters, setFilters] = useState({
  featured: searchParams.get('filterType') === 'featured',
  recent: searchParams.get('filterType') === 'recent',
  category: searchParams.get('filterType') === 'category' 
    ? searchParams.get('filterValue') 
    : null,
});
```

### Filtering Logic

```jsx
const getFilteredItems = () => {
  let filtered = [...items];

  // Featured filter
  if (filters.featured) {
    filtered = filtered.filter(item => item.featured);
  }

  // Recent filter (sort by date)
  if (filters.recent) {
    filtered = filtered.sort((a, b) => b.datePosted - a.datePosted);
  }

  // Category filter
  if (filters.category) {
    filtered = filtered.filter(item => item.category === filters.category);
  }

  return filtered;
};
```

## 🎯 User Flow Examples

### Example 1: Browse Featured Items
```
1. User is on /decluttering page
2. Sees "Featured Deals" section
3. Clicks "See All" button
4. Redirected to: /decluttering/all?filterType=featured
5. Page shows only featured items (featured: true)
6. Active filter badge appears: "Featured Only ❌"
7. User can click ❌ to remove filter
8. Shows all items again
```

### Example 2: Browse by Category
```
1. User is on /apartments page
2. Clicks "Self-Contain" category button
3. Category button highlights (bg-secondary)
4. Clicks "See All" button
5. Redirected to: /apartments/all?filterType=category&filterValue=Self-Contain
6. Page shows only "Self-Contain" apartments
7. Active filter badge: "Self-Contain ❌"
8. User clicks ❌ to show all categories
```

### Example 3: View Recent Items
```
1. User is on /service page
2. Sees "Latest Listings" section
3. Clicks "See All" button
4. Redirected to: /service/all?filterType=recent
5. Page shows services sorted by newest first
6. Active filter badge: "Recent Items ❌"
7. User clicks "Clear All" to reset
```

## 🎨 Active Filters Component

Visual feedback for active filters:

```jsx
<ActiveFilters filters={filters} onRemoveFilter={handleRemoveFilter} />
```

**Shows:**
- "Featured Only" badge (removable)
- "Recent Items" badge (removable)
- Category name badge (removable)
- "Clear All" link

**Example Display:**
```
Active Filters: [Featured Only ❌] [Clear All]
Active Filters: [Furniture ❌] [Clear All]
Active Filters: [Recent Items ❌] [Clear All]
```

## 🔄 Toggling Filters

### Remove Individual Filter
```jsx
const handleRemoveFilter = (filterType) => {
  if (filterType === 'all') {
    // Clear all filters
    setFilters({ featured: false, recent: false, category: null });
    router.push(window.location.pathname);
  } else {
    // Remove specific filter
    setFilters(prev => ({
      ...prev,
      [filterType]: filterType === 'category' ? null : false
    }));
  }
};
```

### Clear All Filters
```jsx
<Button onClick={() => handleRemoveFilter('all')}>
  Clear All
</Button>
```

## 📱 Empty States

When no items match filters:

```jsx
<div className="text-center py-20">
  <p className="text-xl text-gray-500">
    No properties found matching your filters.
  </p>
  <Button onClick={() => handleRemoveFilter('all')}>
    Clear Filters
  </Button>
</div>
```

## 🚀 Future Enhancements

### 1. **Combine Multiple Filters**
```javascript
// Allow featured + category simultaneously
if (filters.featured && filters.category) {
  filtered = filtered
    .filter(item => item.featured)
    .filter(item => item.category === filters.category);
}
```

### 2. **URL Persistence**
```javascript
// Update URL when filters change
useEffect(() => {
  const params = new URLSearchParams();
  if (filters.featured) params.set('featured', 'true');
  if (filters.recent) params.set('recent', 'true');
  if (filters.category) params.set('category', filters.category);
  
  router.push(`${window.location.pathname}?${params.toString()}`);
}, [filters]);
```

### 3. **Filter from Main Filter Panel**
Connect the Filter component to actually filter data:
```javascript
// In Filter component
<Button onClick={() => {
  router.push('/apartments/all?filterType=category&filterValue=Single+Rooms');
}}>
  SHOW {filteredCount} HOUSES
</Button>
```

### 4. **Database Integration**
```javascript
// Server Component
export default async function AllApartmentsPage({ searchParams }) {
  const filterType = searchParams.filterType;
  const filterValue = searchParams.filterValue;
  
  let query = db.apartments.findMany();
  
  if (filterType === 'featured') {
    query = query.where({ featured: true });
  }
  
  if (filterType === 'category') {
    query = query.where({ category: filterValue });
  }
  
  if (filterType === 'recent') {
    query = query.orderBy({ datePosted: 'desc' });
  }
  
  const apartments = await query;
  
  return <ApartmentsGrid items={apartments} />;
}
```

## ✅ Complete Implementation Status

### Decluttering Page
- ✅ Recent → Recent filter
- ✅ Featured → Featured filter
- ✅ Categories → Category filter (dynamic)

### Apartments Page
- ✅ Latest Listings → Recent filter
- ✅ Premium Apartments → Featured filter
- ✅ Categories → Category filter (dynamic)

### Services Page
- ✅ Latest Listings → Recent filter
- ✅ Top-Rated Professionals → Featured filter
- ✅ Categories → Category filter (dynamic)

### Home Page
- ✅ Property Listings → Recent filter

## 📋 Testing Scenarios

### Test 1: Featured Filter
1. Navigate to any page
2. Click "See All" on Featured/Premium section
3. Verify: Only featured items shown
4. Verify: "Featured Only" badge appears
5. Click ❌ on badge
6. Verify: All items shown

### Test 2: Category Filter
1. Navigate to any page with categories
2. Click a category button (e.g., "Furniture")
3. Click "See All"
4. Verify: Only items in that category shown
5. Verify: Category badge appears
6. Click ❌ on badge
7. Verify: All categories shown

### Test 3: Recent Filter
1. Navigate to any page
2. Click "See All" on Recent/Latest section
3. Verify: Items sorted by newest first
4. Verify: "Recent Items" badge appears
5. Click ❌ on badge
6. Verify: Default sorting applied

### Test 4: Clear All
1. Have any active filter
2. Click "Clear All" link
3. Verify: All filters removed
4. Verify: All items shown
5. Verify: URL cleaned (no params)

## 🎨 Visual Indicators

### Active Filters Badge
```
┌────────────────────────────────┐
│ Active Filters:                │
│ [Featured Only ❌] [Clear All] │
└────────────────────────────────┘
```

### Filter Colors
- **Badge Background**: `bg-secondary/10` (light secondary)
- **Badge Border**: `border-secondary`
- **Badge Text**: `text-secondary`
- **Hover**: `hover:bg-secondary/20`

## 🔑 Key Files

1. **`/src/lib/mockData.js`** - Mock data with filter fields
2. **`/src/app/components/global/ApartmentsGrid.jsx`** - Apartments filtering
3. **`/src/app/components/global/DeclutteredItemsGrid.jsx`** - Items filtering
4. **`/src/app/components/global/ServicesGrid.jsx`** - Services filtering
5. **`/src/app/components/global/ActiveFilters.jsx`** - Filter badges
6. **`/src/app/components/global/Buttons/ButtonGS.jsx`** - SeeAll with params

## 🎉 Summary

✅ All "See All" buttons now pass context-aware filters
✅ URL parameters preserve filter state
✅ Active filters shown with removable badges
✅ Empty states when no matches
✅ Clear individual or all filters
✅ Server-side rendering maintained
✅ Client-side filtering for instant results
✅ Ready for database integration

The filtering system is now fully functional and user-friendly! 🚀

