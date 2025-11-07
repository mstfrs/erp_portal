// app/orders/page.js
import Link from "next/link";

export const metadata = {
  title: "All Orders - FreshCart B2B",
  description: "Browse and manage all orders",
};

const orders = [
  { id: "1123-A56B", customer: "The Corner Cafe", date: "2024-05-24", total: 1250.75, status: "Delivered" },
  { id: "1122-C89D", customer: "Gourmet Grill",  date: "2024-05-23", total: 850.0,   status: "Shipped" },
  { id: "1121-B45E", customer: "City Bistro",     date: "2024-05-23", total: 2115.5,  status: "Pending" },
  { id: "1119-H34I", customer: "Market Fresh",    date: "2024-05-20", total: 1500.0,  status: "Canceled" },
];

const statusBadge = (s) => {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  if (s === "Delivered") return `${base} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`;
  if (s === "Shipped")   return `${base} bg-blue-100  text-blue-800  dark:bg-blue-900  dark:text-blue-300`;
  if (s === "Pending")   return `${base} bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300`;
  if (s === "Canceled")  return `${base} bg-rose-100  text-rose-800  dark:bg-rose-900  dark:text-rose-300`;
  return `${base} bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300`;
};

const fmt = (d) => new Date(d).toLocaleDateString("en-GB"); // dd/MM/yyyy

export default function OrdersListPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
      {/* Top bar */}
      <header className="sticky top-0 z-40 flex h-[72px] w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 backdrop-blur-sm px-6">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 28 }}>
            local_mall
          </span>
          <h2 className="text-xl font-bold tracking-[-0.015em]">FreshCart B2B</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <nav className="flex items-center gap-9">
            <Link href="#" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="/orders" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary">
              Orders
            </Link>
            <Link href="#" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary">
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
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ70Ap7QgpB2iyqexJJHoTELEV9HiIYHjR1sSkRrgYvpTGY82MhxL5AihwAgvoSWL-5ed2_i6U4wf5Cht77dJ8RWtb9QdNUR9gpsjM2jUeb6JC2nv8CgbI0G44ape09pQAWgdP9PqHxn8LoEnIEz9DtVjeMqhobJefFWV_Mk9AHFaiU_bDUWDhlOclsjPFUecQK9aRCyIvTNgxieJucuhZfh6BV_J0oVT6dUVhC1ubta0Sg8JCzv8K8PHZl0JXTiYWG26lfpsind4")',
            }}
            aria-label="User avatar"
          />
        </div>
      </header>

      <div className="flex h-full grow">
        {/* Sidebar */}
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
                  <h1 className="text-slate-900 dark:text-white text-base font-semibold">FreshFoods Inc.</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">B2B Supply</p>
                </div>
              </div>

              <nav className="flex flex-col gap-2 mt-4">
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">dashboard</span>
                  <p className="text-sm font-medium">Dashboard</p>
                </Link>
                <Link href="/products" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">inventory_2</span>
                  <p className="text-sm font-medium">Products</p>
                </Link>
                <Link href="/orders" className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    receipt_long
                  </span>
                  <p className="text-sm font-medium">Orders</p>
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">request_quote</span>
                  <p className="text-sm font-medium">Invoices</p>
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-1">
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium">Settings</p>
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">help</span>
                <p className="text-sm font-medium">Support</p>
              </Link>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="ml-[260px] w-[calc(100%-260px)] flex-1 p-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            {/* Page heading & actions */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">All Orders</h1>
              <Link
                href="#"
                className="flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90"
              >
                + Create New Order
              </Link>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <div className="relative grow min-w-[240px]">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="form-input h-10 w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark pl-10 text-sm focus:border-primary focus:ring-primary"
                  placeholder="Search by Order ID..."
                  defaultValue=""
                />
              </div>

              <select className="form-select h-10 rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-sm focus:border-primary focus:ring-primary">
                <option>Status: All</option>
                <option>Delivered</option>
                <option>Shipped</option>
                <option>Pending</option>
                <option>Canceled</option>
              </select>

              <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined !text-base">calendar_month</span>
                Date Range
              </button>

              <button className="ml-auto text-sm font-medium text-primary hover:underline">Clear Filters</button>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60">
                  <tr className="text-left text-slate-500 dark:text-slate-400">
                    <th className="px-4 py-3 w-10">
                      <input type="checkbox" className="form-checkbox rounded" />
                    </th>
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Total</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => (
                    <tr key={o.id} className={i % 2 ? "bg-white dark:bg-slate-900" : "bg-slate-50/40 dark:bg-slate-900/60"}>
                      <td className="px-4 py-3">
                        <input type="checkbox" className="form-checkbox rounded" />
                      </td>
                      <td className="px-4 py-3">
                        <Link href={`/orders/${o.id}`} className="text-primary font-medium hover:underline">
                          #{o.id}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{o.customer}</td>
                      <td className="px-4 py-3">{fmt(o.date)}</td>
                      <td className="px-4 py-3 text-right">${o.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                      <td className="px-4 py-3">
                        <span className={statusBadge(o.status)}>{o.status}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-2.5 py-1.5 text-xs hover:bg-slate-50 dark:hover:bg-slate-800">
                          <span className="material-symbols-outlined !text-base">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Footer / Pagination */}
              <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 p-3 text-xs text-slate-500 dark:text-slate-400">
                <p>Showing 1 to 10 of 97 results</p>
                <div className="flex gap-2">
                  <button className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-2.5 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined !text-base">chevron_left</span>
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-2.5 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined !text-base">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
