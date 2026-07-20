"use client";

import { ArrowUpRight } from "lucide-react";

export default function NewsMediaSection() {
  return (
    <section className="relative w-full py-12 lg:py-16 font-sans overflow-hidden border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact Full-bleed River Background Banner */}
        <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl min-h-[160px] sm:min-h-[180px] flex items-center justify-center text-center p-4 sm:p-6 border border-white/20 my-2">
          {/* Background Aerial River Image */}
          <img
            src="/images/aerial-river-bg.jpg"
            alt="Pangani Basin Aerial River View"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Light Transparent Brand Blue Overlay */}
          <div className="absolute inset-0 bg-[#1D4E89]/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-slate-950/20" />

          {/* Centered Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Stay Informed with C-FLOW Updates
            </h2>

            {/* Subtitle */}
            <p className="text-white text-[11px] sm:text-xs max-w-xl leading-relaxed mb-4 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Get updates about our critical work to monitor floods, deploy telemetry sensors, and protect vulnerable communities across the Pangani Basin.
            </p>

            {/* Pill Action Button (Clean Amber Pill with White Circle Arrow Badge) */}
            <a
              href="#"
              className="group inline-flex items-center gap-3.5 rounded-full bg-amber-400 pl-6 pr-1.5 py-1.5 text-[11px] sm:text-xs font-extrabold tracking-wider text-slate-950 uppercase shadow-lg transition-all hover:bg-amber-300 hover:shadow-xl active:scale-95"
            >
              <span>EXPLORE NEWS & MEDIA</span>

              {/* White Circular Disk with Up-Right Arrow Icon */}
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-slate-950 shadow-xs group-hover:scale-105 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
