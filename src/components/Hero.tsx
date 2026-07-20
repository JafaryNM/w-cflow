"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Timeline", href: "#timeline" },
  { label: "The Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative isolate overflow-hidden bg-cflow-green text-white">
      {/* Decorative background: wave / topographic motif in brand colors (placeholder
          for a field photo — see brief section 9, photos still pending). */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(20,67,47,0.9),rgba(13,43,31,1)_55%)]" />
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            fill="#ffffff"
            d="M0,224 C240,288 480,160 720,192 C960,224 1200,288 1440,224 L1440,320 L0,320 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            fill="#ffcc00"
            d="M0,256 C320,192 420,288 720,256 C1020,224 1120,160 1440,256 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Top utility bar */}
      <div className="relative z-10 border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-white/80">
          <span className="hidden sm:inline">Pangani River Basin, North Tanzania</span>
          <div className="flex items-center gap-4">
            <span>Funded by National Geographic Society</span>
            <a
              href="https://instagram.com/cflowproject"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/90 transition-colors hover:text-cflow-yellow"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2-.01 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56-.01-4.81-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.61-.07-4.81 0-3.19.01-3.56.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.44 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.51.01-4.74.07-2.35.1-3.44 1.22-3.55 3.55-.05 1.23-.06 1.6-.06 4.74s.01 3.51.06 4.74c.11 2.33 1.2 3.45 3.55 3.55 1.23.05 1.6.07 4.74.07s3.51-.02 4.74-.07c2.34-.1 3.45-1.22 3.55-3.55.05-1.23.06-1.6.06-4.74s-.01-3.51-.06-4.74c-.1-2.33-1.21-3.45-3.55-3.55C15.51 4.01 15.14 4 12 4zm0 3.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7zm0 7.09A2.79 2.79 0 1 0 9.21 12 2.79 2.79 0 0 0 12 14.79zm5.47-7.26a1.01 1.01 0 1 1-1.01-1.01 1.01 1.01 0 0 1 1.01 1.01z" />
              </svg>
              @cflowproject
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="shrink-0 rounded-lg bg-white px-3 py-2 shadow-sm">
          <Image
            src="/images/cflow-logo.jpeg"
            alt="C-FLOW Project — Community-Driven Multi-Tier Flood Early Warning System"
            width={220}
            height={56}
            className="h-11 w-auto sm:h-14"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold tracking-wide uppercase md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 transition-colors hover:text-cflow-yellow"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cflow-yellow hover:text-cflow-yellow md:inline-flex"
        >
          Get Involved
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white md:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-4 text-sm font-semibold tracking-wide uppercase md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/90 transition-colors hover:text-cflow-yellow"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get Involved
          </a>
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-40 sm:pt-24 sm:pb-56">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cflow-yellow uppercase">
          C-FLOW Project — Community, Floods, Learning, Opportunities, Warnings
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-6xl md:text-7xl">
          Early Warnings,
          <br />
          Built With Communities,
          <br />
          For Communities.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          A community-driven, multi-tier flood early warning system protecting over
          50,000 people across Tanzania&apos;s Pangani Basin — combining IoT river
          sensors, AI forecasting, and locally co-designed alerts.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-md bg-cflow-yellow px-8 py-4 text-sm font-bold tracking-wide text-cflow-green uppercase shadow-lg transition-transform hover:scale-[1.03]"
          >
            Find Out More
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:border-white hover:bg-white/10"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Diagonal white cutaway at the base of the hero */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-36 bg-background sm:h-52 md:h-64"
        style={{ clipPath: "polygon(0 0, 65% 100%, 0 100%)" }}
      />
    </header>
  );
}
