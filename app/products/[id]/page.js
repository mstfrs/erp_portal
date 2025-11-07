// app/products/[id]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";

const DB = [
  {
    id: "apple",
    name: "Organic Gala Apples",
    category: "Fruits",
    sku: "ORG-APP-GL-40",
    availability: "In Stock",
    price: 85.5,
    unit: "Case of 40 lbs",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJNMBwcoj-W1s1q3e2Jfjagj4Mf9x5UiLBYpSx-F5lrie3KPEP5cuAxx0gWQ9qIIa0h0DiRjtUlCQyQHc1t-cJ8yVpcfycEqOayYSv8SuQLtF-eserJWq9PnHNMBQH0CiPGvZggr-jD6oJCx3eSyfKwfvE0T2pL8eGpWqrZ0lmAiVGeIRs3QiJzcVMhcyF_du3J6b17hFVKhkeTYDuHT27kg5LfCWUK3n5bOkuzEmETPvWBA9s_LBsogvG3PbbxrBSKS_-yYTNho",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFfdQWqEOkEDdrIyV3gMO4gtwPIjuoxH7GAkco_xvmY8ZVFsGN2WwZjo96t4lcS-UleDDLvMq_esAiXLNqir8cHKctLf4ZOhpwbHdRxpCH83_3D4Va5KsjWrnDiu_luhzcPS9VXpitT44f0Rri6RrrDEDA38KIj2SPfEqEYak7RM-4XZoFMefjaKNcx0Hg5npjc7aYpQPYlX4MEELOo6OQaIBBPUYAZcX9lcNOXZQPVHGzPSZFOw3QMfRUi-wdDuZuDwHW-Ab4wS4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB95ZAgRGshO_vcNugZCJyRAj4kwXRkPmpdbOwd_WB4MSrRncpeIgoVdTAyUaurh5ZyMQRaz44yuXwISf63DY5mVijpBpDqa8A7YKP1f7-F0agmvE6sA6Yt83UOsEItSftip6xW_flzIayuXqxK1DLYkitxsDsAGurX1UfXav_kVVzVuHbFk9graIuAilPFAtLgPgXE1kz7cfiPwkPqrYqHDW2sgzY3GE4dMxbA1gSTLLhaJ2fZ40DTbR9AFgSatikykDosboNteQk",
    ],
    description:
      "Crisp, sweet, and juicy, our organic Gala apples are sourced from certified organic farms. Perfect for fresh eating, salads, and baking. Each case is hand-inspected for quality and freshness.",
    bullet: [
      { k: "Origin", v: "Washington, USA" },
      { k: "Certification", v: "USDA Organic" },
      { k: "Shelf Life", v: "3-4 weeks refrigerated" },
      { k: "Usage", v: "Ideal for snacking, salads, sauces, and pies." },
    ],
  },
  {
    id: "olive-oil",
    name: "Premium Olive Oil",
    category: "Oils",
    sku: "PRM-OLV-1L-6",
    availability: "In Stock",
    price: 120,
    unit: "Box of 6 x 1L Bottles",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfdNNLA0a4nj4UTRBh-o5QiwEzbaES1i8pYJKwg5xTVZNFSH_Lq5KOBHJCYtNSdmwjZFfWR6YuYlXLG6wbRZsNHiX7IpzpuSI-9LHERkDttrFPuGMptZ27jSVijSP5IUvKIh9BSIkVhhsfHsZuwWOdP0dUBPrgbqAxUswiq5STJyVsq9acKbCFi9KVXpndptaoikXxvCkvPA3ABWk8_IBrTJ8De5-3lhb1MyiCPHik6gJNnr6N6yhFbxWkisJ2mLUZaVxkBd_YMtY",
    ],
    description:
      "Extra-virgin, cold-pressed olive oil with a balanced flavor profile. Ideal for dressings, marinades, and finishing.",
    bullet: [
      { k: "Origin", v: "Mediterranean Region" },
      { k: "Acidity", v: "< 0.8%" },
      { k: "Packaging", v: "Dark glass bottles" },
    ],
  },
  // ... diğer ürünleri istersen ekleyebilirsin
];

export async function generateMetadata({ params }) {
  const product = DB.find((p) => p.id === params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `FreshCart B2B - ${product.name}`,
    description: product.description?.slice(0, 150),
  };
}

export default function ProductDetailPage({ params }) {
  const product = DB.find((p) => p.id === params.id);
  if (!product) return notFound();

  const [main, ...thumbs] = product.images;

  return (
    <div className="relative flex min-h-screen w-full flex-col">
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
            <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">Dashboard</Link>
            <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">Orders</Link>
            <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">Help</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ--go4ikmJc0bhjJgKSxvX13rTbH3pZU74CDb-z3CmOn2bkijQb_AUJA04O2HAJK651YhsiQWEeX2_fJSSSK7Md82yhweVm6-eewjRlrjjqe1I8SnAkA7Brq20caZOTrRBusmrmc8rGePq4oowHIb4nO1PtxTyUWr4XLrRu9XJB0SWXxsLYfVmD2RnBkX73gi23dpdG9kpa-L_W57xXtdmffgRm-w64viR0fRXdVficJFLOZO1jn9Va3I6AcbrC05rlFcOZ0C3k")' }}
            aria-label="User avatar"
          />
        </div>
      </header>

      <div className="flex h-full grow">
        {/* Sidebar (dummy) */}
        <aside className="fixed top-[72px] left-0 z-30 h-[calc(100vh-72px)] w-[260px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB26qq5Huj8m0mitatt9hHJm7yY_k-BlxDI9MYOmUkOE7ogcL0z9iYNQ-MQy2X6mr93M-UR0V-WVHUJZ-0zdLWQVBUmsIZaGCFkzGWyI1TLDaV5I92Wc5azB6WWsUtojhAlRipqFS-teU9htNt-tzlWBJ0rth_Wi45reZmOO8vw4JDZy32W-7xJKP_GW0Odheh7FBHKDWtcEpjRO_jWtea9cgqB_M8jU8hvK3Ef9uxjuTsadgpY2eVB8HwS7HaqcoudzNy4HRDKT6k")' }}
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
                <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary" href="/products">
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

        {/* Content */}
        <main className="ml-[260px] w-[calc(100%-260px)] flex-1 p-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:underline" href="/products">Products</Link></li>
                <li><span className="material-symbols-outlined !text-base">chevron_right</span></li>
                <li className="font-medium text-slate-700 dark:text-slate-300">{product.category}</li>
                <li><span className="material-symbols-outlined !text-base">chevron_right</span></li>
                <li className="font-medium text-slate-700 dark:text-slate-300">{product.name}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Image gallery */}
              <div className="flex flex-col gap-4">
                <div className="aspect-square w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${main}')` }} />
                </div>
                {thumbs.length > 0 && (
                  <div className="grid grid-cols-4 gap-4">
                    {[main, ...thumbs].slice(0,4).map((src, i) => (
                      <div
                        key={i}
                        className={`aspect-square w-full overflow-hidden rounded-lg ${i === 0 ? "border-2 border-primary" : "border border-slate-200 dark:border-slate-800 hover:border-primary"}`}
                      >
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-primary">{product.category?.toUpperCase()}</span>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {product.name}
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400">{product.description}</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-base text-slate-500 dark:text-slate-400">/ {product.unit}</span>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800" />

                <div className="flex flex-col gap-4">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    SKU: <span className="font-normal text-slate-500 dark:text-slate-400">{product.sku}</span>
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Availability: <span className="font-normal text-green-600 dark:text-green-400">{product.availability}</span>
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center">
                    <button className="flex h-12 w-12 items-center justify-center rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <input
                      className="form-input h-12 w-20 rounded-none border-x-0 border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-900 text-center text-lg font-bold focus:border-primary focus:ring-0"
                      type="text"
                      defaultValue="1"
                    />
                    <button className="flex h-12 w-12 items-center justify-center rounded-r-lg border border-l-0 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                  <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-md hover:bg-primary/90">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs + Description */}
            <div className="w-full">
              <div className="border-b border-slate-200 dark:border-slate-800">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  <a className="whitespace-nowrap border-b-2 border-primary py-4 px-1 text-sm font-medium text-primary" href="#">Product Description</a>
                  <a className="whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300" href="#">Nutritional Information</a>
                  <a className="whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300" href="#">Shipping & Returns</a>
                </nav>
              </div>
              <div className="py-6">
                <div className="prose prose-slate max-w-none dark:prose-invert">
                  <p>{product.description}</p>
                  <ul>
                    {product.bullet?.map((b) => (
                      <li key={b.k}>
                        <strong>{b.k}:</strong> {b.v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
