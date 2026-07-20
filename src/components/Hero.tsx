"use client";

import { useState } from "react";
import Image from "next/image";
import logoAsset from "@/assets/logo.png";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-white font-sans">
      {/* Background Microscope Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/microscope-bg.jpg"
          alt="Laboratory microscope"
          className="h-full w-full object-cover object-center"
        />
        {/* Balanced dark semi-transparent overlay layer (subdues bright lights, not too black) */}
        <div className="absolute inset-0 bg-slate-950/55 bg-gradient-to-r from-slate-950/75 via-slate-950/55 to-slate-950/40" />
      </div>

      {/* Top Utility Bar */}
      <header className="relative z-20 w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs text-white/90 sm:px-8">
          {/* Left Info: Phone & Address */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="tel:+188700600"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <svg
                className="h-3.5 w-3.5 fill-current text-white/80"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>(+1) 88 700 600</span>
            </a>

            <div className="flex items-center gap-2">
              <svg
                className="h-3.5 w-3.5 fill-current text-white/80"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>310 West 14th North Street, NY</span>
            </div>
          </div>

          {/* Right Info: Social Icons & Download Button */}
          <div className="hidden items-center gap-5 sm:flex">
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-white"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.79 5.6c1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-colors hover:text-white"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-white"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/20"
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400">
                <svg
                  className="h-2 w-2 translate-x-[0.5px] fill-slate-950"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span>Download this video</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
        {/* Brand Logo Asset Only (No NOVALAB text) */}
        <a href="#" className="flex items-center shrink-0">
          <Image
            src={logoAsset}
            alt="Logo"
            height={44}
            className="h-10 w-auto object-contain drop-shadow-md sm:h-12"
            priority
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 text-sm font-bold tracking-wider uppercase md:flex">
          <a href="#" className="relative py-1 text-white">
            HOME
            <span className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-brand-primary" />
          </a>
          <a
            href="#"
            className="py-1 text-white/80 transition-colors hover:text-white"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="py-1 text-white/80 transition-colors hover:text-white"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="py-1 text-white/80 transition-colors hover:text-white"
          >
            PAGES
          </a>
          <a
            href="#"
            className="py-1 text-white/80 transition-colors hover:text-white"
          >
            ELEMENTS
          </a>
        </div>

        {/* Right Action Button */}
        <div className="hidden items-center md:flex">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-slate-950 sm:text-sm"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>
            <span>Schedule a consultation</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="relative z-20 border-b border-white/10 bg-slate-950/95 px-6 py-4 text-sm font-bold tracking-wider uppercase backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-brand-primary">
              HOME
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              ABOUT
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              SERVICES
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              PAGES
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              ELEMENTS
            </a>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-2 rounded-md border border-white/70 px-4 py-2 text-xs font-semibold text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Schedule a consultation</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Hero Copy Content */}
      <main className="relative z-20 mx-auto my-auto flex w-full max-w-7xl flex-col items-center px-4 pt-4 pb-28 sm:px-8 lg:pt-8 lg:pb-40">
        <div className="max-w-2xl text-center">
          {/* Headline */}
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            COMPREHENSIVE
            <br />
            LABORATORY
            <br />
            SERVICES
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-lg text-sm font-normal leading-relaxed text-white/95 sm:text-base lg:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Ensuring the delivery of reliable, validated data, and therefore
            safer product to market
          </p>

          {/* Primary CTA Button */}
          <div className="mt-6 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-md bg-brand-primary px-7 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition-transform hover:bg-brand-navy active:scale-95 sm:text-sm"
            >
              FIND OUT MORE
            </a>
          </div>
        </div>
      </main>

      {/* Floating Bottom-Right Subscribe Card */}
      <div className="absolute bottom-5 right-4 z-30 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-10">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-sm bg-[#0084e3] px-4 py-2.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-xl transition-colors hover:bg-[#0074ca] sm:px-5 sm:py-3 sm:text-xs"
        >
          <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span>NEVER MISS NEW LAUNCHES! SUBSCRIBE!</span>
        </a>
      </div>

      {/* Straight-diagonal chevron with lightly softened ~30px rounded vertex tip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[15vh] sm:h-[18vh] lg:h-[22vh] max-h-[220px] text-white fill-current"
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
        >
          {/* Perfectly straight 9.5° diagonal lines meeting at a subtly rounded tip (30px radius) */}
          <path d="M 0,0 L 470,135 Q 500,150 530,135 L 1000,0 L 1000,160 L 0,160 Z" />
        </svg>
      </div>
    </section>
  );
}
