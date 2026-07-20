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
        className="h-8 w-8 stroke-[#E85D5D]"
        fill="none"
        strokeWidth="1.8"
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
        className="h-8 w-8 stroke-[#E85D5D]"
        fill="none"
        strokeWidth="1.8"
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
        className="h-8 w-8 stroke-[#E85D5D]"
        fill="none"
        strokeWidth="1.8"
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
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

        {/* 3 Hexagonal Cards Grid in V-Formation Stagger */}
        <div className="grid grid-cols-1 items-start justify-items-center gap-6 md:grid-cols-3 md:gap-4 lg:gap-6 pb-12 lg:pb-16">
          {EXPERTISE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative w-full max-w-[340px] aspect-[1/1.12] cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${card.positionClass}`}
            >
              <svg viewBox="0 0 320 360" className="h-full w-full drop-shadow-2xl">
                <defs>
                  {/* Outer rounded hexagon clip path */}
                  <clipPath id={`hex-outer-${card.id}`}>
                    <path d="M 160 12 Q 170 8 180 12 L 298 78 Q 308 84 308 98 L 308 262 Q 308 276 298 282 L 180 348 Q 170 352 160 348 L 22 282 Q 12 276 12 262 L 12 98 Q 12 84 22 78 Z" />
                  </clipPath>

                  {/* Smaller Inner rounded hexagon clip path to show more outer photo space */}
                  <clipPath id={`hex-inner-${card.id}`}>
                    <path d="M 160 115 Q 164 112 168 115 L 210 138 Q 214 140 214 145 L 214 215 Q 214 220 210 222 L 168 245 Q 164 248 160 245 L 110 222 Q 106 220 106 215 L 106 145 Q 106 140 110 138 Z" />
                  </clipPath>
                </defs>

                {/* Outer Hexagon with Background Photo */}
                <g clipPath={`url(#hex-outer-${card.id})`}>
                  <image
                    href={card.image}
                    x="0"
                    y="0"
                    width="320"
                    height="360"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  {/* Light overlay on image for vibrancy */}
                  <rect x="0" y="0" width="320" height="360" fill="#000000" opacity="0.05" />
                </g>

                {/* Outer Hexagon Border */}
                <path
                  d="M 160 12 Q 170 8 180 12 L 298 78 Q 308 84 308 98 L 308 262 Q 308 276 298 282 L 180 348 Q 170 352 160 348 L 22 282 Q 12 276 12 262 L 12 98 Q 12 84 22 78 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  opacity="0.9"
                />

                {/* Smaller Center Inner White Hexagon Card */}
                <g clipPath={`url(#hex-inner-${card.id})`}>
                  <rect x="0" y="0" width="320" height="360" fill="#ffffff" />
                </g>

                {/* Inner Hexagon Border */}
                <path
                  d="M 160 115 Q 164 112 168 115 L 210 138 Q 214 140 214 145 L 214 215 Q 214 220 210 222 L 168 245 Q 164 248 160 245 L 110 222 Q 106 220 106 215 L 106 145 Q 106 140 110 138 Z"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Content overlay positioned inside the smaller inner white hexagon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none z-10">
                <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-50/60">
                  {card.icon}
                </div>
                <h3 className="max-w-[105px] text-xs font-extrabold leading-tight text-slate-900 sm:text-sm">
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
