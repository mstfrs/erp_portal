// app/dashboard/wishlist/page.js
export const metadata = { title: "My Wishlist - CC Culinary" };

const items = [
  {
    id: "1",
    brand: "Bio Farms",
    title: "Organic Roma Tomatoes, 5kg Crate",
    price: "€24.99",
    stock: "In Stock",
    statusColor: "text-primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkCFtPGBtPoK66QUWdXKOgaUZEiFiHkF4-vZEBvGjzqRCCSM1OwjS88kKizZM2JMlRq7xGQ5ruz-27JGHUcp-QatVUEtnV51mAXWdfYxSxoKJu5ZteQmnSydhMeiuGGpUkH2oP1I9RONDfMGNsoY5jtF5KHAL1WGwa2JVadi5G87hyp1uwfTxnEU84SbQfCrY6CFTw4Zj69Zpx7qi_uMUKWaMlxga6WVTcGP5TkatjB-508kYPB3UyKHL0EW7BjnJEYJs_N5w4m38",
    cta: { label: "Add to Cart", kind: "primary" },
  },
  {
    id: "2",
    brand: "Green Fields",
    title: "Fresh Basil Bunch, 1kg",
    price: "€12.50",
    stock: "In Stock",
    statusColor: "text-primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ciD-cS8waGzpWG1jN7sA2ro7khxDGe-3zmTJxnmykXR4mKioveGj6aMgTuFREh5Nhlrz5WgjoX7_TTyDxG8IzWuHrGJaDmFZPWZ6pLoFRy-V2pnajVHi11fblIwDIA1RwyD1imTdmhehMYvPvODG_R50ja7AT_eh-v1QD_x9XiAUY_a3rqywPITyRhRc76m-6O2jj4Q9wjb63e5BimuT7WaZmBgzRx678-KkmSV31whqb2fRz7pJyRPFviUoPoybqGf61_GS49o",
    cta: { label: "Add to Cart", kind: "primary" },
  },
  {
    id: "3",
    brand: "Italiano Vero",
    title: "Italian Extra Virgin Olive Oil, 5L",
    price: "€45.00",
    stock: "Out of Stock",
    statusColor: "text-red-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG66LL4PR0_9gMPIXVlcU3mW8fIhGPHWNi-khMqCqi0f7wGCHHJ3Prllu5a2rRaBh2iXxqqGIgm-hTSHZzXrn6qZ13FC-CgDKtaKdJccd70i3pJ3vZIODMXsRHZovQ08rzL_vyBJkAoD3OrMb5k9Qhxo8aeVKwhHFyS-FvIP3sxUpWVUMbfcpkCZrhfeu2h3TXplLv4tQDV5CBCmxvEqKGhrWU5Bkgj-2KbBefrTNr3kCDo1ZZ__yqsDfyppAi44gXVB-bI32ufBM",
    cta: { label: "Notify Me", kind: "muted" },
  },
  {
    id: "4",
    brand: "The Bakery",
    title: "Artisanal Sourdough Loaf",
    price: "€8.75",
    stock: "In Stock",
    statusColor: "text-primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD2DqAQbr3o_31u_BOQc4omyrReOlL5lOrBjw257_KoMrVveQFKbvPqbxbPa_E15GvqGjznSn-3CNpJH7UEYR_tsc0vTDR7QS8wjz7VXdlVImdmN-m6PiE8ELhzYHYLVrCFuxJZ2rVz0BCNtlvBl7EShRrLtYDcWu0mFdnRGgit07VSmQGLIG0OITgXzCIkw3fR-U0Lix1OEQh5-RC7IqzWQTB8-DUHeTPbPov4K0_1UGz1UCKdajw2zQKRgJKiLtoMm7rB0puH84",
    cta: { label: "Add to Cart", kind: "primary" },
  },
  {
    id: "5",
    brand: "Italiano Vero",
    title: "Parmigiano Reggiano, 2kg Block",
    price: "€55.20",
    stock: "In Stock",
    statusColor: "text-primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXvv4E4sTdcVzj0izXI4n7UmIHD7xgqKzHXp0Pb5SHTAie9l9DOA9f5KmDLO3KFhfQWr0D1SVjCrB9Gdwc72JNU8i3TQC-A_4S9WmV__bXxbKsCqQ7cAAL8GESAoc-PPvwDLq6Xap1JCTV5hd9vIV5CxLNVpT7xbzt1ZUYZU4_20Si8bhk86NoDMaOy5LYv3sndNz9VlmbSI8_-ABcVZV2zj-wzmFXBJiorCQVO5J74jBQqKmj2SJNnUKqjehD6caYY_vaZQBtqoo",
    cta: { label: "Add to Cart", kind: "primary" },
  },
];

export default function WishlistPage() {
  return (
    <main className="bg-[#F9F9F9] dark:bg-[#102211] min-h-screen p-4 sm:p-6 lg:p-8 font-display">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">My Wishlist</h1>
            <p className="text-sm text-zinc-500">{items.length} items</p>
          </div>
          <button className="text-[#D32F2F] text-sm font-medium hover:underline">Clear All</button>
        </div>

        {/* Filters (dummy) */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Chip icon="filter_list">All Brands</Chip>
          <Chip icon="swap_vert">Recently Added</Chip>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}

/* Components */
function Chip({ icon, children }) {
  return (
    <button className="flex h-9 items-center gap-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 pl-3 pr-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700">
      <span className="material-symbols-outlined !text-xl">{icon}</span>
      <span className="text-sm font-medium">{children}</span>
      <span className="material-symbols-outlined !text-xl">expand_more</span>
    </button>
  );
}

function Card({ brand, title, price, stock, statusColor, img, cta }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="relative">
        <div
          className="w-full aspect-square bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: `url("${img}")` }}
          aria-label={title}
        />
        <div className="absolute top-3 left-3 bg-zinc-900/50 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {brand}
        </div>
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 dark:bg-zinc-800/80 grid place-items-center text-[#D32F2F]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            favorite
          </span>
        </button>
      </div>
      <div className="p-4 pt-0 flex flex-col gap-3">
        <p className="text-base font-semibold h-12">{title}</p>
        <div className="flex items-baseline justify-between">
          <p className={`text-lg font-bold ${cta.kind === "muted" ? "text-zinc-500 dark:text-zinc-400" : "text-primary"}`}>
            {price}
          </p>
          <p className={`text-sm font-medium ${statusColor}`}>{stock}</p>
        </div>
        <button
          className={`mt-2 h-10 w-full rounded-lg text-sm font-bold ${
            cta.kind === "muted"
              ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {cta.label}
        </button>
      </div>
    </div>
  );
}
