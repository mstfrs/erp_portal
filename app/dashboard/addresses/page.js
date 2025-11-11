// app/dashboard/addresses/page.js
import Link from "next/link";

export const metadata = {
  title: "Meine Adressen - CC Culinary",
};

const addresses = [
  {
    id: "addr-1",
    label: "Hauptrestaurant",
    lines: ["Musterstraße 123", "Etage 4, App. 4B", "12345 Berlin", "Deutschland"],
    phone: "+49 123 456 7890",
    badge: { text: "Default", color: "primary" },
    isDefault: true,
  },
  {
    id: "addr-2",
    label: "Lagerhalle",
    lines: ["Industrieweg 45", "Gebäude C", "67890 Hamburg", "Deutschland"],
    phone: "+49 987 654 3210",
    badge: { text: "Billing", color: "info" },
    isDefault: false,
  },
];

function Badge({ text, color = "primary" }) {
  const map = {
    primary: "bg-primary/10 text-primary",
    info: "bg-info/10 text-info",
  };
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${map[color]}`}>
      {text}
    </span>
  );
}

function AddressCard({ address }) {
  return (
    <div className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="text-base font-semibold">{address.label}</h3>
        {address.badge && <Badge text={address.badge.text} color={address.badge.color} />}
      </div>

      <div className="mt-4 flex-grow text-sm text-text-secondary-light dark:text-text-secondary-dark">
        {address.lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
        <p className="mt-2 font-medium text-text-primary-light dark:text-text-primary-dark">
          {address.phone}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="h-9 rounded-lg px-3 text-sm font-bold text-text-secondary-light hover:bg-primary/10 dark:text-text-secondary-dark dark:hover:bg-primary/20">
            Edit
          </button>
          <button className="h-9 rounded-lg px-3 text-sm font-bold text-[#F44336] hover:bg-[#F44336]/10">
            Delete
          </button>
        </div>

        {!address.isDefault && (
          <button className="text-sm font-bold text-primary hover:underline">Set as Default</button>
        )}
      </div>
    </div>
  );
}

export default function AddressesPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Top bar (kısa) */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-4 md:px-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">restaurant_menu</span>
          <h2 className="text-lg font-bold">CC Culinary</h2>
        </div>

        <div className="hidden md:flex max-w-64 w-full">
          <label className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
              search
            </span>
            <input
              placeholder="Search"
              className="form-input w-full h-10 rounded-lg pl-10 pr-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary/50"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 w-10 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-text-secondary-light dark:text-text-secondary-dark flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="h-10 w-10 rounded-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl-HQZXXn2tFsyrK01ZfdKotLnLkdv_rbgOXSp1zYXjh5rS5tB3J0Lcupgx0obb1y7Xc_mvEqX3fblCpokryOgQLHZEfQd42SLHZvCYM-8bHhJpnVXc9SyoCoQ-RUN-y_HN8jP_rbUNeYgJHjTkP_H7MqgFn0EDt9rDfZvFTfkc14tFBMbiiIb2FpKaHp2mkDQIROru9SuY_PgutagPBfAsrjXdVlcuQdCDDC_GQBWtUbrMcnA4NUWL1ALfJ86cU3OI2lzH8YySbg")',
            }}
            aria-label="User avatar"
          />
        </div>
      </header>

      <div className="mx-auto max-w-7xl p-4 md:p-8">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-black tracking-[-0.033em]">Meine Adressen</h1>
          <button className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90">
            <span className="material-symbols-outlined text-lg">add</span>
            Add New Address
          </button>
        </div>

        {/* Tabs (statik) */}
        <div className="mt-6 pb-3">
          <div className="flex gap-8 border-b border-border-light dark:border-border-dark">
            <button className="border-b-[3px] border-primary pb-[13px] pt-4 text-sm font-bold text-primary">
              Lieferadressen
            </button>
            <button className="border-b-[3px] border-transparent pb-[13px] pt-4 text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark">
              Rechnungsadressen
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {addresses.map((a) => (
            <AddressCard key={a.id} address={a} />
          ))}

          {/* Add new address tile */}
          <button className="group flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-5 text-center transition-colors hover:border-primary">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">add</span>
            </div>
            <h3 className="text-base font-semibold">Add New Address</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Add delivery or billing address
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
