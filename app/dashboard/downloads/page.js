// app/dashboard/downloads/page.js
export const metadata = { title: "Downloads - CC Culinary" };

// --- Mock Data ---
const user = {
  name: "Restaurant Adler",
  email: "adler@email.com",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAIc1lEIiTwxn5bzZxeYJk4LrOvEJoS2lVw29fGZQ9VDtQ1Q9NXJlS7ICS0VGMH0Qq72tfJKMzFzbsjhNwQw8gKlov58W_Kc9GY7ByEey2vx99EWrKg4tQ2iZ0PclAm_vV-SzzPe-GZ3BjfsTD5l_hP22CSLpRh9s4a6Q4aGHQ-Ntx_NdDfQNpzheSeu10i9pVj_42hNgu89N47amPiPcNiYnAya3S1CfZFkZ8X8KgHerOry75U36N1aYbd6cVgoFsmGVmxHqNG1-k",
};

const nav = [
  { key: "dashboard", icon: "dashboard", label: "Dashboard" },
  { key: "orders", icon: "shopping_cart", label: "Bestellungen" },
  { key: "products", icon: "list_alt", label: "Produkte" },
  { key: "downloads", icon: "cloud_download", label: "Downloads", active: true },
  { key: "settings", icon: "settings", label: "Einstellungen" },
];

const docs = [
  {
    id: 1,
    name: "Rechnung_Oktober_2025.pdf",
    type: "Rechnung",
    typeStyle: "bg-[#E3F2FD] text-[#1565C0]",
    date: "15. Nov. 2025",
    size: "2,3 MB",
    icon: { name: "picture_as_pdf", class: "text-[#D32F2F]" },
  },
  {
    id: 2,
    name: "Liefervertrag_2025.pdf",
    type: "Vertrag",
    typeStyle: "bg-[#E8F5E9] text-[#2E7D32]",
    date: "11. Nov. 2025",
    size: "1.1 MB",
    icon: { name: "picture_as_pdf", class: "text-[#D32F2F]" },
  },
  {
    id: 3,
    name: "Hygienezertifikat_Q4.pdf",
    type: "Zertifikat",
    typeStyle: "bg-[#F3E5F5] text-[#6A1B9A]",
    date: "28. Okt. 2025",
    size: "5.6 MB",
    icon: { name: "picture_as_pdf", class: "text-[#D32F2F]" },
  },
  {
    id: 4,
    name: "Rechnung_September_2025.zip",
    type: "Rechnung",
    typeStyle: "bg-[#E3F2FD] text-[#1565C0]",
    date: "15. Okt. 2025",
    size: "15.2 MB",
    icon: { name: "folder_zip", class: "text-[#1976D2]" },
  },
  {
    id: 5,
    name: "Beleg_Tageskasse.pdf",
    type: "Beleg",
    typeStyle: "bg-[#FFF3E0] text-[#E65100]",
    date: "01. Jan. 2025",
    size: "0.8 MB",
    icon: { name: "picture_as_pdf", class: "text-[#D32F2F]" },
  },
];

// --- Page ---
export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-[#f6f8f6] dark:bg-[#102211] font-display text-[#212121] dark:text-white">
      {/* Top bar (compact; optional) */}
      <header className="sticky top-0 z-30 h-16 border-b border-gray-200/70 dark:border-gray-700/70 bg-[#f6f8f6]/80 dark:bg-[#102211]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] h-full px-4 md:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-[#13ec1a]">
              <svg viewBox="0 0 48 48" className="w-6 h-6" fill="currentColor">
                <path d="M42.17 20.17 27.83 5.83c1.31 1.31.57 4.36-1.63 7.94-1.35 2.19-3.24 4.58-5.55 6.9-2.31 2.31-4.7 4.2-6.9 5.55-3.58 2.2-6.63 2.94-7.94 1.63L20.17 42.17c1.31 1.31 4.36.57 7.94-1.63 2.19-1.35 4.58-3.24 6.9-5.55 2.31-2.31 4.2-4.7 5.55-6.9 2.2-3.58 2.94-6.63 1.63-7.94z" />
                <path d="M29.24 4.41 43.59 18.76c1.39 1.39 1.39 3.36 1.05 4.96-.36 1.7-1.22 3.6-2.39 5.57-1.44 2.35-3.44 4.86-5.84 7.25-2.41 2.41-4.9 4.41-7.25 5.84-1.97 1.17-3.87 2.03-5.57 2.39-1.6.34-3.57.34-4.96-1.05L4.41 29.24c-1.12-1.12-1.33-2.64-1.2-3.98.13-1.34.62-2.8 1.32-4.25C6 18.09 8.43 14.74 11.59 11.59 14.74 8.43 18.09 6 21.03 4.54c1.45-.7 2.91-1.19 4.25-1.32 1.34-.13 2.86.08 3.96 1.2z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">CC Culinary</h2>
          </div>

          {/* Search */}
          <label className="hidden md:flex min-w-40 w-full max-w-md">
            <div className="flex w-full items-stretch h-10 rounded-lg">
              <div className="flex items-center justify-center pl-3 rounded-l-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <span className="material-symbols-outlined text-[20px] text-gray-500 dark:text-gray-400">
                  search
                </span>
              </div>
              <input
                placeholder="Search"
                className="form-input w-full h-full rounded-r-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 focus:outline-0 focus:ring-2 focus:ring-[#13ec1a]/40"
              />
            </div>
          </label>

          <div className="flex items-center gap-3">
            <button className="size-10 rounded-full grid place-items-center bg-gray-100 dark:bg-gray-800">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
            </button>
            <div
              className="size-10 rounded-full bg-center bg-cover"
              style={{ backgroundImage: `url(${user.avatar})` }}
              aria-label="User avatar"
            />
          </div>
        </div>
      </header>

      {/* Body with Sidebar + Content */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 py-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-[260px] shrink-0 sticky top-20 self-start hidden lg:block">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-[#f6f8f6] dark:bg-[#102211]">
            <div className="p-4 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
              <div
                className="size-10 rounded-full bg-center bg-cover"
                style={{ backgroundImage: `url(${user.avatar})` }}
              />
              <div className="min-w-0">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-[#757575] truncate">{user.email}</p>
              </div>
            </div>
            <nav className="p-2 flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.key}
                  className={[
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    n.active
                      ? "bg-[#F1F8E9] text-[#33691E] border-l-4 border-[#13ec1a]"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800",
                  ].join(" ")}
                  href="#"
                >
                  <span
                    className={[
                      "material-symbols-outlined text-[22px]",
                      n.active ? "text-[#13ec1a]" : "text-gray-600 dark:text-gray-400",
                    ].join(" ")}
                  >
                    {n.icon}
                  </span>
                  <span className={n.active ? "font-bold" : "font-medium text-sm"}>
                    {n.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-black tracking-tight">Downloads</h1>
            <button className="h-10 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium inline-flex items-center gap-2">
              <span>All Time</span>
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <div className="flex gap-8">
              <Tab active>Rechnungen</Tab>
              <Tab>Verträge</Tab>
              <Tab>Zertifikate</Tab>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <Th>Document</Th>
                  <Th>Type</Th>
                  <Th>Date</Th>
                  <Th>Size</Th>
                  <Th align="right">Actions</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {docs.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                    <Td>
                      <div className="flex items-center gap-3">
                        <span
                          className={`material-symbols-outlined text-[24px] ${d.icon.class}`}
                        >
                          {d.icon.name}
                        </span>
                        <span className="font-medium">{d.name}</span>
                      </div>
                    </Td>
                    <Td>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${d.typeStyle}`}
                      >
                        {d.type}
                      </span>
                    </Td>
                    <Td className="text-[#757575] text-sm">{d.date}</Td>
                    <Td className="text-[#757575] text-sm">{d.size}</Td>
                    <Td align="right">
                      <div className="flex justify-end gap-4">
                        <IconButton title="Ansehen">visibility</IconButton>
                        <IconButton title="Herunterladen">download</IconButton>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer + Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-[#757575]">
              Showing <span className="font-medium">1</span>-<span className="font-medium">5</span>{" "}
              of <span className="font-medium">23</span>
            </p>
            <div className="flex items-center gap-2">
              <PagerBtn>
                <span className="material-symbols-outlined">chevron_left</span>
              </PagerBtn>
              <PagerBtn active>1</PagerBtn>
              <PagerBtn>2</PagerBtn>
              <PagerBtn>3</PagerBtn>
              <PagerBtn>
                <span className="material-symbols-outlined">chevron_right</span>
              </PagerBtn>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Small UI helpers ---
function Tab({ active, children }) {
  return (
    <a
      href="#"
      className={[
        "pb-3 pt-1 border-b-[3px] text-sm font-bold",
        active
          ? "border-[#13ec1a] text-[#212121] dark:text-white"
          : "border-transparent text-[#757575] hover:text-[#212121] dark:hover:text-white",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function Th({ children, align = "left" }) {
  return (
    <th
      className={[
        "px-6 py-4 text-sm font-medium text-[#212121] dark:text-gray-300",
        align === "right" ? "text-right" : "text-left",
      ].join(" ")}
    >
      {children}
    </th>
  );
}

function Td({ children, align = "left", className = "" }) {
  return (
    <td
      className={[
        "px-6 py-4 whitespace-nowrap align-middle",
        align === "right" ? "text-right" : "text-left",
        className,
      ].join(" ")}
    >
      {children}
    </td>
  );
}

function IconButton({ title, children }) {
  return (
    <button
      title={title}
      className="text-[#33691E] dark:text-[#13ec1a] hover:opacity-80"
    >
      <span className="material-symbols-outlined">{children}</span>
    </button>
  );
}

function PagerBtn({ active, children }) {
  return (
    <button
      className={[
        "h-9 w-9 rounded border text-sm font-medium grid place-items-center",
        active
          ? "border-[#13ec1a] bg-[#13ec1a]/20 text-[#13ec1a]"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#757575] hover:bg-gray-50 dark:hover:bg-gray-700",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
