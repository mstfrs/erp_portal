// app/dashboard/orders/page.js
import Link from "next/link";

export const metadata = {
  title: "Meine Bestellungen – CC Culinary",
};

const filters = ["Alle", "Ausstehend", "Bestätigt", "Geliefert", "Storniert"];

const orders = [
  {
    id: "CC-12345",
    date: "15. Oktober 2023",
    address: "Musterstraße 1, 10115 Berlin",
    items: 5,
    total: "450,75 €",
    status: "Geliefert",
  },
  {
    id: "CC-12344",
    date: "14. Oktober 2023",
    address: "Hauptplatz 12, 8010 Graz",
    items: 3,
    total: "199,50 €",
    status: "Ausstehend",
  },
  {
    id: "CC-12342",
    date: "12. Oktober 2023",
    address: "Musterstraße 1, 10115 Berlin",
    items: 12,
    total: "875,00 €",
    status: "Bestätigt",
  },
  {
    id: "CC-12340",
    date: "10. Oktober 2023",
    address: "Bahnhofstrasse 21, 8001 Zürich",
    items: 1,
    total: "55,20 €",
    status: "Storniert",
  },
];

function statusBadges(status) {
  if (status === "Geliefert")
    return "bg-status-delivered/20 text-status-delivered";
  if (status === "Bestätigt")
    return "bg-status-confirmed/20 text-status-confirmed";
  if (status === "Ausstehend")
    return "bg-status-pending/20 text-status-pending";
  if (status === "Storniert")
    return "bg-status-cancelled/20 text-status-cancelled";
  return "bg-gray-200 text-gray-700";
}

export default function OrdersDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display flex min-h-screen w-full flex-col">
      {/* Top bar (basit) */}
      <header className="sticky top-0 z-30 flex h-[72px] w-full items-center justify-between border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-text-primary-light dark:text-text-primary-dark">
            <span className="material-symbols-outlined text-primary text-3xl">local_dining</span>
            <h2 className="text-xl font-bold tracking-tight">CC Culinary</h2>
          </div>
        </div>

        <div className="flex-1 max-w-lg">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary-light dark:text-text-secondary-dark">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input
              type="text"
              placeholder="Suchen..."
              className="block w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 pl-10 pr-3 text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </label>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcidjPmj0uQwYEPUjgnDHwFCBzMVYhE7jimnLDC446TOPJZcIm8ImbB1XuN_moDFvnZI_DUeYYoPsvYQE3FsjigA_0brA9YeQPSJvCg7wkkm_aStfqaW7xPDaByzx1vsE5HiDlV4OVfLJIN4jU3_oUpTXQ_bfVADzCbOzQWcYt8b-VsLlsb9qnVqtGhaSwQM2f0Xvq540YI4UaqCGn_qQJJYOysqf-JOYJ-Brg_exm-UZWA3tF201-gcOTYULtN_rwWolt1ODJsFU")',
            }}
            aria-label="User avatar"
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sol yan menü (sade) */}
        <aside className="sticky top-[72px] h-[calc(100vh-72px)] w-[260px] flex-shrink-0 border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark transition-colors"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium">Dashboard</p>
              </Link>

              <div className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary border-l-4 border-primary">
                <span className="material-symbols-outlined font-bold">receipt_long</span>
                <p className="text-sm font-bold">Bestellungen</p>
              </div>

              <Link
                href="/products"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark transition-colors"
              >
                <span className="material-symbols-outlined">inventory_2</span>
                <p className="text-sm font-medium">Produkte</p>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark transition-colors"
              >
                <span className="material-symbols-outlined">request_quote</span>
                <p className="text-sm font-medium">Rechnungen</p>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 text-text-primary-light dark:text-text-primary-dark transition-colors"
              >
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium">Einstellungen</p>
              </Link>
            </div>
          </div>
        </aside>

        {/* İçerik */}
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-[1200px] p-6 lg:p-8">
            {/* Başlık ve filtreler */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-4xl font-black text-text-primary-light dark:text-text-primary-dark">
                Meine Bestellungen
              </h1>

              <div className="flex items-center gap-3 flex-wrap">
                <button className="flex h-10 items-center gap-x-2 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4 text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-white/5">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  <span className="text-sm font-medium">Alle Bestellungen</span>
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
                <button className="flex h-10 items-center gap-x-2 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4 text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-white/5">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  <span className="text-sm font-medium">1. Okt 2023 - 31. Okt 2023</span>
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
              </div>
            </div>

            {/* Sekmeler */}
            <div className="sticky top-0 z-20 mt-6 bg-background-light dark:bg-background-dark pt-2 pb-1">
              <div className="border-b border-border-light dark:border-border-dark">
                <div className="flex gap-8">
                  {filters.map((f, i) => (
                    <a
                      key={f}
                      href="#"
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
                        i === 0
                          ? "border-b-primary"
                          : "border-b-transparent hover:text-primary"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          i === 0
                            ? "font-bold text-primary"
                            : "font-medium text-text-secondary-light dark:text-text-secondary-dark"
                        }`}
                      >
                        {f}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sipariş listesi */}
            <div className="mt-6 flex flex-col gap-4">
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark">
                        Bestellung #{o.id}
                      </p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{o.date}</p>
                    </div>
                    <div
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusBadges(
                        o.status
                      )}`}
                    >
                      {o.status}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-text-secondary-light dark:text-text-secondary-dark">
                          location_on
                        </span>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          {o.address}
                        </p>
                      </div>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        {o.items} Artikel
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                        {o.total}
                      </p>
                      <Link
                        href={`/orders/${o.id}`}
                        className="h-9 rounded-lg px-4 text-sm font-bold text-primary hover:bg-primary/10"
                      >
                        Details anzeigen
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sayfalama */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Zeige 1-10 von 45 Bestellungen
              </p>
              <div className="flex items-center gap-2">
                <button
                  disabled
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-primary/10">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-primary/10">
                  3
                </button>
                <span className="text-text-secondary-light dark:text-text-secondary-dark">...</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-primary/10">
                  5
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-white/5">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
