// app/orders/checkout/page.js
import Link from "next/link";

export const metadata = {
  title: "Checkout - FoodSupply Co.",
  description: "Shipping information and order summary",
};

export default function CheckoutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="flex h-full w-full">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-0 z-20 flex h-full w-[260px] flex-col justify-between border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-2">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-primary">store</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#131613] dark:text-gray-100 text-base font-medium">Golden Dine</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Restaurant</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2 mt-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium">Dashboard</p>
              </Link>

              <Link
                href="/orders/checkout"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30 text-primary dark:text-white"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  receipt_long
                </span>
                <p className="text-sm font-medium">Orders</p>
              </Link>

              <Link
                href="/products"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="material-symbols-outlined">inventory_2</span>
                <p className="text-sm font-medium">Products</p>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="material-symbols-outlined">storefront</span>
                <p className="text-sm font-medium">Suppliers</p>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="material-symbols-outlined">analytics</span>
                <p className="text-sm font-medium">Analytics</p>
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-1">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Settings</p>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">help</span>
              <p className="text-sm font-medium">Support</p>
            </Link>
          </div>
        </aside>

        <div className="flex flex-1 flex-col pl-[260px]">
          {/* TopNavBar */}
          <header className="sticky top-0 z-10 flex h-[72px] items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-10">
            <div className="flex items-center gap-8">
              <label className="flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-gray-500 dark:text-gray-400 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined !text-xl">search</span>
                  </div>
                  <input
                    className="form-input flex w-full flex-1 rounded-lg text-[#131613] dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none pl-2 text-sm"
                    placeholder="Search orders, products..."
                    defaultValue=""
                  />
                </div>
              </label>
            </div>

            <div className="flex flex-1 justify-end gap-4">
              <button className="flex items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-[#131613] dark:text-gray-100 gap-2 text-sm font-bold px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-[#131613] dark:text-gray-100 gap-2 text-sm font-bold px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined">help</span>
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

          {/* Main Content */}
          <main className="flex-1 p-6 lg:p-10">
            <div className="mx-auto max-w-7xl">
              {/* PageHeading & ProgressBar */}
              <div className="mb-8">
                <p className="text-[#131613] dark:text-gray-100 text-4xl font-black tracking-[-0.033em]">Checkout</p>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">1</div>
                      <p className="text-primary text-base font-bold">Shipping</p>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600 mx-4" />
                    <div className="flex items-center gap-2 opacity-50">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold">2</div>
                      <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Payment</p>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600 mx-4" />
                    <div className="flex items-center gap-2 opacity-50">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold">3</div>
                      <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Review</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-[#131613] dark:text-gray-100 mb-6">Shipping Information</h2>

                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="sm:col-span-2">
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">Company Name</p>
                          <input
                            className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                            placeholder="Enter your company name"
                            defaultValue="Golden Dine Restaurant"
                          />
                        </label>
                      </div>

                      <div>
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">Contact Person</p>
                          <input
                            className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                            placeholder="e.g. John Doe"
                            defaultValue=""
                          />
                        </label>
                      </div>

                      <div>
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">Contact Phone</p>
                          <input
                            className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                            placeholder="(123) 456-7890"
                            defaultValue=""
                          />
                        </label>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">Shipping Address</p>
                          <input
                            className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                            placeholder="123 Market Street"
                            defaultValue=""
                          />
                        </label>
                      </div>

                      <div>
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">City</p>
                          <input
                            className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                            placeholder="San Francisco"
                            defaultValue=""
                          />
                        </label>
                      </div>

                      <div>
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">State / Zip Code</p>
                          <div className="flex gap-4">
                            <input
                              className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                              placeholder="CA"
                              defaultValue=""
                            />
                            <input
                              className="form-input w-full rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-sm"
                              placeholder="94103"
                              defaultValue=""
                            />
                          </div>
                        </label>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="flex flex-col">
                          <p className="text-[#131613] dark:text-gray-200 text-sm font-medium pb-2">Delivery Instructions (Optional)</p>
                          <textarea
                            className="form-textarea w-full resize-y rounded-lg text-[#131613] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 min-h-24 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-sm"
                            placeholder="e.g. Leave with reception, use loading dock B..."
                          />
                        </label>
                      </div>
                    </form>

                    <div className="mt-8 flex justify-end gap-4">
                      <Link
                        href="#"
                        className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent text-primary text-base font-bold hover:bg-primary/10"
                      >
                        Back to Cart
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-md hover:bg-primary/90"
                      >
                        Continue to Payment
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Order Summary Card */}
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 sticky top-28">
                    <h3 className="text-xl font-bold text-[#131613] dark:text-gray-100 mb-4">Order Summary</h3>

                    <div className="space-y-4">
                      {/* item 1 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-16 w-16 rounded-lg object-cover"
                            alt="Organic Tomatoes"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBymYc-GVnutSW5iyv3u_w3ChQzfwIh2QLAZqq3e8uZvDOnUNp51xhwAfJXc0yO_hpBaRXcEprkMMhOxUnprd-ppCcFXwbBrHWEkpVC86kKHcY8ooHGbPMtWuh_01Q1vuqhTPJXLeRmTmHxUz0mRg23GeHQls5HFZrFvvXfFcMYK8moLMzeu9xY4ag6enoPiaG6ne4SSpiz8siXcVoJNXiDj0GgIstEBQxaimolsmvYMok1m-LCjJ1TPze-9Cm2NbhxmOHyMoaqiQQ"
                          />
                          <div>
                            <p className="font-semibold text-sm text-[#131613] dark:text-gray-100">Organic Tomatoes</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Qty: 2 cases</p>
                          </div>
                        </div>
                        <p className="font-medium text-sm text-[#131613] dark:text-gray-200">$50.00</p>
                      </div>

                      {/* item 2 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-16 w-16 rounded-lg object-cover"
                            alt="Hass Avocados"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr3wnaA2hctJ9Jj7sakDH3YK7lRfT0JuWWjDXXDElMw7uvO45GS_ldxNmD7BxFOXHT_wqstlO1BQZtC0ZihMV3DHtnsb3Zno-9kJc1dtJjXhUCnApFYbvB356EKcy3o5nuS4F4sTNRoknXYcWx6Z8lOZp_T_j2-eG00dUZ8Ov95ts0JZF2ymXkYTE4luHt5zwO0VVHq1M0rMtIVQEkSj8MVItkGMaUA3-11--8Dp1i8oj1tx_ogNfZDJ175F_BPm8t_vnEJnJTtTk"
                          />
                          <div>
                            <p className="font-semibold text-sm text-[#131613] dark:text-gray-100">Hass Avocados</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Qty: 1 box</p>
                          </div>
                        </div>
                        <p className="font-medium text-sm text-[#131613] dark:text-gray-200">$42.50</p>
                      </div>

                      {/* item 3 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-16 w-16 rounded-lg object-cover"
                            alt="Sourdough Loaves"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXKK5L3eZZH8SD7ICtt7la7Mo959BA4WYK1BT9uYw9lMjcD0fOOVmC8nt5EGEkP86iQoQt6UCC9ldtj-LnlKjSGodWc6UNzYRY73zPw6lrA5AZHeHOVmPPDxazTABsAukWsWqN9JIby06kiiAFB0XqR6IzdcXSEeAd6hV8htqX_5x279zasrSHh0TFgR8PXgU2IoHe-z_XfDJRrJB41VqlU3TReCJKa0x8Z1ylzPHFFS1kSNARtWs9PxdaVvQ-BGpm1fHVgJCAysc"
                          />
                          <div>
                            <p className="font-semibold text-sm text-[#131613] dark:text-gray-100">Sourdough Loaves</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Qty: 10 loaves</p>
                          </div>
                        </div>
                        <p className="font-medium text-sm text-[#131613] dark:text-gray-200">$35.00</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 my-6" />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400">Subtotal</p>
                        <p className="font-medium text-[#131613] dark:text-gray-200">$127.50</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400">Shipping</p>
                        <p className="font-medium text-[#131613] dark:text-gray-200">$15.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400">Taxes</p>
                        <p className="font-medium text-[#131613] dark:text-gray-200">$11.16</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

                    <div className="flex justify-between">
                      <p className="text-lg font-bold text-[#131613] dark:text-gray-100">Total</p>
                      <p className="text-lg font-bold text-[#131613] dark:text-gray-100">$153.66</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
