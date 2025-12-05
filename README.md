# CashFlow - Cash Management Dashboard

Check Here-->  https://cash-dashboard-1.netlify.app/

A modern, professional finance insights platform built with React and Tailwind CSS. The dashboard helps finance teams understand daily cash risks, alerts, and recommendations with an intuitive, responsive interface.

## 🎯 Overview

CashFlow is a **Cash Management Dashboard** designed for finance professionals to:
- Monitor cash position and liquidity status
- Manage account configurations and connections
- Review payment instruction templates
- Monitor policy compliance and transaction limits

The platform provides real-time alerts with priority levels (Critical P1 and Warning P2) and AI-powered insights through an integrated Assistant panel.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Build client and server
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
├── client/
│   ├── pages/
│   │   ├── Dashboard.jsx          # Main dashboard with 4 quadrants
│   │   └── QuadrantDetail.jsx     # Detailed view for selected quadrant
│   ├── components/
│   │   ├── MainLayout.jsx         # Main layout with sidebar and content area
│   │   ├── Sidebar.jsx            # Fixed navigation sidebar
│   │   ├── TopBar.jsx             # Section header with icon and title
│   │   ├── QuadrantCard.jsx       # Individual quadrant card
│   │   ├── AlertsList.jsx         # List of alerts (left column)
│   │   ├── AlertDetails.jsx       # Alert details view (right column)
│   │   └── AssistantPanel.jsx     # AI assistant slide-in panel
│   ├── App.jsx                    # Main app component with routing
│   ├── global.css                 # Global styles and Tailwind config
│   └── vite-env.d.ts              # Vite type definitions
├── server/
│   ├── index.js                   # Express server setup
│   ├── node-build.js              # Production server build
│   └── routes/
│       └── demo.js                # Example API route
├── shared/
│   └── api.js                     # Shared utilities and types
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.js                 # Vite configuration
├── vite.config.server.js          # Server build configuration
├── package.json                   # Project dependencies
└── README.md                       # This file
```

## 🏗️ Architecture

### Layout System

The application uses a modern, responsive layout with:

1. **Fixed Sidebar** (64% on desktop, hidden on mobile)
   - Navigation buttons for 4 quadrants
   - Always visible on desktop, toggled via hamburger menu on mobile
   - Color-coded buttons matching quadrant themes
   - Quick access "Back to Dashboard" button

2. **Top Bar** (Quadrant pages only)
   - Displays current quadrant icon and title
   - Shows quadrant description
   - "Ask Assistant" button on the right
   - Sticky positioning for easy access while scrolling

3. **Scrollable Content Area**
   - Main content fills remaining space
   - Vertical scroll only (sidebar is fixed)
   - Responsive grid layouts
   - Adapts to mobile, tablet, and desktop screens

### Component Hierarchy

```
App
├── BrowserRouter
│   └── Routes
│       ├── Dashboard
│       │   └── MainLayout
│       │       ├── Sidebar
│       │       ├── Header (dashboard only)
│       │       ├── Content (QuadrantCards)
│       │       └── AssistantPanel
│       └── QuadrantDetail
│           └── MainLayout
│               ├── Sidebar
│               ├── TopBar
│               ├── Content (AlertsList + AlertDetails)
│               └── AssistantPanel
```

## 📱 Responsive Design

The application is fully responsive across all device sizes:

### Desktop (1024px+)
- Fixed 256px sidebar always visible
- Two-column alert layout (1/3 + 2/3)
- Full topbar with assistant button
- Optimized spacing and typography

### Tablet (768px - 1023px)
- Fixed sidebar still visible
- Simplified card layouts
- Adjusted padding and gaps
- Touch-friendly buttons

### Mobile (< 768px)
- Hamburger menu toggles sidebar
- Sidebar slides in from left with overlay
- Single column layout for alerts
- Mobile-optimized assistant button (FAB)
- Simplified header with logo

## 🎨 Design System

### Color Palette

- **Indigo** (Primary): #4F46E5 - Main brand color
- **Blue**: #3B82F6 - Secondary actions
- **Red**: #DC2626 - Critical alerts (P1)
- **Amber**: #D97706 - Warning alerts (P2)
- **Slate**: #0F172A - Text and neutrals

### Quadrant Colors

Each quadrant has a unique color theme:
- **Cash & Liquidity**: Blue
- **Account Setup**: Purple
- **Payment Templates**: Cyan
- **Limits & Policy**: Orange

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: 700-800 weight
- **Body**: 400-500 weight
- **Code**: Fira Code (monospace)

## 🔑 Key Features

### 1. Dashboard Page

The main landing page displays:

- **4 Quadrant Cards** in a responsive 2x2 grid
  - Cash & Liquidity
  - Account Setup
  - Payment Templates
  - Limits & Policy

- **Alert Counters** on each card
  - Critical (P1) count in red with pulsing icon
  - Warning (P2) count in amber
  - Click to navigate to detailed view

- **Summary Statistics** at the top
  - Total alerts across all quadrants
  - Critical alerts count
  - Warning alerts count
  - Last update timestamp

- **Help Section** at the bottom
  - Usage guidelines
  - Alert priority explanation
  - Feature highlights

### 2. Quadrant Detail Page

Shows detailed alerts for a specific quadrant:

- **Left Column** - Alerts List
  - Scrollable list of all alerts
  - Priority badge (P1/P2) with color coding
  - Title and 2-line summary
  - Selection highlight (indigo border)
  - Empty state: "Nothing needs attention here today"

- **Right Column** - Alert Details
  - Full alert information when selected
  - Priority label with icon
  - Complete title and summary
  - Reason/Explanation section
  - Recommended Action (highlighted in blue)
  - Accounts Involved with balances
  - Additional metadata (severity, category)

- **Top Bar**
  - Quadrant icon and title
  - Quadrant description
  - Quick assistant access button

### 3. Assistant Panel

An AI-powered slide-in sidebar available on all pages:

- **Features**:
  - Slides in from the right
  - Semi-transparent overlay on mobile
  - Chat-style UI with messages
  - User questions and AI responses
  - Suggested follow-up questions
  - Text input for new queries

- **Sample Content**:
  - Explains financial strategies
  - Provides reasoning for recommendations
  - Answers common questions
  - Offers best practice suggestions

### 4. Navigation

- **Sidebar Navigation**
  - 4 main quadrant buttons
  - Color-coded for visual hierarchy
  - Active state highlighting
  - Quick dashboard link
  - Responsive hamburger menu

- **Page Navigation**
  - React Router 6 for SPA navigation
  - Back to Dashboard link on detail pages
  - Smooth transitions

## 📊 Data Structure

### Quadrant Data

```javascript
{
  id: 'cash-liquidity',
  title: 'Cash & Liquidity',
  description: 'Monitor your cash position...',
  p1Count: 2,
  p2Count: 1,
  icon: DollarSign,
  color: 'from-blue-500 to-blue-600'
}
```

### Alert Data

```javascript
{
  id: 'alert-1',
  priority: 'P1',
  title: 'Insufficient Liquidity Buffer',
  summary: 'Current cash reserves below...',
  explanation: 'Detailed explanation of the issue...',
  recommendation: 'Suggested action to take...',
  category: 'Liquidity Risk',
  accounts: [
    {
      id: 'acc-1',
      name: 'Primary Operating Account',
      institution: 'Chase Bank',
      balance: 320000,
      currency: 'USD'
    }
  ]
}
```

## 🔧 Technology Stack

### Frontend
- **React 18** - UI framework
- **React Router 6** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS
- **Lucide React** - Icon library
- **JavaScript/JSX** - No TypeScript

### Backend
- **Express 5** - Web server
- **CORS** - Cross-origin support
- **Dotenv** - Environment variables

### Build & Deployment
- **Vite** - Fast development and production builds
- **npm/pnpm** - Package management
- **Netlify/Vercel** - Hosting (via MCP)

## 🚀 Development Workflow

### Adding a New Page

1. Create component in `client/pages/YourPage.jsx`
2. Import `MainLayout` component
3. Wrap content with `<MainLayout>` or `<MainLayout topBar={...}>`
4. Add route in `client/App.jsx`:

```javascript
<Route path="/your-page" element={<YourPage />} />
```

### Creating New Components

1. Create in `client/components/YourComponent.jsx`
2. Follow existing patterns (use Lucide icons, Tailwind classes)
3. Use `cn()` utility from `client/lib/utils.ts` for conditional classes
4. Export as default

Example:
```javascript
import { SomeIcon } from 'lucide-react';

export default function YourComponent({ prop1, prop2 }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      {/* Component content */}
    </div>
  );
}
```

### Styling

- Use **Tailwind CSS** utility classes
- Follow color scheme from `client/global.css`
- Use responsive prefixes: `md:`, `lg:`, `sm:`
- Define custom classes in `client/global.css` @layer

### Working with the Sidebar

The sidebar is automatically included via `MainLayout`. To add new quadrant buttons, edit `Sidebar.jsx`:

```javascript
const quadrants = [
  {
    id: 'new-quadrant',
    label: 'New Quadrant',
    icon: NewIcon,
    path: '/quadrant/new-quadrant',
    color: 'from-color1-500 to-color2-600',
    hoverBg: 'hover:bg-color-50'
  }
  // ... other quadrants
];
```

## 🎯 Sample Data

The application includes comprehensive sample data with:

- **12 total alerts** across 4 quadrants
- **6 Critical (P1)** alerts - urgent, require immediate action
- **6 Warning (P2)** alerts - medium priority, should be reviewed soon
- **Realistic scenarios** based on actual finance operations
- **Account information** with balances and institutions

## 📋 Page Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main dashboard with all quadrants |
| `/quadrant/cash-liquidity` | QuadrantDetail | Cash & Liquidity alerts |
| `/quadrant/account-setup` | QuadrantDetail | Account Setup alerts |
| `/quadrant/payment-templates` | QuadrantDetail | Payment Templates alerts |
| `/quadrant/limits-policy` | QuadrantDetail | Limits & Policy alerts |
| `*` | Dashboard | Catch-all redirects to dashboard |

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for buttons
- Keyboard navigation support
- Color contrast compliant
- Mobile-friendly touch targets (min 44x44px)

## 🔒 Security

- Environment variables for sensitive data
- CORS enabled for API calls
- No secrets in client-side code
- Secure headers configured
- Input validation on forms (when implemented)

## 🧪 Testing

```bash
# Run tests
npm run test

# Type checking
npm run typecheck

# Format code
npm run format.fix
```

## 🚢 Deployment

### Netlify Deployment

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/spa`
4. Environment variables configured in Netlify UI

### Vercel Deployment

1. Import project to Vercel
2. Build command: `npm run build`
3. Output directory: `dist/spa`

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes following the project structure
3. Test on all screen sizes
4. Commit with clear messages
5. Submit pull request

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Support

For issues and questions:
- Check the documentation
- Review component examples
- Check the sample data structure
- Review GitHub issues (if applicable)

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Framework**: React 18 + Vite + Tailwind CSS
