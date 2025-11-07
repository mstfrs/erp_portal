import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark mt-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="size-5 text-primary">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-primary">CC Culinary</h2>
          </div>
          <p className="text-sm text-text-light/70 dark:text-text-dark/70">© 2024 FoodSupply Co. All Rights Reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm">
          <Link className="font-medium hover:text-primary transition-colors" href="#">About Us</Link>
          <Link className="font-medium hover:text-primary transition-colors" href="#">Services</Link>
          <Link className="font-medium hover:text-primary transition-colors" href="#">Privacy Policy</Link>
          <Link className="font-medium hover:text-primary transition-colors" href="#">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
