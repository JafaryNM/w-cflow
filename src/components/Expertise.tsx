"use client";

import { Waves, AlertTriangle, RadioTower } from "lucide-react";

const PROBLEM_CARDS = [
  {
    id: "floods",
    title: "Flash Floods & Terrain",
    image: "/images/crisis-floods.jpg",
    positionClass: "md:-translate-y-12 lg:-translate-y-16",
    icon: <Waves className="h-10 w-10 text-[#E85D5D]" strokeWidth={1.8} />,
  },
  {
    id: "disasters",
    title: "Devastating Disasters",
    image: "/images/crisis-disaster.jpg",
    positionClass: "md:translate-y-8 lg:translate-y-12",
    icon: <AlertTriangle className="h-10 w-10 text-[#E85D5D]" strokeWidth={1.8} />,
  },
  {
    id: "exposure",
    title: "50,000+ People Exposed",
    image: "/images/crisis-exposed.jpg",
    positionClass: "md:-translate-y-12 lg:-translate-y-16",
    icon: <RadioTower className="h-10 w-10 text-[#E85D5D]" strokeWidth={1.8} />,
  },
];

export default function Expertise() {
  return (
    <section className="relative w-full bg-[#fafafa] pt-[78px] pb-24 lg:pb-36 overflow-hidden text-slate-900 font-sans">
      {/* Clearly Visible Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/crisis-bg.jpg"
          alt="The Crisis Background"
          className="h-full w-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/75" />
      </div>

      {/* Subtle Background Geometric Square Pattern Accent */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[620px] text-center mb-[64px]">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl drop-shadow-sm">
            The Crisis
          </h2>
          <p className="mx-auto mt-4 text-sm leading-relaxed text-slate-900 sm:text-base font-semibold drop-shadow-xs">
            Flash floods and severe hydrological shifts threaten vulnerable communities, essential crops, and river basin ecosystems across the Pangani Basin.
          </p>
        </div>

        {/* Tightly Spaced 3 Pointy-Top Hexagonal Cards Grid */}
        <div className="grid grid-cols-1 items-start justify-items-center gap-6 md:grid-cols-3 md:gap-2 lg:gap-4 pb-16 lg:pb-24 max-w-[960px] mx-auto">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative w-full max-w-[340px] aspect-[373/423] ${card.positionClass}`}
            >
              {/* Outer Pointy-Top Hexagon SVG */}
              <svg viewBox="0 0 373 423" className="h-full w-full drop-shadow-2xl">
                <defs>
                  <clipPath id={`hex-outer-${card.id}`}>
                    <path d="M 166.5 23.5 Q 186.5 12 206.5 23.5 L 338 99 Q 358 110 358 132 L 358 291 Q 358 313 338 324 L 206.5 399.5 Q 186.5 411 166.5 399.5 L 35 324 Q 15 313 15 291 L 15 132 Q 15 110 35 99 Z" />
                  </clipPath>

                  <clipPath id={`hex-inner-${card.id}`}>
                    <path d="M 186.5 135 Q 191 138 263 180 Q 268 183 268 190 L 268 270 Q 268 277 263 280 L 191.5 322 Q 186.5 325 181.5 322 L 110 280 Q 105 277 105 270 L 105 190 Q 105 183 110 180 Z" />
                  </clipPath>
                </defs>

                {/* Outer Pointy-Top Hexagon Photo Image */}
                <g clipPath={`url(#hex-outer-${card.id})`}>
                  <image
                    href={card.image}
                    x="0"
                    y="0"
                    width="373"
                    height="423"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <rect x="0" y="0" width="373" height="423" fill="#000000" opacity="0.04" />
                </g>

                {/* Outer Hexagon White Border */}
                <path
                  d="M 166.5 23.5 Q 186.5 12 206.5 23.5 L 338 99 Q 358 110 358 132 L 358 291 Q 358 313 338 324 L 206.5 399.5 Q 186.5 411 166.5 399.5 L 35 324 Q 15 313 15 291 L 15 132 Q 15 110 35 99 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  opacity="0.95"
                />

                {/* Center Inner Pointy-Top White Hexagon Card */}
                <path
                  d="M 186.5 135 Q 191 138 263 180 Q 268 183 268 190 L 268 270 Q 268 277 263 280 L 191.5 322 Q 186.5 325 181.5 322 L 110 280 Q 105 277 105 270 L 105 190 Q 105 183 110 180 Z"
                  fill="#ffffff"
                  className="drop-shadow-lg"
                />
              </svg>

              {/* Inner Hexagon Icon & Text Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
                <div className="mb-2 transition-transform duration-300 hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="max-w-[140px] text-sm font-extrabold leading-snug tracking-tight text-slate-900 sm:text-base">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
