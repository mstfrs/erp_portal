// app/orders/[orderId]/page.js
import Link from "next/link";

export function generateMetadata({ params }) {
  const id = params.orderId;
  return {
    title: `Order ${id} - Status`,
    description: `Tracking status for order ${id}`,
  };
}

export default function OrderStatusPage({ params }) {
  const orderId = decodeURIComponent(params.orderId);

  // Demo veri – ileride API'den besleyebiliriz
  const estimated = "June 24, 2024";
  const timeline = [
    {
      key: "delivered",
      title: "Delivered",
      desc: "Your order has been delivered.",
      time: "June 21, 2024, 2:30 PM",
      state: "done",
    },
    {
      key: "out",
      title: "Out for Delivery",
      desc: "The delivery is on its way to your location.",
      time: "June 21, 2024, 9:15 AM",
      state: "done",
    },
    {
      key: "shipped",
      title: "Shipped",
      desc: "Your order has been shipped from our warehouse.",
      time: "June 20, 2024, 5:00 PM",
      state: "current",
    },
    {
      key: "processing",
      title: "Processing",
      desc: "We are preparing your order for shipment.",
      state: "pending",
    },
    {
      key: "placed",
      title: "Order Placed",
      desc: "Your order has been received.",
      state: "pending",
    },
  ];

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
            <Link href="#" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary">
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
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ--go4ikmJc0bhjJgKSxvX13rTbH3pZU74CDb-z3CmOn2bkijQb_AUJA04O2HAJK651YhsiQWEeX2_fJSSSK7Md82yhweVm6-eewjRlrjjqe1I8SnAkA7Brq20caZOTrRBusmrmc8rGePq4oowHIb4nO1PtxTyUWr4XLrRu9XJB0SWXxsLYfVmD2RnBkX73gi23dpdG9kpa-L_W57xXtdmffgRm-w64viR0fRXdVficJFLOZO1jn9Va3I6AcbrC05rlFcOZ0C3k")',
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
                  <h1 className="text-slate-900 dark:text-white text-base font-semibold">Mega Foods Inc.</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">b2b.megafoods.com</p>
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
                <Link href="#" className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    receipt_long
                  </span>
                  <p className="text-sm font-medium">Orders</p>
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">local_shipping</span>
                  <p className="text-sm font-medium">Suppliers</p>
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
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <li><Link href="#" className="hover:underline">Orders</Link></li>
                  <li><span className="material-symbols-outlined !text-base">chevron_right</span></li>
                  <li className="font-medium text-slate-700 dark:text-slate-300">#{orderId}</li>
                </ol>
              </nav>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Order Status</h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Estimated Delivery:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{estimated}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="relative pl-8">
                <div className="absolute left-[11px] top-1 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />
                <div className="relative flex flex-col gap-12">
                  {timeline.map((t) => (
                    <div key={t.key} className="flex items-start gap-6">
                      {/* Bullet */}
                      {t.state === "done" && (
                        <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                          <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>check</span>
                        </div>
                      )}
                      {t.state === "current" && (
                        <div className="z-10 h-6 w-6 rounded-full border-2 border-[#2196F3] bg-white dark:bg-slate-900">
                          <div className="mx-auto my-auto h-3 w-3 rounded-full bg-[#2196F3]" />
                        </div>
                      )}
                      {t.state === "pending" && (
                        <div className="z-10 h-6 w-6 rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900" />
                      )}

                      {/* Text */}
                      <div className="flex-1 -mt-1">
                        <p
                          className={
                            t.state === "current"
                              ? "font-semibold text-[#2196F3]"
                              : t.state === "pending"
                              ? "font-semibold text-slate-400 dark:text-slate-500"
                              : "font-semibold text-slate-900 dark:text-white"
                          }
                        >
                          {t.title}
                        </p>
                        <p
                          className={
                            t.state === "pending"
                              ? "text-sm text-slate-400 dark:text-slate-500"
                              : "text-sm text-slate-500 dark:text-slate-400"
                          }
                        >
                          {t.desc}
                        </p>
                        {t.time && (
                          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{t.time}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Shipping Address</h3>
                <div className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  <p>The Green Grocer</p>
                  <p>123 Fresh Produce Lane</p>
                  <p>Foodville, CA 90210</p>
                  <p>United States</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Payment Information</h3>
                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Method:</span>
                    <span>Net 30 Terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Status:</span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Paid
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Need Help?</h3>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <span className="material-symbols-outlined !text-base">receipt</span>
                    <span>View Invoice</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <span className="material-symbols-outlined !text-base">support_agent</span>
                    <span>Contact Support</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
