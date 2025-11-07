// app/products/page.js
import Link from "next/link";

export const metadata = {
  title: "FreshCart B2B - Products",
  description: "Browse products and add to cart",
};

const products = [
  {
    id: "apple",
    name: "Organic Gala Apples",
    subtitle: "Case of 40 lbs",
    price: 85.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJNMBwcoj-W1s1q3e2Jfjagj4Mf9x5UiLBYpSx-F5lrie3KPEP5cuAxx0gWQ9qIIa0h0DiRjtUlCQyQHc1t-cJ8yVpcfycEqOayYSv8SuQLtF-eserJWq9PnHNMBQH0CiPGvZggr-jD6oJCx3eSyfKwfvE0T2pL8eGpWqrZ0lmAiVGeIRs3QiJzcVMhcyF_du3J6b17hFVKhkeTYDuHT27kg5LfCWUK3n5bOkuzEmETPvWBA9s_LBsogvG3PbbxrBSKS_-yYTNho",
  },
  {
    id: "olive-oil",
    name: "Premium Olive Oil",
    subtitle: "Box of 6 x 1L Bottles",
    price: 120,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfdNNLA0a4nj4UTRBh-o5QiwEzbaES1i8pYJKwg5xTVZNFSH_Lq5KOBHJCYtNSdmwjZFfWR6YuYlXLG6wbRZsNHiX7IpzpuSI-9LHERkDttrFPuGMptZ27jSVijSP5IUvKIh9BSIkVhhsfHsZuwWOdP0dUBPrgbqAxUswiq5STJyVsq9acKbCFi9KVXpndptaoikXxvCkvPA3ABWk8_IBrTJ8De5-3lhb1MyiCPHik6gJNnr6N6yhFbxWkisJ2mLUZaVxkBd_YMtY",
  },
  {
    id: "cheddar",
    name: "Cheddar Cheese Block",
    subtitle: "10 lbs Block",
    price: 45.75,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzX-TRoCLrTpppwfLDpoKst7F7Yat1WVzgBqKmCUTB7T8HHPzK9xXIwNQqjgbE85LvvbSIEOXCKRWU6tIEV4b_ymo1xGGyoZiBpMq7l-TANu6tr5tn-ysutXrVWdk0wrtcEQL1lCADHCaAi-kKK9kTkCEyfUQeY542Qz8cOgsQ_MmNcz9J8RuEHWbbqMy8PH8o79p7wskkH-rJbI-WtyuZv_WJokvWL_lTjlyXKEmpHYdODnSLeKvr9N2ZpyW85EQ3RaC71SVSOok",
  },
  {
    id: "bread",
    name: "Whole Wheat Bread",
    subtitle: "Pack of 12 Loaves",
    price: 36,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEMfy0iZnUgacOcUc8ybJbz5P-ULv5igZ9y6ipluqnSaSXbaYskA1GwVrgBvprwCTUfFqTlgYbgt-TeVJAL-15j5rkM3pNIgNLcynYYq5oyGUj2z7gsCythJyugvLw3r0PtIZ-6_EYhbyiOK2RFPirVu7pmmgAi9p6t6mFsLpVHqfFpaNZxaNRKe4EyuOSyWC4GVPEv9lzbYwVLRColuwqQXy8vid2vB3R7IWoFR6fPzqwyb06Zu8SWhlMfHpNieAcSvUVh6lIhvg",
  },
  {
    id: "salmon",
    name: "Fresh Salmon Fillet",
    subtitle: "Approx. 5 lbs",
    price: 65,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFfdQWqEOkEDdrIyV3gMO4gtwPIjuoxH7GAkco_xvmY8ZVFsGN2WwZjo96t4lcS-UleDDLvMq_esAiXLNqir8cHKctLf4ZOhpwbHdRxpCH83_3D4Va5KsjWrnDiu_luhzcPS9VXpitT44f0Rri6RrrDEDA38KIj2SPfEqEYak7RM-4XZoFMefjaKNcx0Hg5npjc7aYpQPYlX4MEELOo6OQaIBBPUYAZcX9lcNOXZQPVHGzPSZFOw3QMfRUi-wdDuZuDwHW-Ab4wS4",
  },
  {
    id: "avocado",
    name: "Hass Avocados",
    subtitle: "Case of 36",
    price: 54,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB95ZAgRGshO_vcNugZCJyRAj4kwXRkPmpdbOwd_WB4MSrRncpeIgoVdTAyUaurh5ZyMQRaz44yuXwISf63DY5mVijpBpDqa8A7YKP1f7-F0agmvE6sA6Yt83UOsEItSftip6xW_flzIayuXqxK1DLYkitxsDsAGurX1UfXav_kVVzVuHbFk9graIuAilPFAtLgPgXE1kz7cfiPwkPqrYqHDW2sgzY3GE4dMxbA1gSTLLhaJ2fZ40DTbR9AFgSatikykDosboNteQk",
  },
];

export default function ProductsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 flex h-[72px] w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 backdrop-blur-sm px-6">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 28 }}>
            local_mall
          </span>
          <h2 className="text-xl font-bold tracking-[-0.015em]">FreshCart B2B</h2>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-8">
          <nav className="flex items-center gap-9">
            <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">
              Dashboard
            </Link>
            <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">
              Orders
            </Link>
            <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">
              Help
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ--go4ikmJc0bhjJgKSxvX13rTbH3pZU74CDb-z3CmOn2bkijQb_AUJA04O2HAJK651YhsiQWEeX2_fJSSSK7Md82yhweVm6-eewjRlrjjqe1I8SnAkA7Brq20caZOTrRBusmrmc8rGePq4oowHIb4nO1PtxTyUWr4XLrRu9XJB0SWXxsLYfVmD2RnBkX73gi23dpdG9kpa-L_W57xXtdmffgRm-w64viR0fRXdVficJFLOZO1jn9Va3I6AcbrC05rlFcOZ0C3k")',
            }}
            aria-label="User avatar"
          />
        </div>
      </header>

      <div className="flex h-full grow">
        {/* Left Sidebar */}
        <aside className="fixed top-[72px] left-0 z-30 h-[calc(100vh-72px)] w-[260px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB26qq5Huj8m0mitatt9hHJm7yY_k-BlxDI9MYOmUkOE7ogcL0z9iYNQ-MQy2X6mr93M-UR0V-WVHUJZ-0zdLWQVBUmsIZaGCFkzGWyI1TLDaV5I92Wc5azB6WWsUtojhAlRipqFS-teU9htNt-tzlWBJ0rth_Wi45reZmOO8vw4JDZy32W-7xJKP_GW0Odheh7FBHKDWtcEpjRO_jWtea9cgqB_M8jU8hvK3Ef9uxjuTsadgpY2eVB8HwS7HaqcoudzNy4HRDKT6k")',
                  }}
                  aria-label="Company logo"
                />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold text-slate-900 dark:text-white">Mega Foods Inc.</h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">b2b.megafoods.com</p>
                </div>
              </div>

              <nav className="flex flex-col gap-2 mt-4">
                <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
                  <span className="material-symbols-outlined">dashboard</span>
                  <p className="text-sm font-medium">Dashboard</p>
                </Link>

                <Link
                  className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary"
                  href="/products"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    inventory_2
                  </span>
                  <p className="text-sm font-medium">Products</p>
                </Link>

                <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
                  <span className="material-symbols-outlined">receipt_long</span>
                  <p className="text-sm font-medium">Orders</p>
                </Link>

                <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
                  <span className="material-symbols-outlined">local_shipping</span>
                  <p className="text-sm font-medium">Suppliers</p>
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium">Settings</p>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
                <span className="material-symbols-outlined">help</span>
                <p className="text-sm font-medium">Support</p>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-[260px] w-[calc(100%-260px)] flex-1 p-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            {/* Heading + CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">All Products</h1>
              <button className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90">
                <span>Create New Order</span>
              </button>
            </div>

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:underline" href="#">Home</Link></li>
                <li><span className="material-symbols-outlined !text-base">chevron_right</span></li>
                <li><Link className="hover:underline" href="#">Dairy</Link></li>
                <li><span className="material-symbols-outlined !text-base">chevron_right</span></li>
                <li className="font-medium text-slate-700 dark:text-slate-300">Cheese</li>
              </ol>
            </nav>

            {/* Search + Filters */}
            <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <div className="flex w-full items-center gap-4">
                <div className="relative flex-grow">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input
                    className="form-input h-12 w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 focus:border-primary focus:ring-primary"
                    placeholder="Search by product name or SKU"
                    defaultValue=""
                  />
                </div>
                <button className="flex h-12 shrink-0 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90">
                  <span>Search</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <p className="text-sm font-medium">Category</p>
                  <span className="material-symbols-outlined !text-base">expand_more</span>
                </button>
                <button className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <p className="text-sm font-medium">Brand</p>
                  <span className="material-symbols-outlined !text-base">expand_more</span>
                </button>
                <button className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <p className="text-sm font-medium">Dietary Needs</p>
                  <span className="material-symbols-outlined !text-base">expand_more</span>
                </button>

                <div className="ml-auto">
                  <select className="form-select rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 focus:border-primary focus:ring-primary text-sm">
                    <option>Sort by Popularity</option>
                    <option>Sort by Price: Low to High</option>
                    <option>Sort by Price: High to Low</option>
                    <option>Sort by Name: A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
                <div
                key={p.id}
                className="group flex transform flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                {/* Kartın tıklanabilir kısmı */}
                <Link href={`/products/${p.id}`} className="block">
                    <div
                    className="aspect-square w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${p.image}')` }}
                    aria-label={p.name}
                    />
                    <div className="flex flex-col gap-1 p-4">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{p.subtitle}</p>
                    <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                        ${p.price.toFixed(2)}
                    </p>
                    </div>
                </Link>

                {/* Kartın altındaki etkileşimli alan (link dışında kalsın) */}
                <div className="flex items-end justify-between px-4 pb-4">
                    <input
                    className="form-input h-9 w-16 rounded-md border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 text-center text-sm focus:border-primary focus:ring-primary"
                    type="number"
                    min="1"
                    defaultValue="1"
                    />
                    <button className="flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90">
                    Add to Cart
                    </button>
                </div>
                </div>
            ))}
            </div>


            {/* Pagination */}
            <nav aria-label="Pagination" className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
              <div className="hidden sm:block">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">97</span> results
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                <Link className="relative inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                  Previous
                </Link>
                <Link className="relative ml-3 inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                  Next
                </Link>
              </div>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
