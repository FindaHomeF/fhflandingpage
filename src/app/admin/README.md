# Admin Dashboard - Find-a-Home FUTA

A comprehensive admin dashboard built with Next.js 15, Tailwind CSS, and modern React patterns for managing the Find-a-Home FUTA platform.

## 🚀 Features

### 📊 Dashboard Overview
- Real-time statistics and metrics
- Interactive charts and graphs
- Recent activity feed
- Quick action buttons
- Responsive design for all devices

### 👥 User Management
- User listing with advanced filtering
- User status management (Active, Pending, Suspended)
- Role-based access control
- User profile management
- Bulk operations support

### 🏠 Property Management
- Property listings management
- Status updates (Available, Rented, Maintenance, etc.)
- Property verification workflow
- Image management
- Agent assignment

### 🔧 Service Management
- Service provider listings
- Service verification and approval
- Rating and review management
- Service category management
- Performance tracking

### 📈 Analytics & Reporting
- Comprehensive analytics dashboard
- User growth tracking
- Property performance metrics
- Revenue analytics
- Custom report generation
- Data export functionality

### ⚙️ Settings & Configuration
- General platform settings
- Notification preferences
- Security configurations
- Email service setup
- System preferences

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v3
- **State Management**: TanStack React Query
- **UI Components**: Radix UI + Custom Components
- **Charts**: Recharts
- **Notifications**: React Hot Toast
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Animations**: Framer Motion

## 📁 Project Structure

```
src/app/admin/
├── components/           # Reusable admin components
│   ├── AdminSidebar.jsx
│   ├── AdminHeader.jsx
│   ├── AdminBreadcrumb.jsx
│   ├── StatsCard.jsx
│   ├── ChartCard.jsx
│   ├── RecentActivity.jsx
│   └── QuickActions.jsx
├── pages/               # Page components
│   ├── users.js
│   ├── properties.js
│   ├── services.js
│   ├── analytics.js
│   ├── reports.js
│   └── settings.js
├── hooks/               # Custom hooks
│   └── useAdmin.js
├── lib/                 # Utilities and configurations
│   ├── query-client.js
│   ├── emailjs.js
│   └── api.js
├── types/               # Type definitions
│   └── constants.js
├── layout.js            # Admin layout wrapper
└── page.js              # Dashboard overview
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Set up environment variables**:
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Access the admin dashboard**:
   Navigate to `http://localhost:3000/admin`

## 📱 Responsive Design

The admin dashboard is fully responsive and optimized for:
- **Desktop**: Full sidebar navigation with expanded views
- **Tablet**: Collapsible sidebar with touch-friendly interface
- **Mobile**: Hamburger menu with mobile-optimized layouts

## 🔧 Customization

### Adding New Pages
1. Create a new page component in `src/app/admin/pages/`
2. Add a route in `src/app/admin/[page-name]/page.js`
3. Update the navigation in `AdminSidebar.jsx`

### Custom Components
- All components are built with Tailwind CSS
- Use the existing design system and color palette
- Follow the established patterns for consistency

### API Integration
- Replace mock data with actual API calls
- Use the provided custom hooks in `useAdmin.js`
- Implement proper error handling with toast notifications

## 🎨 Design System

### Color Palette
- **Primary**: #0D2740 (Dark Blue)
- **Secondary**: #FF9500 (Orange)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Yellow)
- **Error**: #ef4444 (Red)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Font Family**: Mulish (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400-500)
- **Small Text**: Light weight (300-400)

## 🔒 Security Features

- Role-based access control
- Two-factor authentication support
- Session timeout management
- Password policy enforcement
- Login attempt limiting
- Secure API endpoints

## 📊 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Caching**: React Query for data caching
- **Bundle Size**: Optimized imports and tree shaking
- **SEO**: Meta tags and structured data

## 🧪 Testing

The admin dashboard includes:
- Component testing setup
- API mocking capabilities
- Error boundary implementation
- Toast notification testing

## 📝 API Documentation

### Endpoints Structure
```
/api/admin/
├── auth/                 # Authentication
├── dashboard/stats       # Dashboard statistics
├── users/               # User management
├── properties/          # Property management
├── services/            # Service management
├── analytics/           # Analytics data
├── reports/             # Report generation
└── settings/            # Settings management
```

## 🤝 Contributing

1. Follow the established code patterns
2. Use TypeScript for type safety
3. Write meaningful commit messages
4. Test your changes thoroughly
5. Update documentation as needed

## 📄 License

This project is part of the Find-a-Home FUTA platform.

## 🆘 Support

For support and questions:
- Email: admin@findahomefuta.com
- Documentation: [Internal Wiki]
- Issues: [GitHub Issues]

---

Built with ❤️ for the FUTA community

