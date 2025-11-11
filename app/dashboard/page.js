// app/dashboard/page.js
import Link from "next/link";

export const metadata = {
  title: "Mein Konto – CC Culinary",
  description: "Account dashboard for CC Culinary",
};

const quickLinks = [
  { label: "Shop", icon: "storefront", color: "text-primary" },
  { label: "Brands", icon: "label", color: "text-accent-orange" },
  { label: "Services", icon: "settings_suggest", color: "text-accent-purple" },
  { label: "Orders", icon: "receipt_long", color: "text-accent-blue" },
  { label: "Downloads", icon: "download", color: "text-accent-teal" },
  { label: "Addresses", icon: "home", color: "text-accent-red" },
  { label: "Account Details", icon: "person", color: "text-accent-gray" },
  { label: "Wishlist", icon: "favorite", color: "text-accent-pink" },
  { label: "Logout", icon: "logout", color: "text-accent-gray" },
];

export default function AccountDashboardPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-background-light relative flex min-h-screen w-full">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex h-[72px] items-center justify-between border-b border-border-light bg-white dark:bg-background-dark dark:border-gray-700 px-4 sm:px-6 lg:px-8 shadow-subtle">
        <div className="flex items-center gap-4">
          <button aria-label="Open menu" className="lg:hidden text-text-main dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl">eco</span>
            <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">
              CC Culinary
            </h2>
          </div>
        </div>

        <div className="flex-1 max-w-[400px] hidden md:flex">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle">search</span>
            <input
              type="search"
              placeholder="Search brands, products..."
              className="w-full rounded-lg border-border-light bg-hover-light dark:bg-gray-800 dark:border-gray-600 dark:text-white h-10 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button aria-label="Notifications" className="flex h-10 w-10 items-center justify-center rounded-full text-text-subtle dark:text-gray-300 hover:bg-hover-light dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button aria-label="Help" className="flex h-10 w-10 items-center justify-center rounded-full text-text-subtle dark:text-gray-300 hover:bg-hover-light dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button
            aria-label="User menu"
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: 'url("https://placeholder.pics/svg/48x48/8BC34A/FFFFFF/A")' }}
          />
        </div>
      </header>

      <div className="flex w-full pt-[72px]">
        {/* Sidebar */}
        <aside className="fixed top-[72px] bottom-0 left-0 z-30 hidden lg:flex w-[260px] flex-col justify-between border-r border-border-light bg-white dark:bg-background-dark dark:border-gray-700 p-4 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBR7GI7I_OuXFzzpNtI4DJpbePqxf2XZQBarB9jFYhp5Pi4nV1dSO8fV48n4AKGkXetNw9PvJX9-HB9UCowKMJEVE0_A5xg4HFp5sxihr0jKjN5QmO0glmACQOuY1RfN7wZtDzpuT-arEbCxAQmA3efDcj676fnxECEWic9p43FNlYPTPW8mDM8_cgQsB4ohCQGFlMnTjU5vTbQG1qd0apd_L5SdTmQOSwD8XtxE8UgN7ABidEYyarbkz4GZlTeotCZhpZDX3kSglY")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-text-main dark:text-white text-base font-semibold leading-normal">Eleonora Weber</h1>
                <span className="text-xs font-medium text-primary bg-primary-tint dark:bg-primary/20 dark:text-primary-tint px-2 py-0.5 rounded-full">
                  Restaurant Customer
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              <Link href="#" className="group relative flex items-center gap-3 px-3 h-[44px] rounded-lg bg-primary-tint text-primary font-medium text-base">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  grid_view
                </span>
                <span>Dashboard</span>
              </Link>

              {[
                { icon: "storefront", text: "Shop" },
                { icon: "label", text: "Brands" },
                { icon: "settings_suggest", text: "Services" },
                { icon: "receipt_long", text: "Orders" },
                { icon: "download", text: "Downloads" },
                { icon: "home", text: "Addresses" },
                { icon: "credit_card", text: "Payment Methods" },
                { icon: "person", text: "Account Details" },
                { icon: "favorite", text: "Wishlist" },
              ].map((m) => (
                <Link
                  key={m.text}
                  href="#"
                  className="group flex items-center gap-3 px-3 h-[44px] rounded-lg text-text-subtle hover:bg-hover-light dark:hover:bg-gray-800 hover:text-text-main dark:hover:text-white text-base"
                >
                  <span className="material-symbols-outlined">{m.icon}</span>
                  <span>{m.text}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col pt-4 border-t border-border-light dark:border-gray-700">
            <Link
              href="#"
              className="group flex items-center gap-3 px-3 h-[44px] rounded-lg text-text-subtle hover:bg-hover-light dark:hover:bg-gray-800 hover:text-accent-red text-base"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full lg:ml-[260px] bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-[1200px] p-4 sm:p-6 lg:p-8">
            {/* Welcome */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-text-main dark:text-white text-4xl font-bold">Hello Eleonora!</h1>
                <p className="text-text-subtle text-base max-w-2xl">
                  Here you can find your <span className="text-primary font-medium">last orders</span>, manage your{" "}
                  <span className="text-primary font-medium">delivery and billing address</span>, and change your{" "}
                  <span className="text-primary font-medium">password and account details</span>.
                </p>
              </div>
              <p className="text-sm text-text-subtle">
                Not you? <Link href="#" className="font-medium text-primary hover:underline">Logout</Link>
              </p>
            </div>

            {/* Banners */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-accent-orange/30 bg-accent-orange/10 p-4 dark:bg-accent-orange/20">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-orange mt-0.5">warning</span>
                  <div className="flex flex-col">
                    <p className="font-semibold text-accent-orange dark:text-orange-300">Incomplete Profile</p>
                    <p className="text-sm text-text-main dark:text-gray-300">
                      Your profile is not yet complete. Please provide the missing information to access all features.
                    </p>
                  </div>
                </div>
                <button className="flex-shrink-0 self-start sm:self-center rounded-lg bg-accent-orange px-4 py-2 text-sm font-medium text-white hover:bg-accent-orange/90 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2">
                  Complete Now
                </button>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-accent-yellow/30 bg-accent-yellow/10 p-4 dark:bg-accent-yellow/20">
                <span className="material-symbols-outlined text-accent-yellow mt-0.5">hourglass_top</span>
                <div className="flex flex-col">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300">Pending Approval</p>
                  <p className="text-sm text-text-main dark:text-gray-300">
                    Your account is currently under review. Some features might be limited until approval is granted.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((q) => (
                <Link
                  key={q.label}
                  href="#"
                  className="group flex h-[120px] flex-col items-center justify-center gap-3 rounded-lg bg-white dark:bg-gray-800 shadow-subtle hover:shadow-lg hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-2 ring-transparent hover:ring-primary"
                >
                  <span className={`material-symbols-outlined text-5xl ${q.color}`}>{q.icon}</span>
                  <h2 className="text-base font-semibold uppercase tracking-wider text-text-main dark:text-white">
                    {q.label}
                  </h2>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-lg bg-white dark:bg-gray-800 shadow-subtle p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">Become a Vendor</h3>
                  <p className="text-text-subtle max-w-3xl">
                    Interested in selling your products on our platform? Join our network of premium culinary suppliers and reach
                    thousands of professional customers.
                  </p>
                </div>
                <button className="flex-shrink-0 self-start lg:self-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white uppercase tracking-wider hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  Become a Vendor
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
