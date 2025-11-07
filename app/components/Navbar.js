"use client";

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { logoutFromFrappe } from '@/services/auth'

export default function Navbar() {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    // 1. Frappe'den logout
    await logoutFromFrappe();
    
    // 2. NextAuth session'ı temizle
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark py-4">
      <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
        <div className="size-6 text-primary">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">FoodSupply Co.</h2>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">About</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Services</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</Link>
        </nav>
        
        {status === "loading" ? (
          <div className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700">
            <span className="text-sm">...</span>
          </div>
        ) : session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-light/80 dark:text-text-dark/80">
              {session.user?.email || session.user?.name}
            </span>
            <button
              onClick={handleLogout}
              className="flex cursor-pointer min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:opacity-90"
          >
            Login
          </Link>
        )}
      </div>

      <div className="md:hidden">
        <span className="material-symbols-outlined text-3xl">menu</span>
      </div>
    </header>
  )
}
