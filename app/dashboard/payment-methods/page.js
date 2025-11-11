// app/dashboard/payment-methods/page.js
export const metadata = {
    title: "Zahlungsmethoden - CC Culinary",
  };
  
  const stripePending = {
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL7Hnro801G3afQmUEK49V-u6-Zx9HzNav6dyeF1SBGYubA3OWkabXRhH2B_C7CX1yy5ECAkn6-X7lCWnnMnUImal1k-R94opkaORcqQf73xLBGef5kVGaX5vhtiTdHhgwTVYEFdle7lmB4uloDMJKm3p74Wys6y12q3XD7DLIa77mrtYRQzuoEC00RsNTyhe1jkmJQth-jJLTs6njDL65ljs8fW5Xyk9av5kaOM_8MnE_Lw6d4linbwoPf0ekZO_6T0-PhFX8KyM",
    status: { text: "Pending", cls: "text-[#FF9800] bg-[#FF9800]/10" },
    id: "acct_****************",
    date: "15. Juli 2023",
  };
  const stripeConnected = {
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPaTd_U31o8lhR_5rHbNP5fSDo7gm325gkTlaLY-tXQSOSjqi07pMANrVT741eKzZ9myPUDQDH6BwMXHlzDRb8lIMVgGaGZdISJhiUIqWMKHGrQVou5zYJ1QkkZPgMtsLrqW0B7_GLaHQX44ASUUo4JVVbdvmnAHpfPG1R7u_RNYPtcxQt0Lf2W0SaoxSd_1jk2flZO9oSPr1DY3fkwKQI1wkJObK2lA_F73IvjGnaSnOa08laiJ0DFhkFMPmUZqjOwumPhBY8TfE",
    status: { text: "Connected", cls: "text-[#4CAF50] bg-[#4CAF50]/10" },
    id: "acct_****************",
    date: "22. August 2023",
  };
  
  function CardShell({ children }) {
    return (
      <div className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-background-dark p-5 rounded-xl shadow-sm border border-[#E0E0E0] dark:border-[#424242] justify-between">
        {children}
      </div>
    );
  }
  
  export default function PaymentMethodsPage() {
    return (
      <div className="min-h-screen bg-[#f6f8f6] dark:bg-[#102211] font-display">
        {/* Top bar (kısa versiyon – sitede global bar varsa kaldırılabilir) */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 border-b border-[#E0E0E0] dark:border-[#424242] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#4CAF50] text-3xl">restaurant</span>
            <h2 className="text-xl font-bold">CC Culinary</h2>
          </div>
          <div className="hidden md:flex max-w-64 w-full">
            <label className="relative w-full h-10">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757575]">search</span>
              <input
                className="h-10 w-full rounded-lg pl-10 pr-4 bg-black/5 dark:bg-white/5 border-0"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 w-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
            <div
              className="size-10 rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFVHcwtwSlOl02A4KeU8l9fN5u4xMtsql8UBe-4wgCf5DSNO5_byegv-A4q0G6CeQG28J5CMQ_19xPlh5Pev4EN584RAIdOyHYWm-lPgGpJkYGsBhc_IsgWd3XHRi3tBLtSU-wNH608x72Eb_qhOPU8NheXzIYYYqqdDDd8j2csD8Ba3Xu_51VJPsh-pvAGeAoaj3z3Acp7Fnxaj_aa4vZxgO1cSy1WeYOlLg-nu7LVc64m9KAK6bh90tZF9lMtzPgHTrMvY53Q5w")',
              }}
              aria-label="User avatar"
            />
          </div>
        </header>
  
        <main className="p-8">
          <div className="mx-auto max-w-[1200px]">
            {/* Heading */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h1 className="text-4xl font-bold">Zahlungsmethoden</h1>
              <button className="h-11 px-6 rounded-lg bg-[#4CAF50] text-white text-sm font-bold hover:bg-[#4CAF50]/90">
                <span className="material-symbols-outlined align-[-4px] mr-2">add</span>
                Zahlungsmethode hinzufügen
              </button>
            </div>
  
            {/* Info banner */}
            <div className="flex items-center gap-4 p-4 mb-8 rounded-lg border border-[#2196F3]/50 bg-[#2196F3]/10 text-[#2196F3]">
              <span className="material-symbols-outlined text-3xl">info</span>
              <p className="flex-1 font-medium">
                Connect Stripe to accept online payments for your orders.
              </p>
              <button className="h-10 px-5 rounded-lg bg-white text-[#2196F3] border border-[#2196F3]/50 font-bold hover:bg-[#2196F3]/5">
                Connect Stripe
              </button>
            </div>
  
            <h2 className="text-[22px] font-bold pb-4 pt-2 border-b border-[#E0E0E0] dark:border-[#424242]">
              Aktuelle Zahlungsmethoden
            </h2>
  
            <div className="mt-6 flex flex-col gap-6">
              {/* Bank account */}
              <CardShell>
                <div className="flex items-start gap-5">
                  <div className="size-12 rounded-lg bg-[#2196F3]/10 flex items-center justify-center text-[#2196F3]">
                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold">Geschäftsbankkonto</p>
                      <span className="text-xs font-bold text-[#4CAF50] bg-[#4CAF50]/10 px-2.5 py-1 rounded-full">
                        Primary
                      </span>
                    </div>
                    <p className="text-sm text-[#757575]">Kontoinhaber: Max Mustermann</p>
                    <p className="text-sm text-[#757575]">
                      IBAN: DE89 **** **** **** **00 | BIC: COBADEFFXXX
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-start sm:self-center">
                  <button className="text-sm text-[#757575] hover:text-black">Bearbeiten</button>
                  <button className="text-sm text-[#F44336] hover:text-[#F44336]/80">
                    Entfernen
                  </button>
                </div>
              </CardShell>
  
              {/* Stripe – Pending */}
              <CardShell>
                <div className="flex items-start gap-5">
                  <img src={stripePending.logo} alt="Stripe" className="h-8 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold">Verbundenes Stripe-Konto</p>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stripePending.status.cls}`}>
                        {stripePending.status.text}
                      </span>
                    </div>
                    <p className="text-sm text-[#757575]">Konto-ID: {stripePending.id}</p>
                    <p className="text-sm text-[#757575]">Verbindungsdatum: {stripePending.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-start sm:self-center">
                  <button className="text-sm text-[#757575] hover:text-black">In Stripe verwalten</button>
                  <button className="text-sm text-[#F44336] hover:text-[#F44336]/80">
                    Verbindung trennen
                  </button>
                </div>
              </CardShell>
  
              {/* Stripe – Connected */}
              <CardShell>
                <div className="flex items-start gap-5">
                  <img src={stripeConnected.logo} alt="Stripe" className="h-8 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold">Verbundenes Stripe-Konto</p>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stripeConnected.status.cls}`}>
                        {stripeConnected.status.text}
                      </span>
                    </div>
                    <p className="text-sm text-[#757575]">Konto-ID: {stripeConnected.id}</p>
                    <p className="text-sm text-[#757575]">Verbindungsdatum: {stripeConnected.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-start sm:self-center">
                  <button className="text-sm text-[#757575] hover:text-black">In Stripe verwalten</button>
                  <button className="text-sm text-[#F44336] hover:text-[#F44336]/80">
                    Verbindung trennen
                  </button>
                </div>
              </CardShell>
            </div>
          </div>
        </main>
      </div>
    );
  }
  