"use client";

import { History, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-white font-sans">
      {/* Background Laboratory Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/microscope-bg.jpg"
          alt="Laboratory background"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark semi-transparent overlay matching reference image */}
        <div className="absolute inset-0 bg-slate-950/45 bg-gradient-to-b from-slate-950/60 via-slate-950/35 to-slate-950/60" />
      </div>

      {/* Main Hero Content (Matching User Reference Image Exactly) */}
      <main className="relative z-20 mx-auto my-auto flex w-full max-w-7xl flex-col items-center px-4 pt-16 pb-28 text-center sm:px-8 lg:pt-24 lg:pb-36">
        <div className="w-full max-w-3xl lg:max-w-4xl text-center flex flex-col items-center">
          {/* Centered Clean White C-FLOW Logo (No background box) */}
          <div className="mb-6 flex justify-center">
            <img
              src="/images/cflow-logo-white.png"
              alt="C-FLOW Project Logo"
              className="h-16 sm:h-22 lg:h-28 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Subtitle text matching reference image */}
          <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-white/90 sm:text-base lg:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Empowering communities with real-time flood information and alerts to save lives, protect livelihoods, and build a safer tomorrow.
          </p>

          {/* 2 CTA Buttons: TIMELINE and EVENTS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/timeline"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/10 px-7 py-3 text-xs font-extrabold tracking-wider text-white uppercase backdrop-blur-xs transition-all hover:bg-white hover:text-slate-950 sm:text-sm shadow-md"
            >
              <History className="h-4 w-4" />
              <span>TIMELINE</span>
            </a>

            <a
              href="#events"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0084FF] px-7 py-3 text-xs font-extrabold tracking-wider text-white uppercase shadow-xl transition-all hover:bg-[#0072dc] sm:text-sm active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>EVENTS</span>
            </a>
          </div>

          {/* Supported Partners Section: Left Intact As Is */}
          <div className="mt-16 sm:mt-20 lg:mt-24 w-full max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-16 sm:w-28 lg:w-36 bg-white/20" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-white/75 uppercase whitespace-nowrap">
                SUPPORTED PARTNERS
              </span>
              <div className="h-[1px] w-16 sm:w-28 lg:w-36 bg-white/20" />
            </div>

            <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 w-full overflow-x-auto no-scrollbar">
              <img
                src="/images/partners/partner-natgeo.png"
                alt="National Geographic Partner"
                className="h-6 sm:h-9 md:h-11 lg:h-12 w-auto object-contain grayscale brightness-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0"
              />
              <img
                src="/images/partners/partner-ministry-water.webp"
                alt="Ministry of Water Partner"
                className="h-6 sm:h-9 md:h-11 lg:h-12 w-auto object-contain grayscale brightness-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0"
              />
              <img
                src="/images/partners/partner-antwerp.png"
                alt="Antwerp Partner"
                className="h-6 sm:h-9 md:h-11 lg:h-12 w-auto object-contain grayscale brightness-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0"
              />
              <img
                src="/images/partners/partner-comtech.png"
                alt="Comtech Partner"
                className="h-6 sm:h-9 md:h-11 lg:h-12 w-auto object-contain grayscale brightness-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0"
              />
              <img
                src="/images/partners/partner-pbwb.png"
                alt="PBWB Partner"
                className="h-6 sm:h-9 md:h-11 lg:h-12 w-auto object-contain grayscale brightness-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0"
              />
              <img
                src="/images/partners/partner-tma.png"
                alt="TMA Partner"
                className="h-6 sm:h-9 md:h-11 lg:h-12 w-auto object-contain grayscale brightness-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Straight-diagonal chevron V-shape cut: preserved completely untouched */}
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
