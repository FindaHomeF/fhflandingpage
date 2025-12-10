# Pagination Component

A smart, responsive pagination component with ellipsis for large page counts.

## 🎯 Features

- **Smart Ellipsis**: Shows "..." for hidden pages
- **Responsive**: Touch-friendly buttons
- **Auto-scroll**: Scrolls to top on page change
- **Disabled States**: Prev/Next disabled at boundaries
- **Active State**: Current page highlighted with secondary color
- **Keyboard Accessible**: All buttons are keyboard navigable

## 📦 Usage

### Basic Example
```jsx
import Pagination from '@/app/components/global/Pagination';

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### With Scroll to Top
```jsx
const handlePageChange = (page) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

## 📋 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `currentPage` | number | ✅ | Current active page (1-indexed) |
| `totalPages` | number | ✅ | Total number of pages |
| `onPageChange` | function | ✅ | Callback when page changes |

## 🎨 Visual Behavior

### Few Pages (≤5)
```
< 1 2 3 4 5 >
```

### Many Pages (>5)
```
< 1 ... 5 6 7 ... 20 >
```

### First Page
```
< 1 2 3 ... 20 >
```

### Last Page
```
< 1 ... 18 19 20 >
```

### Middle Page
```
< 1 ... 9 10 11 ... 20 >
```

## 🔧 Customization

### Change Max Visible Pages
```jsx
const maxVisiblePages = 5; // In getPageNumbers()
```

### Change Button Styles
```jsx
className={`h-10 w-10 rounded-full ${
  currentPage === page
    ? "bg-secondary text-white hover:bg-secondary"
    : ""
}`}
```

### Remove Auto-scroll
```jsx
const handlePageClick = (page) => {
  if (page !== '...' && page !== currentPage) {
    onPageChange(page);
    // Remove: window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
```

## 📱 Responsive Design

- Touch-friendly 40px buttons
- Adequate spacing between buttons
- Clear visual feedback on hover/active
- Works on all screen sizes

## ♿ Accessibility

- Semantic button elements
- Disabled state clearly indicated
- Visual focus states
- Screen reader friendly
- Keyboard navigation support

## 🎯 Logic Flow

1. **Calculate visible pages** based on current page
2. **Always show** first and last page
3. **Show ellipsis** when pages are hidden
4. **Show pages around** current page (current - 1 to current + 1)
5. **Handle clicks**: Update page, scroll to top
6. **Handle prev/next**: Check boundaries, update page

## 🔄 Integration Examples

### With API Data
```jsx
const [data, setData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;

const totalPages = Math.ceil(data.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const currentData = data.slice(startIndex, startIndex + itemsPerPage);

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### With URL Query Parameters
```jsx
import { useRouter, useSearchParams } from 'next/navigation';

const router = useRouter();
const searchParams = useSearchParams();
const currentPage = parseInt(searchParams.get('page') || '1');

const handlePageChange = (page) => {
  router.push(`/apartments/all?page=${page}`);
};
```

## 🎨 Styling Classes

- `h-10 w-10`: Button size
- `rounded-full`: Circular buttons
- `bg-secondary`: Active page color
- `disabled:opacity-50`: Disabled state
- `hover:bg-secondary`: Hover effect

## 🐛 Edge Cases Handled

- ✅ Single page (no pagination shown)
- ✅ Two pages (no ellipsis)
- ✅ First/Last page navigation
- ✅ Disabled prev/next at boundaries
- ✅ Clicking same page (no action)
- ✅ Clicking ellipsis (no action)

