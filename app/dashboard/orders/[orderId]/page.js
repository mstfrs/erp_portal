// app/dashboard/orders/[orderId]/page.js
import Link from "next/link";

export function generateMetadata({ params }) {
  const id = decodeURIComponent(params.orderId);
  return {
    title: `Bestellung #${id} – CC Culinary`,
  };
}

const demoOrder = {
  placedAt: "15. Nov. 2025",
  eta: "17. Nov. 2025",
  total: "€245,50",
  address: ["Max Mustermann", "Musterstraße 123", "10115 Berlin, Deutschland"],
  status: "Geliefert",
  items: [
    {
      name: "Frischer Lachs",
      badge: "Premium",
      qty: "2 kg",
      price: "€50,00",
      total: "€100,00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCMXkp_eXhIoMSIFM7k2mgLgla4YkStofCGhxZRCqrAVZwwPjSw--Ks6xF40EnlxN6LFeIxaUwWXTn74w96lxpc_27-I3BVIfdwrNlcF9fS7LBw5Ad5PLU0goXNwSFtE4pAVkdJUrBvPl8RF3isomEaiCZSZdndlJHIATLZZXpjm7uFNv3h2DEvyM547pAKo_FgBCDl5xmclmQ2bW3EJZiNw3N79RrWAubIz3xkyaUuDkfCKvp0F9SsVhxASGNQbcHc00tu-mHaa-8",
    },
    {
      name: "Bio Tomaten",
      badge: "Bio-Siegel",
      qty: "5 kg",
      price: "€8,00",
      total: "€40,00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA02Jb-bmSLK3WS8vdPAjoaFdxlDKOO58yGLU591T48s2jCpw4f8q0zzZDGibfxweh_JLMDRYGDfy-OAr9Q5SZ7z5vxR_iQJ7MVikBqAd5JJmW9VDIoSzkCbadhNB0_slnGTodPyY0Pvag5TrdOgK94Pe8szFqflxeZtcvBLihy3aP0fFCPnIlmiErYnFUjsnHE6aQgmNxsTnzNN4JFbJEtNbv6srrD6Cvxfr6HnPJFe5tjZrAZ3A-MpNhcSvMEKHgYFOlyg00pp4I",
    },
    {
      name: "Weizenmehl Typ 405",
      badge: "Basis",
      qty: "20 kg",
      price: "€4,00",
      total: "€80,00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-dpGVUTwAoNaNEVilca_s062Lg5sWdTJLmxipQi7xP_kb1jJXgn675MQJgPc7Dft7WfFG242y27IsXzwwaJasaWkmsI5maJUNkWXMef_0F86SwrqFYhEME78RxBskHszOf9bqr0sihvV-ary13K-Jid9FkYJPNfxZZSVeCm8iPVNzvxCOrycgukqMLg1w-VC1l1dPBUc_1tUWb_pwIynmu9ESI4-ave5rkL-1IeCuwjV2GMZhRz-9GjA6p76SvzEo0tgNofNW89k",
    },
  ],
  subtotal: "€220,00",
  shipping: "€10,00",
  tax: "€15,50",
  timeline: [
    { title: "Geliefert", time: "17. Nov. 2025, 11:30" },
    { title: "Versandt", time: "16. Nov. 2025, 18:00" },
    { title: "In Vorbereitung", time: "16. Nov. 2025, 09:15" },
    { title: "Zahlung bestätigt", time: "15. Nov. 2025, 14:05" },
    { title: "Bestellung aufgegeben", time: "15. Nov. 2025, 14:00" },
  ],
};

export default function OrderDetailPage({ params }) {
  const orderId = decodeURIComponent(params.orderId);
  const o = demoOrder;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-200/80 dark:border-gray-800/80 bg-background-light/80 dark:bg-background-dark/80 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-3xl text-[#13ec1a]">eco</span>
            <h2 className="text-lg font-bold">CC Culinary</h2>
          </div>
          <label className="relative flex min-w-40 !h-10 max-w-64">
            <span className="absolute left-3 inset-y-0 flex items-center text-gray-400 dark:text-gray-500">
              <span className="material-symbols-outlined text-xl">search</span>
            </span>
            <input
              placeholder="Search"
              className="form-input w-full rounded-lg pl-10 pr-4 text-sm border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-[#13ec1a]/50"
            />
          </label>
        </div>
        <div className="flex items-center gap-4">
          <button className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
          <div
            className="size-10 rounded-full bg-cover bg-center"
            aria-label="Avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJT08iNXOmKlPn-1L8Hr0E3K-nCMyYQ7UtPaUhdfWTAYKKuyJlfLn9HtHGu0Hs0NkqITbrU5T7_Fmf9e4WCvcgwlOtXJszQ_y5XVAqi5hPVvK5Ht8Id9fbkkLVGHndOYgZi6DnMcWTsuMZLFbveCA_zq_ZmB9chcPMYmbsUzxaRcI39NoYoskxclKepu9_jpNdGUyNmM719XCPMcCJKC9vnoLn7gG0Kw1SbrchuH3LZ-EIvAc9TeJquTGIQdpqOhJx45RclT_YBJU")',
            }}
          />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (sade) */}
        <aside className="sticky top-[73px] h-[calc(100vh-73px)] w-[260px] border-r border-gray-200/80 dark:border-gray-800/80 bg-background-light dark:bg-background-dark p-4">
          <div className="flex flex-col gap-1 pt-4">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-700 dark:text-slate-300">
              <span className="material-symbols-outlined text-2xl">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="/dashboard/orders" className="relative flex items-center gap-3 rounded-lg bg-[#13ec1a]/10 px-3 py-2 text-[#13ec1a] font-semibold">
              <div className="absolute left-0 h-full w-1 rounded-r-full bg-[#13ec1a]" />
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                receipt_long
              </span>
              <span className="text-sm font-medium">Bestellungen</span>
            </Link>
            <Link href="/products" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-700 dark:text-slate-300">
              <span className="material-symbols-outlined text-2xl">inventory_2</span>
              <span className="text-sm font-medium">Produkte</span>
            </Link>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="mx-auto w-full max-w-7xl">
            {/* Breadcrumb + header */}
            <div className="flex flex-wrap gap-2 pb-6">
              <Link href="/dashboard/orders" className="text-gray-500 hover:text-[#13ec1a] text-sm font-medium">
                Bestellungen
              </Link>
              <span className="text-gray-400 text-sm font-medium">/</span>
              <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">
                Bestellung #{orderId}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
              <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-tighter">
                Bestellung #{orderId}
              </h1>
              <div className="flex items-center gap-2 rounded-full bg-[#13ec1a]/20 px-4 py-2 text-sm font-bold text-[#13ec1a]">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span className="truncate">{o.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left column */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Order meta */}
                <div className="rounded-xl bg-white dark:bg-background-dark p-6 shadow-sm border border-gray-200/80 dark:border-gray-800/80">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-gray-500">calendar_today</span>
                      <div className="text-slate-700 dark:text-slate-300">
                        Bestelldatum:
                        <span className="block font-medium text-slate-900 dark:text-white">{o.placedAt}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-gray-500">local_shipping</span>
                      <div className="text-slate-700 dark:text-slate-300">
                        Lieferdatum:
                        <span className="block font-medium text-slate-900 dark:text-white">{o.eta}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-gray-500">euro</span>
                      <div className="text-slate-700 dark:text-slate-300">
                        Gesamt:
                        <span className="block font-bold text-[#13ec1a]">{o.total}</span>
                      </div>
                    </div>
                  </div>

                  <hr className="my-6 border-gray-200 dark:border-gray-700" />

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-500 mt-0.5">location_on</span>
                    <div className="flex-1">
                      <p className="text-slate-900 dark:text-white font-medium">Lieferadresse</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {o.address.map((l, i) => (
                          <span key={i}>
                            {l}
                            {i < o.address.length - 1 && <><br /></>}
                          </span>
                        ))}
                      </p>
                    </div>
                    <button className="text-[#13ec1a] text-sm font-medium hover:underline">Adresse bearbeiten</button>
                  </div>
                </div>

                {/* Items */}
                <div className="rounded-xl bg-white dark:bg-background-dark shadow-sm border border-gray-200/80 dark:border-gray-800/80">
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Bestellte Artikel</h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-gray-500">
                        <tr>
                          <th className="px-6 py-3 text-left font-medium">Produkt</th>
                          <th className="px-6 py-3 text-center font-medium">Menge</th>
                          <th className="px-6 py-3 text-right font-medium">Stückpreis</th>
                          <th className="px-6 py-3 text-right font-medium">Gesamt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {o.items.map((it, idx) => (
                          <tr key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-4">
                                <div
                                  className="size-12 flex-shrink-0 bg-cover bg-center rounded-lg"
                                  style={{ backgroundImage: `url('${it.image}')` }}
                                />
                                <div>
                                  <div className="font-medium text-slate-900 dark:text-white">{it.name}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full inline-block">
                                    {it.badge}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">{it.qty}</td>
                            <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">{it.price}</td>
                            <td className="px-6 py-4 text-right font-bold text-slate-800 dark:text-slate-200">
                              {it.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-6 text-right space-y-2 text-sm">
                    <div className="flex justify-end gap-4">
                      <span className="text-gray-600 dark:text-gray-400">Zwischensumme:</span>
                      <span className="w-24 text-slate-800 dark:text-slate-200">{o.subtotal}</span>
                    </div>
                    <div className="flex justify-end gap-4">
                      <span className="text-gray-600 dark:text-gray-400">Lieferung:</span>
                      <span className="w-24 text-slate-800 dark:text-slate-200">{o.shipping}</span>
                    </div>
                    <div className="flex justify-end gap-4">
                      <span className="text-gray-600 dark:text-gray-400">Steuer (7%):</span>
                      <span className="w-24 text-slate-800 dark:text-slate-200">{o.tax}</span>
                    </div>
                    <hr className="ml-auto my-2 w-40 border-gray-200 dark:border-gray-700" />
                    <div className="flex justify-end gap-4 items-center">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Gesamt:</h3>
                      <span className="w-24 text-lg font-bold text-[#13ec1a]">{o.total}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                <div className="rounded-xl bg-white dark:bg-background-dark p-6 shadow-sm border border-gray-200/80 dark:border-gray-800/80">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Bestellverlauf</h3>
                  <div className="relative">
                    <div className="absolute left-2.5 top-2.5 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
                    <ul className="space-y-8">
                      {o.timeline.map((t, i) => (
                        <li key={i} className="relative flex items-start">
                          <div className="absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#13ec1a] ring-4 ring-background-light dark:ring-background-dark">
                            <span className="material-symbols-outlined text-xs text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                              check
                            </span>
                          </div>
                          <div className="pl-10">
                            <p className="font-medium text-sm text-slate-900 dark:text-white">{t.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{t.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-background-dark p-6 shadow-sm border border-gray-200/80 dark:border-gray-800/80">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Aktionen</h3>
                  <div className="flex flex-col gap-3">
                    <button className="h-10 px-4 rounded-lg ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                      Rechnung herunterladen
                    </button>
                    <button className="h-10 px-4 rounded-lg ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">shopping_cart</span>
                      Erneut bestellen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
