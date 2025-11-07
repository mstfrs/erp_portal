# Google Stitch Theme Generation Prompt

## 🎯 ONE-PARAGRAPH PROMPT (Copy & Paste This)

Create a modern, clean design system for a B2B food supply e-commerce portal built with Next.js 14, React 18, and Tailwind CSS 3.4, using the uploaded green logo color (#4CAF50) as the primary brand color for buttons, CTAs, and success states, complemented by warm orange (#FF9800) for secondary actions and trust blue (#2196F3) for informational elements, with Inter font family across a clear typographic hierarchy (H1 36px bold to body 16px regular), featuring essential components including primary/secondary/ghost button variants with 8px radius and hover states, input fields with green focus rings and error states, product cards with 12px radius and hover lift effects, a 72px sticky navigation bar, 260px dashboard sidebar with green active states, modals with dark backdrop, top-right toast notifications, data tables with hover rows, a 4-column responsive product grid (2 on tablet, 1 on mobile), multi-step checkout with green progress indicators, order status timeline with colored dots, dashboard stat cards with icons, and a professional, user-friendly aesthetic emphasizing generous white space, clear CTAs, WCAG AA accessibility, smooth 200-300ms transitions, and a fresh, trustworthy appearance suitable for restaurant owners and food suppliers managing agreements, browsing products, placing orders, and tracking deliveries in a streamlined B2B environment.

---

## 📋 DETAILED DOCUMENTATION (Reference Only)

## Project: Culinary Portal - B2B E-Commerce Platform

---

## 🎯 Theme Requirements

Create a modern, user-centric design system for a B2B e-commerce portal that connects restaurants/retailers with food suppliers. The platform serves three main user groups: Customers (restaurants/retailers), Suppliers, and Administrators.

---

## 🎨 Color Palette (Based on Brand Logo)

**Primary Color (Green - Logo Color):**
- Base: `#4CAF50` (Medium green)
- Light variants: `#66BB6A`, `#81C784`, `#A5D6A7`
- Dark variants: `#43A047`, `#388E3C`, `#2E7D32`
- Usage: Primary actions, CTAs, brand elements, success states

**Secondary Color (Complementary):**
- Base: `#FF9800` (Warm orange)
- Light variants: `#FFB74D`, `#FFCC80`
- Dark variants: `#F57C00`, `#E65100`
- Usage: Secondary actions, highlights, supplier-related elements

**Accent Color:**
- Base: `#2196F3` (Trust blue)
- Usage: Information, links, customer-related elements

**Neutral Grays:**
- Background: `#F5F7FA`, `#FFFFFF`
- Text: `#212121` (dark), `#757575` (medium), `#BDBDBD` (light)
- Borders: `#E0E0E0`, `#EEEEEE`

**Status Colors:**
- Success: `#4CAF50` (matches primary)
- Warning: `#FFC107`
- Error: `#F44336`
- Info: `#2196F3`

---

## 📐 Typography

**Font Family:**
- Primary: Inter (clean, modern, highly legible)
- Fallback: system-ui, -apple-system, sans-serif

**Font Sizes & Hierarchy:**
- H1: 36px (2.25rem) - Bold - Page titles
- H2: 30px (1.875rem) - Semibold - Section headers
- H3: 24px (1.5rem) - Semibold - Card titles
- H4: 20px (1.25rem) - Medium - Subsections
- Body Large: 18px (1.125rem) - Regular - Important content
- Body: 16px (1rem) - Regular - Default text
- Body Small: 14px (0.875rem) - Regular - Secondary info
- Caption: 12px (0.75rem) - Regular - Labels, metadata

**Line Heights:**
- Headings: 1.2
- Body text: 1.6
- Compact (tables, forms): 1.4

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## 🧩 Core Components

### 1. Buttons
**Primary Button:**
- Background: `#4CAF50` (primary green)
- Text: White
- Hover: Darken 10% (`#43A047`)
- Border radius: 8px
- Padding: 12px 24px
- Font: 16px, Medium (500)
- Shadow: Subtle on hover (0 4px 6px rgba(0,0,0,0.1))
- Transition: 200ms ease

**Secondary Button:**
- Background: Transparent
- Text: `#4CAF50`
- Border: 2px solid `#4CAF50`
- Hover: Background `#E8F5E9` (light green tint)

**Ghost Button:**
- Background: Transparent
- Text: `#757575`
- Hover: Background `#F5F5F5`

**Danger Button:**
- Background: `#F44336`
- Text: White
- Hover: `#E53935`

**Button Sizes:**
- Small: 8px 16px, 14px text
- Medium: 12px 24px, 16px text (default)
- Large: 16px 32px, 18px text

**Loading State:**
- Show spinner icon
- Reduce opacity to 70%
- Disable interaction

### 2. Input Fields
**Default Input:**
- Border: 1px solid `#E0E0E0`
- Border radius: 8px
- Padding: 12px 16px
- Font: 16px, Regular
- Placeholder: `#9E9E9E`
- Focus: Border `#4CAF50`, ring 2px `rgba(76, 175, 80, 0.2)`
- Error: Border `#F44336`, error text below in red

**Input Variants:**
- Text, Email, Password, Number
- Textarea: Same style, min-height 120px
- Select dropdown: With chevron icon
- Search: With magnifying glass icon on left
- Date picker: With calendar icon

**Label:**
- Font: 14px, Medium
- Color: `#424242`
- Margin bottom: 6px
- Required indicator: Red asterisk

### 3. Cards
**Product Card:**
- Background: White
- Border radius: 12px
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Hover shadow: `0 8px 16px rgba(0,0,0,0.12)`
- Hover transform: Scale 1.02
- Transition: 300ms ease
- Padding: 16px
- Image: Rounded top corners (12px), aspect ratio 4:3
- Badge overlay: Top-left corner, small badge for discounts/status

**Info Card (Dashboard):**
- Background: White
- Border: 1px solid `#E0E0E0`
- Border radius: 12px
- Padding: 24px
- Header with title and icon
- Divider line between header and content

**Order Card:**
- Status indicator on left (vertical colored bar, 4px wide)
- Order number prominent (18px, Bold)
- Timeline dots for status
- Action buttons on right

### 4. Navigation

**Top Navbar:**
- Height: 72px
- Background: White
- Border bottom: 1px solid `#E0E0E0`
- Logo on left (max height 40px)
- Navigation links center (16px, Medium)
- User menu + cart icon on right
- Sticky on scroll
- Shadow on scroll: `0 2px 8px rgba(0,0,0,0.08)`

**Sidebar (Dashboard):**
- Width: 260px
- Background: `#FAFAFA`
- Items: 48px height, 16px text, icon + text
- Active item: Background `#E8F5E9`, text `#4CAF50`, left border 4px `#4CAF50`
- Hover: Background `#F5F5F5`
- Collapsible on mobile

**Breadcrumbs:**
- Font: 14px, Regular
- Color: `#757575`
- Separator: `/` or chevron icon
- Current page: Bold, `#212121`

### 5. Modals & Overlays

**Modal:**
- Backdrop: `rgba(0, 0, 0, 0.5)`
- Modal background: White
- Max width: 600px (can be sm/md/lg/xl)
- Border radius: 16px
- Padding: 32px
- Header: 24px Bold, close icon (X) on right
- Footer: Buttons right-aligned, cancel + action
- Animation: Fade in + scale from 95% to 100%

**Toast Notifications:**
- Position: Top-right
- Width: 360px
- Border radius: 8px
- Padding: 16px
- Success: Left border 4px `#4CAF50`, light green background
- Error: Left border 4px `#F44336`, light red background
- Icon + message + close button
- Auto-dismiss: 4 seconds
- Stack vertically with gap

**Dropdown Menu:**
- Background: White
- Border radius: 8px
- Shadow: `0 4px 12px rgba(0,0,0,0.15)`
- Items: 40px height, 16px text, 12px padding horizontal
- Hover: Background `#F5F5F5`
- Divider: 1px line `#E0E0E0`

### 6. Tables & Lists

**Data Table:**
- Background: White
- Border: 1px solid `#E0E0E0`
- Border radius: 12px
- Header row: Background `#FAFAFA`, text bold 14px
- Cell padding: 16px
- Row hover: Background `#F9F9F9`
- Striped rows (optional): Every other row `#FAFAFA`
- Sorting icons in header
- Pagination controls at bottom

**Order List:**
- Each order as a card
- Show: Order number, date, status badge, total, action buttons
- Filter controls at top (status, date range)
- Sort dropdown

### 7. Product Components

**Product Grid:**
- Grid: 4 columns desktop, 2 tablet, 1 mobile
- Gap: 24px
- Product card with image, title, price, supplier name
- "Add to Cart" button
- Stock indicator (in stock/out of stock badge)
- Discount badge if applicable

**Product Detail:**
- Large image gallery on left (60% width)
- Product info on right (40% width)
- Title: 32px, Bold
- Price: 28px, Bold, `#4CAF50`
- Supplier: 16px, with logo badge
- Quantity selector with +/- buttons
- Large "Add to Cart" button
- Tabs below: Description, Specifications, Reviews

**Product Filter (Sidebar):**
- Width: 280px
- Categories with expandable lists
- Price range slider (dual-handle)
- Checkboxes for suppliers, stock status
- "Clear filters" button at bottom

### 8. Order & Checkout

**Shopping Cart:**
- Cart icon with badge (item count)
- Side drawer (360px wide) slides from right
- Each item: Image thumbnail, name, quantity controls, price, remove button
- Subtotal at bottom
- "Checkout" button (full width, primary)

**Checkout Steps:**
- Step indicator at top: 1. Shipping, 2. Review, 3. Payment, 4. Confirmation
- Active step: Green circle with white number
- Completed: Green circle with checkmark
- Pending: Gray circle
- Lines connecting steps

**Order Timeline:**
- Vertical timeline with dots
- Active state: Large green dot with pulse animation
- Completed: Green dot with checkmark
- Pending: Gray outline dot
- Lines connecting dots
- Each event: Title, timestamp, optional note

### 9. Dashboard Components

**Stat Cards (Customer Dashboard):**
- Grid: 3 columns
- Card: White background, icon in colored circle (left), number (large, bold), label (small)
- Colors: Pending orders (orange), Total orders (blue), Spending (green)

**Chart Components:**
- Line chart for sales trends
- Bar chart for top products
- Use green (`#4CAF50`) as primary data color
- Grid lines: Light gray `#E0E0E0`
- Axis labels: 14px, `#757575`
- Tooltips: White background, shadow, rounded

**Recent Orders Widget:**
- List of last 5 orders
- Each: Order number, date, status badge, total
- "View all" link at bottom

### 10. Forms

**Multi-step Form (Registration):**
- Progress indicator at top
- Form sections with clear headings
- Input groups with labels
- Helper text below inputs (12px, gray)
- Validation errors (red text, red border)
- "Previous" and "Next" buttons at bottom
- Required fields marked with asterisk

**Agreement Form:**
- PDF viewer or rich text display (full width)
- Checkbox: "I agree to the terms" (with link to full terms)
- Signature pad (optional): White canvas with border
- "Sign Agreement" button (disabled until checked)

---

## 🎭 Interaction Patterns

### Hover States:
- Buttons: Darken 10%, add shadow
- Cards: Lift with shadow, scale 1.02
- Links: Underline, change color to darker shade
- Icons: Scale 1.1, color change

### Active States:
- Buttons: Scale 0.98, slightly darker
- Inputs: Border color change, ring effect

### Loading States:
- Skeleton loaders (animated gray rectangles)
- Spinner animations (rotating circle)
- Progress bars for uploads

### Transitions:
- Default: 200ms ease
- Hover effects: 300ms ease
- Page transitions: 400ms ease-in-out

### Animations:
- Fade in: Opacity 0 to 1
- Slide up: Transform translateY(20px) to 0
- Scale: Transform scale(0.95) to 1
- Pulse (for notifications): Scale 1 to 1.05 to 1

---

## 📱 Responsive Behavior

### Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Adaptations:
- Hamburger menu replaces navbar links
- Sidebar becomes bottom navigation (4-5 icons)
- Product grid: 1 column
- Tables: Horizontal scroll or card layout
- Modals: Full screen on mobile
- Touch targets: Minimum 44px height
- Bottom navigation bar (fixed): 64px height

### Tablet Adaptations:
- Product grid: 2 columns
- Sidebar: Collapsible with toggle
- Tables: Full width with horizontal scroll

---

## ♿ Accessibility

- Color contrast: WCAG AA compliant (4.5:1 for text)
- Focus indicators: 2px outline, `#4CAF50`, 2px offset
- Keyboard navigation: All interactive elements focusable
- ARIA labels: For icon-only buttons, images
- Screen reader text: Hidden visually but readable
- Form labels: Always associated with inputs
- Error announcements: Live regions for screen readers

---

## 🎯 Use Cases & Page Types

### 1. Landing Page (Public)
- Hero section with large image, headline, CTA button
- Features grid (3 columns)
- How it works (step-by-step)
- Testimonials (carousel)
- Footer with links, contact info

### 2. Product Catalog
- Filter sidebar on left
- Sort dropdown on right
- Product grid (4 columns)
- Pagination or infinite scroll
- Breadcrumbs at top

### 3. Product Detail
- Large image gallery
- Product information panel
- Add to cart controls
- Related products below
- Customer reviews section

### 4. Shopping Cart
- List of cart items
- Quantity controls
- Remove buttons
- Subtotal, tax, total
- Checkout button
- Continue shopping link

### 5. Checkout
- Multi-step form (shipping, review, payment)
- Order summary sidebar
- Input validation
- Payment method selection
- Order confirmation page

### 6. Customer Dashboard
- Stat cards at top
- Recent orders table
- Quick actions
- Order tracking widget

### 7. Supplier Dashboard
- Sales statistics
- New orders list (with badges)
- Product inventory table
- Sales chart

### 8. Order Detail
- Order information card
- Timeline showing order status
- Item list with images
- Shipping information
- Invoice download button
- Cancel order button (conditional)

### 9. Profile/Settings
- Tabs: Personal info, Addresses, Password
- Form fields with save buttons
- Address cards with edit/delete
- Avatar upload

---

## 🌟 Special Features

### Product Card Enhancements:
- Discount badge (top-left corner, red background, white text)
- Stock indicator (bottom-right, green dot + "In Stock" or red dot + "Out of Stock")
- Quick view button (on hover, eye icon)
- Add to favorites (heart icon, toggle red)
- Supplier logo badge (small, bottom-left)

### Order Status Badges:
- Draft: Gray background, gray text
- Confirmed: Blue background, white text
- Processing: Orange background, white text
- Shipped: Purple background, white text
- Delivered: Green background, white text
- Cancelled: Red background, white text

### Dashboard Charts:
- Smooth line charts with gradient fill
- Interactive tooltips on hover
- Legend with toggleable data series
- Export button (download as PNG/CSV)

### Search:
- Instant search results dropdown
- Categories separated
- Product images in results
- "View all results" link

### Notifications:
- Bell icon with badge (count)
- Dropdown panel showing recent notifications
- Each notification: Icon, message, time ago
- Mark as read/unread
- "View all" link

---

## 🎨 Design Philosophy

**Modern & Clean:**
- Generous white space
- Clear visual hierarchy
- Minimal decoration, focus on content
- Consistent spacing (8px grid system)

**User-Friendly:**
- Clear CTAs with action-oriented text
- Helpful error messages and validation
- Loading states to show progress
- Empty states with helpful guidance

**Professional:**
- Business-appropriate color palette
- Professional photography/illustrations
- Consistent brand voice
- Trust signals (security badges, testimonials)

**Performant:**
- Optimized images (WebP, lazy loading)
- Skeleton loaders for smooth transitions
- Minimal animation (60fps)
- Fast page loads (< 3 seconds)

---

## 🔧 Technical Specifications

**Framework Compatibility:**
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3.4

**Component Library:**
- Headless UI for accessible components
- Lucide React for icons
- Recharts for data visualization

**State Management:**
- Zustand for global state
- SWR for data fetching

**Form Handling:**
- React Hook Form for forms
- Zod for validation

---

## 📦 Deliverables Expected from Stitch

1. **Color Tokens:** Complete palette with all shades
2. **Typography Scale:** Font sizes, weights, line heights
3. **Spacing System:** 8px grid-based spacing values
4. **Component Styles:** All components listed above
5. **Shadow System:** Elevation levels (0-5)
6. **Border Radius:** Consistent rounding values
7. **Breakpoints:** Responsive breakpoint values
8. **Animation Tokens:** Timing, easing functions

---

## 🎯 Priority Components

**Must Have (P0):**
- Buttons (all variants)
- Input fields
- Cards (product, info, order)
- Navigation (navbar, sidebar)
- Modals

**High Priority (P1):**
- Tables
- Forms (multi-step)
- Toast notifications
- Dropdowns

**Nice to Have (P2):**
- Charts
- Timeline
- Advanced filters
- Animations

---

## 🌈 Mood & Inspiration Keywords

- Fresh, Natural (like food)
- Trustworthy, Professional
- Efficient, Streamlined
- Modern, Tech-forward
- Clean, Uncluttered
- Friendly, Approachable
- Growth-oriented (green associations)
- Sustainable, Organic

---

## 📊 Success Metrics for Theme

- Lighthouse accessibility score > 95
- Color contrast ratios all pass WCAG AA
- Component library covers 90%+ of use cases
- Design system is consistent across all pages
- Loading performance < 3 seconds
- Mobile-friendly (touch targets, responsive)
- User testing shows 90%+ task completion rate

---

**Project Context:** B2B food supply portal connecting restaurants with suppliers, featuring product browsing, order management, agreement signing, payment processing, and separate dashboards for customers and suppliers.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, Zustand, NextAuth, Stripe, ERPNext backend.

**Target Users:** Restaurant owners, food buyers, procurement managers, food suppliers/distributors.

**Key User Flows:**
1. Register → Sign Agreement → Browse Products → Order → Track
2. Supplier receives order → Updates status → Ships → Confirms delivery
3. Admin manages agreements, products, pricing

---

*Please generate a comprehensive, production-ready design system with all components, tokens, and styles necessary for building this B2B culinary e-commerce portal.*

