"use client";

const EXPERTISE_CARDS = [
  {
    id: "food",
    title: "Food & Beverage Analysis",
    image: "/images/food-analysis.jpg",
    positionClass: "translate-y-0",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 stroke-brand-primary"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L19 6V14L12 18L5 14V6L12 2Z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M12 7V10M12 10L14.5 11.5M12 10L9.5 11.5" />
        <circle cx="5" cy="6" r="1.5" fill="var(--color-brand-primary)" />
        <circle cx="19" cy="6" r="1.5" fill="var(--color-brand-primary)" />
        <circle cx="19" cy="14" r="1.5" fill="var(--color-brand-primary)" />
        <circle cx="5" cy="14" r="1.5" fill="var(--color-brand-primary)" />
      </svg>
    ),
  },
  {
    id: "agro",
    title: "Agroscience Analysis",
    image: "/images/agro-analysis.jpg",
    positionClass: "md:translate-y-12 lg:translate-y-16",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 stroke-brand-primary"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
        <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12" />
        <circle cx="10" cy="10" r="1.5" fill="var(--color-brand-primary)" />
        <circle cx="14" cy="13" r="1" fill="var(--color-brand-primary)" />
        <circle cx="11" cy="14.5" r="1" fill="var(--color-brand-primary)" />
      </svg>
    ),
  },
  {
    id: "soil",
    title: "Soil Analysis",
    image: "/images/soil-analysis.jpg",
    positionClass: "translate-y-0",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 stroke-brand-primary"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="17" rx="8" ry="3" />
        <ellipse cx="12" cy="17" rx="5" ry="1.8" />
        <path d="M12 4V10" />
        <path d="M12 10C12 10 10.5 12 12 13.5C13.5 12 12 10 12 10Z" fill="var(--color-brand-primary)" />
      </svg>
    ),
  },
];

export default function Expertise() {
  return (
    <section className="relative w-full bg-[#fafafa] pt-[78px] pb-20 lg:pb-28 overflow-hidden text-slate-900 font-sans">
      {/* Background Image Provided by User */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/expertise-bg.jpg"
          alt="Expertise Background"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
      </div>

      {/* Subtle Background Geometric Square Pattern Accent */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header (580px max-width, 64px bottom margin) */}
        <div className="mx-auto max-w-[580px] text-center mb-[64px]">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Improve all products to make them safer, better and more accessible
            for environment.
          </p>
        </div>

        {/* 3 Pointy-Top Hexagonal Cards Grid (373px x 423px, 40px Gap, V-Staggered Static) */}
        <div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-3 md:gap-6 lg:gap-[40px] pb-16 lg:pb-24 max-w-[1240px] mx-auto">
          {EXPERTISE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative w-full max-w-[373px] aspect-[373/423] ${card.positionClass}`}
            >
              {/* Outer Pointy-Top Hexagon SVG (373 x 423 viewBox) */}
              <svg viewBox="0 0 373 423" className="h-full w-full drop-shadow-2xl">
                <defs>
                  {/* Outer rounded pointy-top hexagon clip path (smooth 30px corner radius rounding) */}
                  <clipPath id={`hex-outer-${card.id}`}>
                    <path d="M 166.5 23.5 Q 186.5 12 206.5 23.5 L 338 99 Q 358 110 358 132 L 358 291 Q 358 313 338 324 L 206.5 399.5 Q 186.5 411 166.5 399.5 L 35 324 Q 15 313 15 291 L 15 132 Q 15 110 35 99 Z" />
                  </clipPath>

                  {/* Inner rounded pointy-top hexagon clip path (same orientation!) */}
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
                <g clipPath={`url(#hex-inner-${card.id})`}>
                  <rect x="0" y="0" width="373" height="423" fill="#ffffff" />
                </g>

                {/* Inner Hexagon Border */}
                <path
                  d="M 186.5 135 Q 191 138 263 180 Q 268 183 268 190 L 268 270 Q 268 277 263 280 L 191.5 322 Q 186.5 325 181.5 322 L 110 280 Q 105 277 105 270 L 105 190 Q 105 183 110 180 Z"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Inner Content overlay centered inside inner pointy-top white hexagon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none z-10">
                {/* 64px x 69px Icon Holder */}
                <div className="w-[64px] h-[69px] flex items-center justify-center rounded-full bg-brand-pale/50">
                  {card.icon}
                </div>

                {/* 16px Spacing between Icon and Title */}
                <h3 className="mt-[16px] max-w-[130px] text-xs font-extrabold leading-tight text-slate-900 sm:text-sm">
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
