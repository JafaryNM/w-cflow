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
        className="h-12 w-12 stroke-[#E85D5D]"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L19 6V14L12 18L5 14V6L12 2Z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M12 7V10M12 10L14.5 11.5M12 10L9.5 11.5" />
        <circle cx="5" cy="6" r="1.5" fill="#E85D5D" />
        <circle cx="19" cy="6" r="1.5" fill="#E85D5D" />
        <circle cx="19" cy="14" r="1.5" fill="#E85D5D" />
        <circle cx="5" cy="14" r="1.5" fill="#E85D5D" />
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
        className="h-12 w-12 stroke-[#E85D5D]"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
        <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12" />
        <circle cx="10" cy="10" r="1.5" fill="#E85D5D" />
        <circle cx="14" cy="13" r="1" fill="#E85D5D" />
        <circle cx="11" cy="14.5" r="1" fill="#E85D5D" />
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
        className="h-12 w-12 stroke-[#E85D5D]"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="17" rx="8" ry="3" />
        <ellipse cx="12" cy="17" rx="5" ry="1.8" />
        <path d="M12 4V10" />
        <path d="M12 10C12 10 10.5 12 12 13.5C13.5 12 12 10 12 10Z" fill="#E85D5D" />
      </svg>
    ),
  },
];

export default function Expertise() {
  return (
    <section className="relative w-full bg-[#fafafa] py-20 lg:py-28 overflow-hidden text-slate-900 font-sans">
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
        {/* Section Header */}
        <div className="mb-14 text-center lg:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            Improve all products to make them safer, better and more accessible
            for environment.
          </p>
        </div>

        {/* 3 Hexagonal Cards Grid (373px x 423px exact dimensions, 40px flexible gap) */}
        <div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-3 md:gap-6 lg:gap-[40px] pb-12 lg:pb-16 max-w-[1240px] mx-auto">
          {EXPERTISE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative w-full max-w-[373px] aspect-[373/423] cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${card.positionClass}`}
            >
              {/* Outer Hexagon (373 x 423 viewBox) */}
              <svg viewBox="0 0 373 423" className="h-full w-full drop-shadow-2xl">
                <defs>
                  {/* Outer rounded hexagon clip path (373 x 423) */}
                  <clipPath id={`hex-outer-${card.id}`}>
                    <path d="M 186.5 15 Q 196.5 10 206.5 15 L 348 97 Q 358 103 358 118 L 358 305 Q 358 320 348 326 L 206.5 408 Q 196.5 413 186.5 408 L 25 326 Q 15 320 15 305 L 15 118 Q 15 103 25 97 Z" />
                  </clipPath>

                  {/* Inner rounded hexagon clip path */}
                  <clipPath id={`hex-inner-${card.id}`}>
                    <path d="M 186.5 135 Q 191.5 132 196.5 135 L 268 176 Q 273 179 273 186 L 273 277 Q 273 284 268 287 L 196.5 328 Q 191.5 331 186.5 328 L 105 287 Q 100 284 100 277 L 100 186 Q 100 179 105 176 Z" />
                  </clipPath>
                </defs>

                {/* Outer Hexagon Photo Image */}
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
                  d="M 186.5 15 Q 196.5 10 206.5 15 L 348 97 Q 358 103 358 118 L 358 305 Q 358 320 348 326 L 206.5 408 Q 196.5 413 186.5 408 L 25 326 Q 15 320 15 305 L 15 118 Q 15 103 25 97 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  opacity="0.95"
                />

                {/* Center Inner White Hexagon Card */}
                <g clipPath={`url(#hex-inner-${card.id})`}>
                  <rect x="0" y="0" width="373" height="423" fill="#ffffff" />
                </g>

                {/* Inner Hexagon Border */}
                <path
                  d="M 186.5 135 Q 191.5 132 196.5 135 L 268 176 Q 273 179 273 186 L 273 277 Q 273 284 268 287 L 196.5 328 Q 191.5 331 186.5 328 L 105 287 Q 100 284 100 277 L 100 186 Q 100 179 105 176 Z"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Inner Content overlay positioned over inner white hexagon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none z-10">
                {/* 64px x 69px Icon Holder */}
                <div className="w-[64px] h-[69px] flex items-center justify-center rounded-full bg-red-50/50">
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
