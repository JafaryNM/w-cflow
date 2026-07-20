"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D4E89] text-white font-sans pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 4 Main Columns Grid matching Reference Template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: LOGO & CONTACT US */}
          <div>
            {/* C-FLOW Official Logo */}
            <Link href="/" className="mb-6 inline-flex items-center bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all">
              <Image
                src={logoAsset}
                alt="C-FLOW Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <h3 className="text-sm font-extrabold tracking-widest uppercase text-white mb-4 pb-1 border-b border-white/20 w-fit">
              CONTACT US
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 font-medium">
              <li>C-FLOW Project Office</li>
              <li>NM-AIST, Tengeru</li>
              <li>Arusha, Tanzania</li>
              <li className="pt-1">
                <a href="mailto:info@cflow-project.org" className="hover:underline transition-all">
                  info@cflow-project.org
                </a>
              </li>
              <li>
                <a href="tel:+255272970000" className="hover:underline transition-all">
                  +255 (0) 27 297 0000
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div>
            <h3 className="text-sm font-extrabold tracking-widest uppercase text-white mb-4 pb-1 border-b border-white/20 w-fit">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 font-medium">
              <li>
                <Link href="/" className="hover:underline transition-all">About</Link>
              </li>
              <li>
                <a href="#team" className="hover:underline transition-all">The Team</a>
              </li>
              <li>
                <a href="#solution" className="hover:underline transition-all">How It Works</a>
              </li>
              <li>
                <a href="#expertise" className="hover:underline transition-all">Projects</a>
              </li>
              <li>
                <Link href="/timeline" className="hover:underline transition-all">Timeline</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: USEFUL LINKS */}
          <div>
            <h3 className="text-sm font-extrabold tracking-widest uppercase text-white mb-4 pb-1 border-b border-white/20 w-fit">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 font-medium">
              <li>
                <a href="https://www.nationalgeographic.org" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  National Geographic Society
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">Pangani Basin Water Board</a>
              </li>
              <li>
                <a href="https://www.nm-aist.ac.tz" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  NM-AIST
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">Tanzania Meteorological Authority</a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">Ministry of Water</a>
              </li>
            </ul>
          </div>

          {/* Column 4: SUBSCRIBE (Seamless Equal-Height Pill Form with Arrow Badge) */}
          <div>
            <h3 className="text-sm font-extrabold tracking-widest uppercase text-white mb-4 pb-1 border-b border-white/20 w-fit">
              SUBSCRIBE
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="mt-2">
              <div className="flex items-center w-full">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="h-10 sm:h-11 flex-1 bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 rounded-l-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="group h-10 sm:h-11 inline-flex items-center gap-2 sm:gap-2.5 rounded-r-full bg-amber-400 pl-3.5 sm:pl-4 pr-1 text-xs font-extrabold tracking-wider text-slate-950 uppercase shadow-md transition-all hover:bg-amber-300 shrink-0"
                >
                  <span>SUBMIT</span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-950 shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-white/25 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* 5 Circular Outline Social Vector Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4E89] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.79 5.6c1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4E89] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X"
              className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4E89] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4E89] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4E89] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Right Side Copyright */}
          <p className="text-xs text-white/80 font-medium">
            © 2026 C-FLOW Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
