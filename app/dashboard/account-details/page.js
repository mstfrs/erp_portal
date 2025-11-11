// app/dashboard/account-details/page.js
export const metadata = {
    title: "Kontodetails - CC Culinary",
  };
  
  export default function AccountDetailsPage() {
    return (
      <div className="font-display bg-[#FAFAFA] dark:bg-[#121212] text-[#333] dark:text-[#E0E0E0] min-h-screen">
        {/* Topbar (projede global header varsa kaldırabilirsiniz) */}
        <header className="sticky top-0 z-20 h-16 flex items-center justify-between border-b border-[#F5F5F5] dark:border-[#333] bg-white dark:bg-[#1E1E1E] px-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#4CAF50] text-3xl">local_dining</span>
            <h1 className="text-xl font-bold">CC Culinary</h1>
          </div>
          <div className="flex items-center gap-4">
            <label className="relative w-72 hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757575]">search</span>
              <input
                className="w-full h-10 rounded-lg pl-10 pr-4 border border-[#F5F5F5] dark:border-[#333] bg-[#FAFAFA] dark:bg-[#121212] focus:border-[#4CAF50] focus:ring-[#4CAF50]"
                placeholder="Suchen..."
                type="search"
              />
            </label>
            <button className="h-10 w-10 rounded-full hover:bg-[#FAFAFA] dark:hover:bg-[#121212]">
              <span className="material-symbols-outlined text-[#757575]">notifications</span>
            </button>
            <div
              className="h-9 w-9 rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD5_z6gZZuY67hPEWs3MUtmRVRb98pshLfLng7z9g6oC3zS6vipB4LDIyWlfoz902YQYKRB4-tBWEcMDPM-tEgIm8GivOJ7okFhS6mEJBn-yy7N0y0x9GCEbANPYVHtTaDFdypQuKzS79CscQKbwROfVheKW-OBrfLTqpaebVtz0J63g4zBM8-lmbeCtsLII4UUPlQqRyT6ghor3uA6_OH93sEfFGpEAry6p9QvgX3XWUxg_PVbVUJK5K9peplAN_ckOxOc6hb5Qw")',
              }}
              aria-label="User avatar"
            />
          </div>
        </header>
  
        <div className="flex">
          {/* Sidebar (kısa mock) */}
          <aside className="sticky top-16 h-[calc(100vh-64px)] w-[260px] hidden lg:block border-r border-[#F5F5F5] dark:border-[#333] bg-white dark:bg-[#1E1E1E] p-4">
            <nav className="flex flex-col gap-2">
              <a className="px-3 py-2.5 rounded-lg text-sm text-[#757575] hover:bg-[#FAFAFA] dark:hover:bg-[#121212] flex items-center gap-3">
                <span className="material-symbols-outlined">dashboard</span>Dashboard
              </a>
              <a className="px-3 py-2.5 rounded-lg text-sm text-[#757575] hover:bg-[#FAFAFA] dark:hover:bg-[#121212] flex items-center gap-3">
                <span className="material-symbols-outlined">shopping_cart</span>Bestellungen
              </a>
              <a className="px-3 py-2.5 rounded-lg text-sm text-[#757575] hover:bg-[#FAFAFA] dark:hover:bg-[#121212] flex items-center gap-3">
                <span className="material-symbols-outlined">restaurant_menu</span>Produkte
              </a>
              <a className="px-3 py-2.5 rounded-lg text-sm text-[#757575] hover:bg-[#FAFAFA] dark:hover:bg-[#121212] flex items-center gap-3">
                <span className="material-symbols-outlined">bar_chart</span>Analysen
              </a>
              <a className="relative px-3 py-2.5 rounded-lg bg-[#F1F8E9] text-[#4CAF50] dark:bg-[#4CAF50]/20 flex items-center gap-3">
                <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#4CAF50]" />
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  person
                </span>
                Kontodetails
              </a>
            </nav>
          </aside>
  
          {/* Content */}
          <main className="w-full lg:ml-0 flex-1 p-6">
            <div className="max-w-[900px] mx-auto flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-black">Kontodetails</h1>
                <p className="text-sm text-[#757575]">Zuletzt aktualisiert: vor 2 Stunden</p>
              </div>
  
              {/* KART 1 – Personal */}
              <section className="rounded-xl border border-[#F5F5F5] dark:border-[#333] bg-white dark:bg-[#1E1E1E] shadow-sm">
                <header className="p-6 border-b border-[#F5F5F5] dark:border-[#333]">
                  <h3 className="text-xl font-bold">Persönliche Informationen</h3>
                </header>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Vorname *" defaultValue="Max" />
                  <Field label="Nachname *" defaultValue="Mustermann" />
                  <Field type="email" label="E-Mail-Adresse *" defaultValue="max.mustermann@pizzapalace.de" />
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Telefonnummer *</span>
                    <div className="flex">
                      <select className="form-select rounded-l-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-[#4CAF50] focus:ring-[#4CAF50]">
                        <option>+49</option><option>+41</option><option>+43</option>
                      </select>
                      <input className="form-input w-full rounded-r-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-[#4CAF50] focus:ring-[#4CAF50]" defaultValue="176 12345678" />
                    </div>
                  </div>
                  <Field className="md:col-span-2" type="date" label="Geburtsdatum *" defaultValue="1985-06-15" />
                </div>
                <FooterActions />
              </section>
  
              {/* KART 2 – Company */}
              <section className="rounded-xl border border-[#F5F5F5] dark:border-[#333] bg-white dark:bg-[#1E1E1E] shadow-sm">
                <header className="p-6 border-b border-[#F5F5F5] dark:border-[#333]">
                  <h3 className="text-xl font-bold">Unternehmensinformationen</h3>
                </header>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Firmenname *" defaultValue="Pizza Palace GmbH" />
                  <Select label="Unternehmenstyp *" options={["GmbH", "AG", "Einzelunternehmen"]} />
                  <Field label="Steuernummer *" defaultValue="143/555/12345" />
                  <Field label="USt-IdNr. *" defaultValue="DE123456789" />
                  <Field label="Straße & Hausnummer *" defaultValue="Hauptstraße 10" />
                  <Field label="Wohnung/Suite" placeholder="Optional" />
                  <Field label="Stadt *" defaultValue="München" />
                  <Field label="Postleitzahl *" defaultValue="80331" />
                  <Select className="md:col-span-2" label="Land *" options={["Deutschland", "Österreich", "Schweiz"]} />
                </div>
                <FooterActions />
              </section>
  
              {/* KART 3 – Security */}
              <section className="rounded-xl border border-[#F5F5F5] dark:border-[#333] bg-white dark:bg-[#1E1E1E] shadow-sm">
                <header className="p-6 border-b border-[#F5F5F5] dark:border-[#333]">
                  <h3 className="text-xl font-bold">Passwort &amp; Sicherheit</h3>
                </header>
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Aktuelles Passwort</p>
                      <p className="text-lg">••••••••</p>
                    </div>
                    <button className="font-semibold text-[#4CAF50]">Passwort ändern</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Zwei-Faktor-Authentifizierung</p>
                      <p className="text-[#757575]">Fügen Sie eine zusätzliche Sicherheitsebene hinzu.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:border after:border-gray-300 after:transition-all peer-checked:bg-[#4CAF50] peer-checked:after:translate-x-full peer-checked:after:border-white" />
                    </label>
                  </div>
                </div>
              </section>
  
              {/* KART 4 – Notifications */}
              <section className="rounded-xl border border-[#F5F5F5] dark:border-[#333] bg-white dark:bg-[#1E1E1E] shadow-sm">
                <header className="p-6 border-b border-[#F5F5F5] dark:border-[#333]">
                  <h3 className="text-xl font-bold">Benachrichtigungseinstellungen</h3>
                </header>
                <div className="p-6 flex flex-col gap-4">
                  {[
                    ["E-Mail bei neuen Bestellungen", true],
                    ["E-Mail über Werbeaktionen", false],
                    ["E-Mail zu Konto-Updates", true],
                    ["SMS-Benachrichtigungen für Lieferungen", false],
                  ].map(([label, checked], i) => (
                    <label key={i} className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked={checked} className="form-checkbox h-5 w-5 rounded text-[#4CAF50] focus:ring-[#4CAF50]" />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                <div className="p-6 border-t border-[#F5F5F5] dark:border-[#333] flex justify-end">
                  <button className="rounded-lg bg-[#4CAF50] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4CAF50]/90">
                    Einstellungen speichern
                  </button>
                </div>
              </section>
  
              {/* Danger zone */}
              <section className="rounded-xl border border-[#D32F2F] bg-white dark:bg-[#1E1E1E] shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#D32F2F]">Gefahrenzone</h3>
                  <p className="mt-2 text-sm text-[#757575]">
                    Löschen Sie Ihr Konto und alle damit verbundenen Daten dauerhaft. Diese Aktion kann nicht rückgängig gemacht werden.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button className="rounded-lg border border-[#D32F2F] px-4 py-2 text-sm font-semibold text-[#D32F2F] hover:bg-[#D32F2F]/10">
                      Konto löschen
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
  
  /* ——— helpers ——— */
  function Field({ label, type = "text", defaultValue = "", placeholder = "", className = "" }) {
    return (
      <label className={`flex flex-col gap-2 ${className}`}>
        <span className="text-sm font-medium">{label}</span>
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="form-input rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-[#4CAF50] focus:ring-[#4CAF50]"
        />
      </label>
    );
  }
  
  function Select({ label, options = [], className = "" }) {
    return (
      <label className={`flex flex-col gap-2 ${className}`}>
        <span className="text-sm font-medium">{label}</span>
        <select className="form-select rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-[#4CAF50] focus:ring-[#4CAF50]">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
    );
  }
  
  function FooterActions() {
    return (
      <div className="p-6 border-t border-[#F5F5F5] dark:border-[#333] flex justify-end gap-3">
        <button className="rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700">Abbrechen</button>
        <button className="rounded-lg bg-[#4CAF50] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4CAF50]/90">
          Änderungen speichern
        </button>
      </div>
    );
  }
  