# MouseFollowIcon Component

A smooth, animated icon that follows your mouse cursor with a spring-physics delay effect.

## ✨ Features

- 🎯 **Hidden by default** - Icon only appears on hover
- 🌊 **Smooth spring animation** - Natural, physics-based following motion
- ⏱️ **Delayed tracking** - Icon follows with a smooth delay for elegant effect
- 🎨 **Fully customizable** - Adjust icon, size, and colors
- ♻️ **Reusable** - Works with any link or interactive element

## 🚀 Usage

### Basic Usage
```jsx
import MouseFollowIcon from '@/app/components/global/MouseFollowIcon';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

<MouseFollowIcon icon={GoArrowUpRight} iconSize={20}>
    <Link href="/your-page">
        Your Link Text
    </Link>
</MouseFollowIcon>
```

### With Social Icons
```jsx
import { FaLinkedin } from 'react-icons/fa';

<MouseFollowIcon icon={FaLinkedin} iconSize={24}>
    <Link href="https://linkedin.com">
        LinkedIn
    </Link>
</MouseFollowIcon>
```

### With Images
```jsx
<MouseFollowIcon icon={GoArrowUpRight} iconSize={20}>
    <Link href="/property/123">
        <Image src={propertyImage} alt="Property" />
    </Link>
</MouseFollowIcon>
```

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | **required** | Content to wrap (usually a Link) |
| `icon` | IconType | **required** | React Icon component to display |
| `iconSize` | number | `20` | Size of the icon in pixels |
| `iconColor` | string | `"var(--secondary)"` | Color of the icon |

## 🎨 Animation Details

### Spring Physics Settings:
- **Damping**: 25 (controls bounce/oscillation)
- **Stiffness**: 150 (controls responsiveness)
- **Mass**: 0.5 (controls weight/momentum)

These create a smooth, natural following effect with slight delay.

### Visual Appearance:
- White background
- 2px secondary color border
- Rounded full (circle)
- Drop shadow for depth
- Fade in/out on hover (0.2s)

## 📦 Where It's Used

### 1. **Footer Links**
```jsx
// Navigation links
<MouseFollowIcon icon={GoArrowUpRight} iconSize={16}>
    <Link href="/apartments">Apartments</Link>
</MouseFollowIcon>

// Social media links
<MouseFollowIcon icon={FaLinkedin} iconSize={24}>
    <Link href="#">LinkedIn</Link>
</MouseFollowIcon>
```

### 2. **ListingBox Component**
```jsx
// Property image
<MouseFollowIcon icon={GoArrowUpRight} iconSize={20}>
    <Link href={`/sp/${propertyId}`}>
        <Image src={image} alt="Property" />
    </Link>
</MouseFollowIcon>

// Property title
<MouseFollowIcon icon={GoArrowUpRight} iconSize={16}>
    <Link href={`/sp/${propertyId}`}>
        <h5>Property Name</h5>
    </Link>
</MouseFollowIcon>
```

### 3. **DeclutteredBox Component**
```jsx
// Item image
<MouseFollowIcon icon={GoArrowUpRight} iconSize={20}>
    <Link href={`/sp/${itemId}`}>
        <Image src={image} alt="Item" />
    </Link>
</MouseFollowIcon>

// Item title
<MouseFollowIcon icon={GoArrowUpRight} iconSize={16}>
    <Link href={`/sp/${itemId}`}>
        <h4>Item Name</h4>
    </Link>
</MouseFollowIcon>
```

## 🎯 Best Practices

### Icon Size Guidelines:
- **Small text links**: 16px
- **Medium links/buttons**: 20px
- **Large social icons**: 24px
- **Hero sections**: 28-32px

### When to Use:
✅ Footer navigation links
✅ Property/product cards
✅ Social media links
✅ Call-to-action buttons
✅ Gallery thumbnails

### When NOT to Use:
❌ Mobile touch interfaces (no hover)
❌ Form inputs
❌ Disabled elements
❌ Already icon-heavy UIs

## 🔧 Customization Examples

### Different Icon Colors
```jsx
<MouseFollowIcon 
    icon={FaHeart} 
    iconSize={20}
    iconColor="var(--primary)"
>
    <Link href="/favorites">Favorites</Link>
</MouseFollowIcon>
```

### Custom Spring Settings
To adjust the animation, modify the `springConfig` in the component:
```javascript
const springConfig = { 
    damping: 25,     // Higher = less bounce
    stiffness: 150,  // Higher = faster response
    mass: 0.5        // Higher = more momentum
};
```

## 🎬 How It Works

1. **User hovers** over the wrapped element
2. **Icon appears** with fade-in animation
3. **Mouse moves** - position is tracked
4. **Spring physics** creates smooth delayed following
5. **User leaves** - icon fades out

The spring animation creates a natural "elastic" feel, making the icon feel like it's being pulled by the cursor rather than rigidly following it.

## 🌟 Tips

- Keep icon size proportional to link size
- Use consistent icons across similar elements
- Test on different screen sizes
- Consider accessibility (icon is decorative only)
- The effect works best on desktop/laptop (requires mouse)

## 🐛 Troubleshooting

**Icon not appearing?**
- Check that you're importing a valid React Icon
- Ensure the component is marked as `"use client"`

**Animation feels jerky?**
- Adjust spring physics values
- Check browser performance
- Reduce icon size for better performance

**Icon positioned incorrectly?**
- Verify parent container doesn't have `overflow: hidden`
- Check z-index stacking context

