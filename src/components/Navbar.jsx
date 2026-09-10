import { useState } from 'react';

const navigation = [
  { href: '#hero', label: 'Beranda' },
  { href: '#produk', label: 'Produk' },
  { href: '#testimoni', label: 'Testimoni' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex shrink-0 items-center gap-2" onClick={closeMenu}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand shadow-sm">
              <img src="/fish-logo.svg" alt="" className="h-6 w-6" />
            </span>
            <span className="font-bold text-2xl text-brand-dark">IkanKuning<span className="text-brand">.id</span></span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-gray-700 transition hover:text-brand">
                {item.label}
              </a>
            ))}
            <a href="#pesan" className="rounded-md bg-brand px-4 py-2 font-medium text-white transition hover:bg-brand-dark">
              Pesan Sekarang
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-dark transition hover:bg-brand/10 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 lg:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`${isMenuOpen ? 'grid-rows-[1fr] border-t border-gray-100' : 'grid-rows-[0fr]'} grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 lg:hidden`}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 font-medium text-gray-700 transition hover:bg-brand/10 hover:text-brand"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href="#pesan" className="mt-2 rounded-md bg-brand px-4 py-3 text-center font-medium text-white transition hover:bg-brand-dark" onClick={closeMenu}>
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
