"use client";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-6xl px-4 md:px-10">
            {/* TopNavBar */}
            <Navbar />

            <main className="flex flex-col gap-16 md:gap-24">
              {/* HeroSection */}
              <section className="py-16 md:py-24 text-center">
                <div className="flex flex-col items-center gap-6">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter max-w-3xl">
                    Streamline Your Food Supply Chain
                  </h1>
                  <h2 className="text-lg font-normal leading-normal max-w-2xl text-text-light/80 dark:text-text-dark/80">
                    Fresh ingredients, reliable delivery, and competitive pricing for your business. We handle the logistics so you can focus on the food.
                  </h2>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
                    <Link
                      href="#"
                      className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:opacity-90"
                    >
                      Register Your Business
                    </Link>
                    <Link
                      href="#"
                      className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 border border-primary text-primary text-base font-bold tracking-[0.015em] hover:bg-primary/10"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </section>

              {/* FeatureSection */}
              <section className="flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-4 text-center items-center">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-[720px]">
                    Why Partner With Us?
                  </h2>
                  <p className="text-base leading-normal max-w-[720px] text-text-light/80 dark:text-text-dark/80">
                    We are dedicated to providing the highest quality products with the efficiency and reliability your business deserves.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-section-dark p-6 text-center items-center">
                    <span className="material-symbols-outlined text-4xl text-accent-orange">local_florist</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold leading-tight">Quality Sourcing</h3>
                      <p className="text-base leading-normal text-text-light/80 dark:text-text-dark/80">
                        We source only the freshest, highest-quality ingredients from trusted partners.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-section-dark p-6 text-center items-center">
                    <span className="material-symbols-outlined text-4xl text-accent-blue">local_shipping</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold leading-tight">On-Time Delivery</h3>
                      <p className="text-base leading-normal text-text-light/80 dark:text-text-dark/80">
                        Our logistics network ensures your orders arrive on schedule, every time.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-section-dark p-6 text-center items-center">
                    <span className="material-symbols-outlined text-4xl text-primary">sell</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold leading-tight">Competitive Pricing</h3>
                      <p className="text-base leading-normal text-text-light/80 dark:text-text-dark/80">
                        Get the best value for your business with our transparent and competitive pricing models.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section with Cards */}
              <section className="bg-section-light dark:bg-section-dark -mx-4 md:-mx-10 px-4 md:px-10 py-16 md:py-24 rounded-xl">
                <div className="flex flex-col gap-12">
                  {/* Mission Card */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col gap-2 flex-[2_2_0px] text-center md:text-left">
                      <p className="text-sm font-bold uppercase tracking-wider text-accent-blue">OUR MISSION</p>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">Commitment to Quality and Sustainability</h3>
                      <p className="text-base leading-relaxed text-text-light/80 dark:text-text-dark/80 mt-2">
                        Our mission is to empower businesses by providing a seamless supply chain built on quality, partnership, and a commitment to sustainable practices. We believe in fostering growth for our clients through reliable service.
                      </p>
                    </div>

                    <div
                      className="w-full h-64 md:h-auto md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl flex-1"
                      style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuA11Mw2UDJhJjXM9C4v-Ks8pX06Bq6S9psAiu74btxwkVk8w9qdCVBZifCKXs0BMpgTkvEmD8KKSfklm7vd646mVLWYq4zGWpWBHr4wIdFxNzJFDirlM678ih8mQMtFlbcOExYvU94KADeRzmo02_TAJOwrvRYmGkwC-20wOr1FseRSU6r9K6ZlhUk-aiTpnh8MUlEMhBccFIOD5nMKRmNtw0AkzapHve06H8G5SGfPFcKXKCiF4RJzpkGdIaW9YtRoHFZfxhx-S24)' }}
                      aria-label="A clean, modern kitchen with fresh vegetables on a stainless steel counter."
                    />
                  </div>

                  {/* Services Card */}
                  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div
                      className="w-full h-64 md:h-auto md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl flex-1"
                      style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDZJgi3ScDppXy0pad-1mgHSPzSLFPxnwzKfYKs4mpKm4T6cndwSeT3chTUihwvaT-xEVXjCjAumrsGpfuhCRpGtMxm93GAAgj9bgFbmXxM0rr-TGKVeLIaD2Ck0uVBLbECsG8OaKTzxxCunwuFB7IvwwUMItbm3BGpry30Kc_OOA1LoNdxyTYhB1cxVnNU_Z3xXZAKpuLS07NrsDoSCoEmyHUk0OPdvDeb-JRpGgqUWQSwevdXsoQEH2vRSKU-LrMB4Eor2jyuUT0)' }}
                      aria-label="A warehouse aisle with shelves stocked with food products."
                    />
                    <div className="flex flex-col gap-2 flex-[2_2_0px] text-center md:text-left">
                      <p className="text-sm font-bold uppercase tracking-wider text-accent-orange">OUR SERVICES</p>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">Your Dedicated Supply Partner</h3>
                      <p className="text-base leading-relaxed text-text-light/80 dark:text-text-dark/80 mt-2">
                        We offer a comprehensive suite of services including flexible bulk ordering, access to curated product catalogs from top suppliers, and dedicated account management to support your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA Banner */}
              <section className="py-16 md:py-24">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-10 md:p-16 text-center">
                  <div className="flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-2xl">
                      Ready to Simplify Your Supply Chain?
                    </h2>
                    <p className="text-lg leading-normal max-w-2xl text-text-light/80 dark:text-text-dark/80">
                      Join hundreds of businesses who trust FoodSupply Co. for their daily operations. Get started in minutes.
                    </p>
                    <Link
                      href="#"
                      className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:opacity-90 mt-4"
                    >
                      Get Started Today
                    </Link>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
