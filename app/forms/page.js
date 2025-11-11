// app/forms/page.js
export const metadata = {
    title: "Form Elements Showcase",
    description: "Tailwind + forms plugin ile form bileşenleri örnekleri",
  };
  
  export default function FormsShowcasePage() {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex h-[72px] w-full items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-[-0.015em]">Portal</h2>
            </div>
  
            {/* Search */}
            <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full items-stretch rounded-lg h-full">
                <div className="text-subtle-light dark:text-subtle-dark flex items-center justify-center pl-4 rounded-l-lg border border-r-0 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                  <span className="material-symbols-outlined text-lg">search</span>
                </div>
                <input
                  className="form-input w-full rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-full placeholder:text-subtle-light dark:placeholder:text-subtle-dark px-4 rounded-l-none border-l-0 pl-2 text-sm"
                  placeholder="Search"
                  defaultValue=""
                />
              </div>
            </label>
          </div>
  
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 text-subtle-light dark:text-subtle-dark hover:bg-primary/10 hover:text-primary">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 text-subtle-light dark:text-subtle-dark hover:bg-primary/10 hover:text-primary">
              <span className="material-symbols-outlined text-2xl">settings</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTYmn45ldJ297mzTCNnIO-EbYi2u8ajGkAZobMPq5z8DEHRLBKR9Xa5Ghn5uUiM3Q42aV5Ur895f8KdlacMLN-5mrP8ide4c6zv4rnp00LXxqp0nBJXA1a7UFvp4V3yTOq1UFh_2kL6iWRihMWk97jRl05B754l1IwPapPbns5Lwpxw6dYzWSx99ahVtdHnLtEZDxhxtsrM6x0fJ4WVYH_pvS8A1oGKhvQ9vggGBnMOtV_dYpyHcvR_mQ_csnhNOslYx4ZoQvLLMc")',
              }}
              aria-label="User profile avatar"
            />
          </div>
        </header>
  
        <div className="flex">
          {/* Sidebar */}
          <aside className="fixed top-[72px] left-0 z-10 hidden h-[calc(100vh-72px)] w-[260px] flex-col justify-between border-r border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-4 lg:flex">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_o5nn0fgWSDjAxzwPQxGRWLhkZwMu_eCkv0XyrvSTm41-adTkXhxidW_sa0P-6LbCQtmFHbKn9_Eem4F69vTtLzh2m7L4qcfWvrUaihke9VP2-FIqzf597O-rMwPuhBGIPuOs4yFVNjDC7VanNjENlzdco7MvhYNQyfdz2kWWJgGFD7tlUXtW-mLa6Sn7Guv3tNp5CLRZphqDnkU44DFbsf1quXWhqDyUWao4xcwNDLtfSsNcCdADVFGaiUcfwYiLJxNogHvgMZo")',
                  }}
                  aria-label="Company logo"
                />
                <div className="flex flex-col">
                  <h1 className="text-base font-semibold">FreshFoods Inc.</h1>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">B2B Supply</p>
                </div>
              </div>
  
              <nav className="flex flex-col gap-2 mt-4">
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-primary/10 hover:text-primary" href="#">
                  <span className="material-symbols-outlined text-2xl">dashboard</span>
                  <p className="text-sm font-medium">Dashboard</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-primary/10 hover:text-primary" href="#">
                  <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  <p className="text-sm font-medium">Orders</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-primary/10 hover:text-primary" href="#">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                  <p className="text-sm font-medium">Products</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary" href="#">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    description
                  </span>
                  <p className="text-sm font-medium">Forms Showcase</p>
                </a>
              </nav>
            </div>
          </aside>
  
          {/* Main */}
          <main className="w-full flex-1 lg:pl-[260px]">
            <div className="mx-auto max-w-4xl p-6 lg:p-10">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-4xl font-black tracking-[-0.033em]">Form Elements Showcase</h1>
              </div>
  
              <form className="space-y-8 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6 lg:p-8 shadow-sm">
                {/* Basic Information */}
                <section>
                  <h2 className="mb-6 border-b border-border-light dark:border-border-dark pb-1 text-2xl font-bold tracking-[-0.015em]">
                    Basic Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="company-name">Company Name</label>
                      <input id="company-name" type="text" placeholder="Enter company name"
                        className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50" />
                    </div>
  
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="contact-email">Contact Email (Error State)</label>
                      <input id="contact-email" type="email" defaultValue="invalid-email"
                        className="form-input w-full rounded-lg border-error bg-background-light dark:bg-background-dark focus:border-error focus:ring-2 focus:ring-error/50" />
                      <p className="text-xs text-error">Please enter a valid email address.</p>
                    </div>
  
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="phone-number">Phone Number</label>
                      <input id="phone-number" type="tel" placeholder="(123) 456-7890"
                        className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50" />
                    </div>
  
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-subtle-light dark:text-subtle-dark" htmlFor="disabled-field">Disabled Field</label>
                      <input id="disabled-field" type="text" placeholder="Disabled" disabled
                        className="form-input w-full cursor-not-allowed rounded-lg border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50" />
                    </div>
                  </div>
                </section>
  
                {/* Order Details */}
                <section>
                  <h2 className="mb-6 border-b border-border-light dark:border-border-dark pb-1 text-2xl font-bold tracking-[-0.015em]">
                    Order Details
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="product-category">Product Category</label>
                      <select id="product-category"
                        className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50">
                        <option>Fresh Vegetables</option>
                        <option>Dairy & Eggs</option>
                        <option>Meats & Seafood</option>
                        <option>Bakery</option>
                      </select>
                    </div>
  
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="delivery-date">Requested Delivery Date</label>
                      <div className="relative">
                        <input id="delivery-date" type="date"
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark pr-10 focus:border-primary focus:ring-2 focus:ring-primary/50" />
                        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">calendar_today</span>
                      </div>
                    </div>
  
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="dietary-needs">Dietary Needs (Multi-select)</label>
                      <select id="dietary-needs" multiple
                        className="form-multiselect w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50">
                        <option>Gluten-Free</option>
                        <option>Organic</option>
                        <option>Nut-Free</option>
                        <option>Vegan</option>
                        <option>Halal</option>
                      </select>
                    </div>
  
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="special-instructions">Special Instructions</label>
                      <textarea id="special-instructions" rows={4} placeholder="Any special requests or delivery notes..."
                        className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                </section>
  
                {/* Preferences & Upload */}
                <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
                  <section>
                    <h2 className="mb-6 border-b border-border-light dark:border-border-dark pb-1 text-2xl font-bold tracking-[-0.015em]">
                      Preferences
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <p className="mb-2 text-sm font-medium">Communication Preferences</p>
                        <div className="flex flex-col gap-2">
                          <label className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked className="form-checkbox rounded text-primary focus:ring-primary/50" />
                            <span className="text-sm">Email Updates</span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input type="checkbox" className="form-checkbox rounded text-primary focus:ring-primary/50" />
                            <span className="text-sm">SMS Notifications</span>
                          </label>
                        </div>
                      </div>
  
                      <div>
                        <p className="mb-2 text-sm font-medium">Delivery Frequency</p>
                        <div className="flex flex-col gap-2">
                          <label className="flex items-center gap-3">
                            <input type="radio" name="delivery-freq" defaultChecked className="form-radio text-primary focus:ring-primary/50" />
                            <span className="text-sm">Weekly</span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input type="radio" name="delivery-freq" className="form-radio text-primary focus:ring-primary/50" />
                            <span className="text-sm">Bi-weekly</span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input type="radio" name="delivery-freq" className="form-radio text-primary focus:ring-primary/50" />
                            <span className="text-sm">Monthly</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
  
                  <section>
                    <h2 className="mb-6 border-b border-border-light dark:border-border-dark pb-1 text-2xl font-bold tracking-[-0.015em]">
                      Document Upload
                    </h2>
                    <div>
                      <label className="text-sm font-medium" htmlFor="file-upload-input">Upload Business License</label>
                      <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-border-light dark:border-border-dark px-6 py-10">
                        <div className="text-center">
                          <span className="material-symbols-outlined text-4xl text-subtle-light dark:text-subtle-dark">cloud_upload</span>
                          <div className="mt-4 flex text-sm leading-6 text-subtle-light dark:text-subtle-dark">
                            <label htmlFor="file-upload-input"
                              className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 dark:focus-within:ring-offset-surface-dark hover:text-primary/80">
                              <span>Upload a file</span>
                              <input id="file-upload-input" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-subtle-light dark:text-subtle-dark">PNG, JPG, PDF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
  
                {/* Account Security */}
                <section>
                  <h2 className="mb-6 border-b border-border-light dark:border-border-dark pb-1 text-2xl font-bold tracking-[-0.015em]">
                    Account Security
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="password">Password</label>
                      <input id="password" type="password" placeholder="Enter new password"
                        className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" htmlFor="confirm-password">Confirm Password</label>
                      <input id="confirm-password" type="password" placeholder="Confirm new password"
                        className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                </section>
  
                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-4 border-t border-border-light dark:border-border-dark pt-6">
                  <button type="button" className="rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark px-6 py-2.5 text-sm font-semibold hover:bg-border-light dark:hover:bg-border-dark/50 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-surface-dark transition-colors">
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
  