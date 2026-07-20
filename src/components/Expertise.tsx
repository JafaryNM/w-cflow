"use client";

const EXPERTISE_CARDS = [
  {
    id: "food",
    title: "Food & Beverage Analysis",
    image: "/images/food-analysis.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 stroke-[#E85D5D]"
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
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 stroke-[#E85D5D]"
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
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 stroke-[#E85D5D]"
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
    <section className="relative w-full bg-[#f8fafc] py-20 lg:py-28 overflow-hidden text-slate-900 font-sans">
      {/* Subtle Background Geometric Square Pattern Accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
            Improve all products to make them safer, better and more accessible
            for environment.
          </p>
        </div>

        {/* 3 Hexagonal Cards Grid */}
        <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-3 md:gap-8">
          {EXPERTISE_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative w-full max-w-[310px] aspect-[1/1.15] cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <svg viewBox="0 0 300 340" className="h-full w-full drop-shadow-xl">
                <defs>
                  {/* Outer rounded hexagon clip path */}
                  <clipPath id={`hex-outer-${card.id}`}>
                    <path d="M 150 12 Q 160 8 170 12 L 278 72 Q 288 78 288 92 L 288 248 Q 288 262 278 268 L 170 328 Q 160 332 150 328 L 22 268 Q 12 262 12 248 L 12 92 Q 12 78 22 72 Z" />
                  </clipPath>

                  {/* Inner rounded hexagon clip path */}
                  <clipPath id={`hex-inner-${card.id}`}>
                    <path d="M 150 90 Q 155 87 160 90 L 214 121 Q 219 124 219 131 L 219 209 Q 219 216 214 219 L 160 250 Q 155 253 150 250 L 86 219 Q 81 216 81 209 L 81 131 Q 81 124 86 121 Z" />
                  </clipPath>
                </defs>

                {/* Outer Hexagon with Background Photo */}
                <g clipPath={`url(#hex-outer-${card.id})`}>
                  <image
                    href={card.image}
                    x="0"
                    y="0"
                    width="300"
                    height="340"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  {/* Subtle dark tint on image for contrast */}
                  <rect x="0" y="0" width="300" height="340" fill="#000000" opacity="0.1" />
                </g>

                {/* Outer Hexagon Border */}
                <path
                  d="M 150 12 Q 160 8 170 12 L 278 72 Q 288 78 288 92 L 288 248 Q 288 262 278 268 L 170 328 Q 160 332 150 328 L 22 268 Q 12 262 12 248 L 12 92 Q 12 78 22 72 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  opacity="0.8"
                />

                {/* Center Inner White Hexagon Card */}
                <g clipPath={`url(#hex-inner-${card.id})`}>
                  <rect x="0" y="0" width="300" height="340" fill="#ffffff" />
                </g>

                {/* Inner Hexagon Subtle Border */}
                <path
                  d="M 150 90 Q 155 87 160 90 L 214 121 Q 219 124 219 131 L 219 209 Q 219 216 214 219 L 160 250 Q 155 253 150 250 L 86 219 Q 81 216 81 209 L 81 131 Q 81 124 86 121 Z"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="2"
                />
              </svg>

              {/* Content overlay positioned exactly over the inner white hexagon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-10">
                <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-red-50/50">
                  {card.icon}
                </div>
                <h3 className="max-w-[140px] text-sm font-extrabold leading-tight text-slate-900 sm:text-base">
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
