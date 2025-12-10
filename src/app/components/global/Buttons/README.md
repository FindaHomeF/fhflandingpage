# ShareButton Component

A reusable button component for sharing links with toast notifications.

## Features
- ✅ Copies dynamic URLs to clipboard
- ✅ Supports both relative and absolute URLs
- ✅ Toast notifications on success/error
- ✅ Customizable button text and styling
- ✅ Icon-only mode available

## Usage

### Basic Usage
```jsx
import ShareButton from '@/app/components/global/Buttons/ShareButton';

<ShareButton shareUrl="/sp/123" />
```

### With Custom Text
```jsx
<ShareButton 
    shareUrl="/sp/123" 
    buttonText="Share Property"
/>
```

### Icon Only (Mobile)
```jsx
<ShareButton 
    shareUrl="/sp/123" 
    iconOnly={true}
/>
```

### Custom Styling
```jsx
<ShareButton 
    shareUrl="/sp/123"
    className="!w-fit px-7 max-lg:w-full"
/>
```

### Full URL
```jsx
<ShareButton 
    shareUrl="https://example.com/property/123"
/>
```

### Custom Messages
```jsx
<ShareButton 
    shareUrl="/sp/123"
    successMessage="Property link copied!"
    errorMessage="Could not copy link"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shareUrl` | string | **required** | Relative or absolute URL to share |
| `className` | string | `""` | Additional CSS classes |
| `iconOnly` | boolean | `false` | Hide button text, show icon only |
| `buttonText` | string | `"Share"` | Text displayed on button |
| `successMessage` | string | `"Link copied to clipboard!"` | Toast message on success |
| `errorMessage` | string | `"Failed to copy link!"` | Toast message on error |

## How It Works

1. **Relative URLs**: Automatically prepends `window.location.origin`
   - Input: `/sp/123` → Output: `https://yourdomain.com/sp/123`

2. **Absolute URLs**: Uses as-is
   - Input: `https://example.com/page` → Output: `https://example.com/page`

3. **Toast Notifications**: Powered by Sonner
   - Success: Green toast at top-right
   - Error: Red toast at top-right

## Examples in Production

### In ListingBox Component
```jsx
<ShareButton 
    shareUrl={`/sp/${propertyId}`}
    className="w-fit md:w-3/6"
/>
```

### In PropertyDetails Component
```jsx
<ShareButton 
    shareUrl={`/sp/${propertyId}`}
    className='!w-fit px-7'
    buttonText="Share Property"
/>
```

### In DeclutteredBox Component
```jsx
<ShareButton 
    shareUrl={`/declutter/${itemId}`}
    buttonText="Share Item"
/>
```

