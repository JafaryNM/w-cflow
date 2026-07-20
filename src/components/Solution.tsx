"use client";

import { Waves, BrainCircuit, RadioTower, ArrowRight } from "lucide-react";

const SOLUTION_LAYERS = [
  {
    id: "sensors",
    title: "IoT River Sensors",
    description:
      "Low-cost ultrasonic sensors, solar-powered and cellular-connected, monitor river levels in real time at multiple sites across the basin.",
    icon: (
      <Waves
        className="h-6 w-6 text-amber-400 shrink-0"
        strokeWidth={2.2}
      />
    ),
  },
  {
    id: "ai",
    title: "AI Flood Forecasting",
    description:
      "Machine learning models (LSTM neural networks) trained on sensor data and satellite rainfall products predict flood risk up to 24 hours in advance, with approximately 0.2 meters accuracy.",
    icon: (
      <BrainCircuit
        className="h-6 w-6 text-amber-400 shrink-0"
        strokeWidth={2.2}
      />
    ),
  },
  {
    id: "alerts",
    title: "Community-Centered Alerts",
    description:
      "Alert thresholds are co-designed with villagers, elders, and local leaders. Warnings are issued in Swahili via mobile app, SMS (including basic phones), and local radio — ensuring no one is left behind.",
    icon: (
      <RadioTower
        className="h-6 w-6 text-amber-400 shrink-0"
        strokeWidth={2.2}
      />
    ),
  },
];

export default function Solution() {
  return (
    <section className="relative w-full bg-[#1D4E89] py-20 lg:py-28 text-white font-sans overflow-hidden">
      {/* Background Accent Mesh Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Tag / Eyebrow (Image 1 Style) */}
        <div className="flex items-center gap-2 mb-6 text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>OUR SOLUTION</span>
        </div>

        {/* Impact Headline Statement */}
        <h2 className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/95 max-w-4xl mb-10 lg:mb-12">
          C-FLOW is a community-driven, multi-tier flood early warning system
          that combines affordable technology with deep local knowledge. Built over six years of research and community engagement in the Pangani Basin, the system works in three connected layers:
        </h2>

        {/* 2-Column Grid (Image 1 Layout Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-slate-900/50">
              <img
                src="/images/solution-feature.jpg"
                alt="Pangani Basin Flood Monitoring System"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Amber CTA Button (Image 1 style) */}
            <a
              href="#timeline"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-7 py-3.5 text-xs font-extrabold tracking-wider text-slate-950 uppercase shadow-xl transition-all hover:bg-amber-300 hover:shadow-2xl active:scale-95 sm:text-sm"
            >
              <span>LEARN ABOUT OUR PROGRAMS</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Right Column: 3 Layered Solution Cards (Image 1 List Format) */}
          <div className="lg:col-span-7 flex flex-col">
            {SOLUTION_LAYERS.map((layer, index) => (
              <div
                key={layer.id}
                className={`py-6 lg:py-7 ${
                  index !== 0 ? "border-t border-white/15" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {layer.icon}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {layer.title}
                  </h3>
                </div>
                <p className="pl-9 text-sm sm:text-base leading-relaxed text-white/85">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
