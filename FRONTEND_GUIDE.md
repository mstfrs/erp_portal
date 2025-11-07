# 🎨 FRONTEND DEVELOPMENT GUIDE

## Next.js 14 Culinary Portal - Component Library & Best Practices

**Framework:** Next.js 14 (App Router)  
**React:** 18  
**Styling:** Tailwind CSS 3.4  
**State:** Zustand  
**Auth:** NextAuth.js

---

## 📁 FOLDER STRUCTURE

```
app/
├── (auth)/                          # Auth layout group
│   ├── layout.js                   # Auth sayfaları için layout
│   ├── login/
│   │   └── page.js
│   ├── register/
│   │   ├── customer/
│   │   │   └── page.js
│   │   ├── supplier/
│   │   │   └── page.js
│   │   └── success/
│   │       └── page.js
│   └── agreement/
│       ├── page.js
│       └── success/
│           └── page.js
│
├── (shop)/                          # Public shop pages
│   ├── layout.js                   # Shop layout (navbar + footer)
│   ├── page.js                     # Ana sayfa
│   ├── products/
│   │   ├── page.js                 # Ürün listesi
│   │   └── [slug]/
│   │       └── page.js             # Ürün detay
│   ├── cart/
│   │   └── page.js
│   └── checkout/
│       ├── page.js
│       └── success/
│           └── page.js
│
├── (customer)/                      # Customer dashboard group
│   └── dashboard/
│       ├── layout.js               # Dashboard layout (sidebar)
│       ├── page.js                 # Dashboard ana sayfa
│       ├── orders/
│       │   ├── page.js             # Sipariş listesi
│       │   └── [id]/
│       │       └── page.js         # Sipariş detay
│       ├── profile/
│       │   └── page.js
│       └── agreements/
│           └── page.js
│
├── (supplier)/                      # Supplier dashboard group
│   └── supplier/
│       ├── layout.js
│       ├── page.js
│       ├── orders/
│       │   ├── page.js
│       │   └── [id]/
│       │       └── page.js
│       ├── products/
│       │   ├── page.js
│       │   └── [id]/
│       │       └── page.js
│       └── reports/
│           └── page.js
│
├── api/                             # API routes
│   ├── auth/
│   │   ├── [...nextauth]/
│   │   │   └── route.js
│   │   └── register/
│   │       └── route.js
│   ├── products/
│   │   ├── route.js
│   │   └── [id]/
│   │       └── route.js
│   ├── orders/
│   │   ├── route.js
│   │   └── [id]/
│   │       └── route.js
│   └── payment/
│       ├── create-intent/
│       │   └── route.js
│       └── webhook/
│           └── route.js
│
├── components/                      # Reusable components
│   ├── ui/                         # Base UI components
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Select.js
│   │   ├── Modal.js
│   │   ├── Toast.js
│   │   ├── Card.js
│   │   ├── Badge.js
│   │   ├── Loader.js
│   │   └── Skeleton.js
│   ├── layout/                     # Layout components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Sidebar.js
│   │   └── Breadcrumb.js
│   ├── products/                   # Product components
│   │   ├── ProductCard.js
│   │   ├── ProductGrid.js
│   │   ├── ProductFilter.js
│   │   ├── ProductSort.js
│   │   └── ProductSearch.js
│   ├── cart/                       # Cart components
│   │   ├── Cart.js
│   │   ├── CartButton.js
│   │   ├── CartItem.js
│   │   └── CartSummary.js
│   ├── orders/                     # Order components
│   │   ├── OrderCard.js
│   │   ├── OrderList.js
│   │   ├── OrderTimeline.js
│   │   ├── OrderItems.js
│   │   └── OrderFilters.js
│   └── forms/                      # Form components
│       ├── CompanyForm.js
│       ├── ContactForm.js
│       ├── AddressForm.js
│       └── SignatureForm.js
│
├── store/                           # Zustand stores
│   ├── useCartStore.js
│   ├── useAuthStore.js
│   └── useUIStore.js
│
├── globals.css
├── layout.js                        # Root layout
└── page.js                          # Landing page

lib/
├── api/                             # API client
│   ├── client.js                   # Axios instance
│   ├── endpoints.js                # API endpoints
│   └── hooks.js                    # SWR hooks
├── utils/                           # Utilities
│   ├── format.js                   # Formatting helpers
│   ├── validation.js               # Zod schemas
│   └── helpers.js                  # General helpers
├── constants/                       # Constants
│   ├── routes.js
│   ├── status.js
│   └── messages.js
├── stripe/                          # Stripe
│   ├── client.js
│   └── server.js
└── auth.js                          # NextAuth config
```

---

## 🎨 COMPONENT LIBRARY

### 1. UI Components (`components/ui/`)

#### Button Component

```javascript
// components/ui/Button.js
'use client'

import { Loader2 } from 'lucide-react'

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
  danger: 'bg-red-500 hover:bg-red-600 text-white'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        font-medium rounded-lg
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
      `}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  )
}

// Kullanım:
<Button variant="primary" size="md" loading={isLoading} onClick={handleSubmit}>
  Sipariş Ver
</Button>
```

#### Input Component

```javascript
// components/ui/Input.js
'use client'

import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label, 
  error, 
  type = 'text',
  placeholder,
  required = false,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 rounded-lg border
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-primary-500'
          }
          focus:ring-2 focus:border-transparent
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
export default Input

// Kullanım (with React Hook Form):
<Input
  label="Email"
  type="email"
  placeholder="ornek@email.com"
  required
  error={errors.email?.message}
  {...register('email')}
/>
```

#### Card Component

```javascript
// components/ui/Card.js

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-card ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  )
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

// Kullanım:
<Card>
  <CardHeader>
    <CardTitle>Sipariş #12345</CardTitle>
  </CardHeader>
  <CardBody>
    {/* Content */}
  </CardBody>
  <CardFooter>
    <Button>Detaylar</Button>
  </CardFooter>
</Card>
```

#### Modal Component

```javascript
// components/ui/Modal.js
'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/ui'
import { X } from 'lucide-react'

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'md' 
}) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className={`w-full ${sizes[size]} transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-lg font-semibold">
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

// Kullanım:
const [isOpen, setIsOpen] = useState(false)

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Sipariş Detayı">
  <p>Modal içeriği...</p>
</Modal>
```

#### Toast Notifications

```javascript
// components/ui/Toast.js
'use client'

import { Toaster, toast } from 'react-hot-toast'

// Provider'ı layout'a ekle
export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#fff',
          color: '#111',
        },
        success: {
          iconTheme: {
            primary: '#06D6A0',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#EF476F',
            secondary: '#fff',
          },
        },
      }}
    />
  )
}

// Helper functions
export const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  dismiss: (toastId) => toast.dismiss(toastId)
}

// Kullanım:
import { showToast } from '@/components/ui/Toast'

showToast.success('Sipariş başarıyla oluşturuldu')
showToast.error('Bir hata oluştu')

const toastId = showToast.loading('Yükleniyor...')
// İşlem bitince
showToast.dismiss(toastId)
showToast.success('Tamamlandı')
```

---

### 2. Product Components

#### ProductCard (İyileştirilmiş)

```javascript
// components/products/ProductCard.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import { showToast } from '@/components/ui/Toast'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addItem)
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₺'
  
  const hasDiscount = product.discount_percent > 0
  const inStock = product.stock_qty > 0

  const handleAddToCart = (e) => {
    e.preventDefault()
    
    if (!inStock) {
      showToast.error('Ürün stokta yok')
      return
    }
    
    addToCart(product)
    showToast.success('Sepete eklendi')
  }

  return (
    <Link href={`/products/${product.item_code}`}>
      <div className="group relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
            alt={product.item_name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {!inStock && (
              <Badge variant="danger">Stokta Yok</Badge>
            )}
            {hasDiscount && (
              <Badge variant="success">%{product.discount_percent} İndirim</Badge>
            )}
          </div>
          
          {/* Favorite Button */}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Supplier */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.supplier_name}
          </p>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 truncate mb-2">
            {product.item_name}
          </h3>
          
          {/* Price & Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                {currency}{product.agreement_rate.toFixed(2)}
              </span>
              
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  {currency}{product.standard_rate.toFixed(2)}
                </span>
              )}
            </div>
            
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              disabled={!inStock}
              className="!p-2"
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Min Order Info */}
          {product.min_order_qty && (
            <p className="text-xs text-gray-500 mt-2">
              Min. {product.min_order_qty} {product.uom}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
```

#### ProductFilter

```javascript
// components/products/ProductFilter.js
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: '',
    supplier: '',
    priceRange: [0, 1000],
    inStock: false
  })

  const categories = ['Et Ürünleri', 'Süt Ürünleri', 'Sebze & Meyve']
  const suppliers = ['Lezzetli Et A.Ş.', 'Taze Süt Ltd.']

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-3">Kategori</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="text-primary-500"
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Supplier */}
      <div>
        <h3 className="font-semibold mb-3">Tedarikçi</h3>
        <div className="space-y-2">
          {suppliers.map((sup) => (
            <label key={sup} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={sup}
                onChange={(e) => {
                  const checked = e.target.checked
                  handleFilterChange('supplier', checked ? sup : '')
                }}
                className="text-primary-500"
              />
              <span className="text-sm">{sup}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Fiyat Aralığı</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={filters.priceRange[1]}
          onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>₺0</span>
          <span>₺{filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Stock Filter */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => handleFilterChange('inStock', e.target.checked)}
            className="text-primary-500"
          />
          <span className="text-sm">Sadece stokta olanlar</span>
        </label>
      </div>
    </div>
  )
}
```

---

### 3. Cart Components

#### Cart Store (Zustand)

```javascript
// store/useCartStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const items = get().items
        const existingItem = items.find(item => item.item_code === product.item_code)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.item_code === product.item_code
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          })
        } else {
          set({
            items: [...items, { ...product, qty: product.min_order_qty || 1 }]
          })
        }
      },
      
      removeItem: (item_code) => {
        set({
          items: get().items.filter(item => item.item_code !== item_code)
        })
      },
      
      updateQty: (item_code, qty) => {
        const item = get().items.find(i => i.item_code === item_code)
        
        // Min/max kontrol
        if (item.min_order_qty && qty < item.min_order_qty) {
          return false
        }
        if (item.max_order_qty && qty > item.max_order_qty) {
          return false
        }
        
        set({
          items: get().items.map(item =>
            item.item_code === item_code
              ? { ...item, qty }
              : item
          )
        })
        return true
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        return get().items.reduce((total, item) => 
          total + (item.agreement_rate * item.qty), 0
        )
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.qty, 0)
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)
```

#### CartButton Component

```javascript
// components/cart/CartButton.js
'use client'

import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import Link from 'next/link'

export default function CartButton() {
  const itemCount = useCartStore((state) => state.getItemCount())

  return (
    <Link href="/cart" className="relative">
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs flex items-center justify-center rounded-full">
            {itemCount}
          </span>
        )}
      </button>
    </Link>
  )
}
```

---

### 4. Order Components

#### OrderTimeline

```javascript
// components/orders/OrderTimeline.js
'use client'

import { Check, Clock, Package, Truck } from 'lucide-react'

const statusIcons = {
  Draft: Clock,
  Confirmed: Check,
  Processing: Package,
  Shipped: Truck,
  Delivered: Check
}

const statusColors = {
  Draft: 'text-gray-400',
  Confirmed: 'text-blue-500',
  Processing: 'text-yellow-500',
  Shipped: 'text-purple-500',
  Delivered: 'text-green-500'
}

export default function OrderTimeline({ timeline, currentStatus }) {
  return (
    <div className="space-y-4">
      {timeline.map((event, index) => {
        const Icon = statusIcons[event.status] || Clock
        const isActive = event.status === currentStatus
        const isCompleted = timeline.findIndex(t => t.status === currentStatus) > index
        
        return (
          <div key={index} className="flex gap-4">
            {/* Icon */}
            <div className={`
              flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
              ${isActive ? 'bg-primary-500 text-white' : ''}
              ${isCompleted ? 'bg-green-500 text-white' : ''}
              ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-400' : ''}
            `}>
              <Icon className="w-5 h-5" />
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-4 -ml-5">
              <h4 className="font-semibold">{event.status}</h4>
              <p className="text-sm text-gray-600">
                {new Date(event.date).toLocaleString('tr-TR')}
              </p>
              {event.note && (
                <p className="text-sm text-gray-500 mt-1">{event.note}</p>
              )}
              {event.user && (
                <p className="text-xs text-gray-400 mt-1">{event.user}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
```

---

## 🔐 AUTHENTICATION

### NextAuth Configuration

```javascript
// lib/auth.js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/method/login`,
            {
              usr: credentials.email,
              pwd: credentials.password
            }
          )
          
          if (response.data.message === 'Logged In') {
            // Get user profile
            const profileRes = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/method/culinary_portal.api.auth.get_user_profile`,
              {
                headers: {
                  Cookie: response.headers['set-cookie']
                }
              }
            )
            
            return {
              id: profileRes.data.data.user,
              email: profileRes.data.data.user,
              name: profileRes.data.data.full_name,
              userType: profileRes.data.data.user_type,
              customer: profileRes.data.data.customer,
              supplier: profileRes.data.data.supplier
            }
          }
          
          return null
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  
  pages: {
    signIn: '/login',
    error: '/login'
  },
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userType = user.userType
        token.customer = user.customer
        token.supplier = user.supplier
      }
      return token
    },
    
    async session({ session, token }) {
      session.user.userType = token.userType
      session.user.customer = token.customer
      session.user.supplier = token.supplier
      return session
    }
  }
}

export default NextAuth(authOptions)
```

### Protected Route Middleware

```javascript
// middleware.js
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname
    
    // Customer routes
    if (path.startsWith('/dashboard') && token?.userType !== 'Customer') {
      return NextResponse.redirect(new URL('/', req.url))
    }
    
    // Supplier routes
    if (path.startsWith('/supplier') && token?.userType !== 'Supplier') {
      return NextResponse.redirect(new URL('/', req.url))
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

export const config = {
  matcher: ['/dashboard/:path*', '/supplier/:path*', '/checkout/:path*']
}
```

---

## 📡 API CLIENT

### Axios Instance

```javascript
// lib/api/client.js
import axios from 'axios'
import { getSession } from 'next-auth/react'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// Request interceptor
apiClient.interceptors.request.use(async (config) => {
  const session = await getSession()
  
  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }
  
  return config
})

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient
```

### SWR Hooks

```javascript
// lib/api/hooks.js
import useSWR from 'swr'
import apiClient from './client'

const fetcher = (url) => apiClient.get(url).then(res => res.data.data)

export function useProducts(filters = {}) {
  const params = new URLSearchParams(filters).toString()
  const { data, error, mutate } = useSWR(
    `/api/method/culinary_portal.api.products.get_customer_products?${params}`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1800000 // 30 min
    }
  )
  
  return {
    products: data?.items || [],
    total: data?.total || 0,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}

export function useOrders(filters = {}) {
  const params = new URLSearchParams(filters).toString()
  const { data, error, mutate } = useSWR(
    `/api/method/culinary_portal.api.orders.get_customer_orders?${params}`,
    fetcher,
    {
      refreshInterval: 30000 // 30 seconds
    }
  )
  
  return {
    orders: data?.orders || [],
    total: data?.total || 0,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}
```

---

## 🎯 BEST PRACTICES

### 1. Performance

```javascript
// Image optimization
import Image from 'next/image'
<Image
  src={imageUrl}
  alt="Product"
  width={400}
  height={400}
  priority // for above-the-fold images
  placeholder="blur" // for smooth loading
/>

// Dynamic imports
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false // if not needed on server
})

// Memoization
const MemoizedProductCard = memo(ProductCard)
```

### 2. Error Handling

```javascript
// Error boundary
'use client'

import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Bir hata oluştu</div>
    }

    return this.props.children
  }
}
```

### 3. Loading States

```javascript
// Skeleton loader
export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-64 rounded-t-xl" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  )
}
```

---

## 📝 CHECKLIST

### Setup
- [ ] Install dependencies
- [ ] Configure Tailwind
- [ ] Setup NextAuth
- [ ] Setup Zustand stores

### Components
- [ ] UI component library
- [ ] Product components
- [ ] Cart components
- [ ] Order components
- [ ] Form components

### Pages
- [ ] Landing page
- [ ] Login/Register
- [ ] Product listing
- [ ] Product detail
- [ ] Cart
- [ ] Checkout
- [ ] Customer dashboard
- [ ] Supplier dashboard

### Features
- [ ] Authentication
- [ ] Cart functionality
- [ ] Order creation
- [ ] Payment integration
- [ ] Order tracking

### Optimization
- [ ] Image optimization
- [ ] Code splitting
- [ ] Caching strategy
- [ ] SEO optimization

---

**Son Güncelleme:** 6 Kasım 2025  
**Frontend Versiyon:** 1.0

