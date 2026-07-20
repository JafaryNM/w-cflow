"use client";

const FOUR_KEY_NUMBERS = [
  {
    value: "50k+",
    label: "PEOPLE PROTECTED",
    dashOffset: 65,
  },
  {
    value: "600+",
    label: "HOUSEHOLDS SURVEYED",
    dashOffset: 85,
  },
  {
    value: "24h",
    label: "FORECAST LEAD TIME",
    dashOffset: 105,
  },
  {
    value: "~0.2m",
    label: "FORECAST ACCURACY",
    dashOffset: 120,
  },
];

export default function Impact() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans overflow-hidden py-20 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Column: Image starting flush-left with continuous gentle sweeping Bezier curve */}
          <div className="lg:col-span-5 relative h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-start -ml-4 sm:-ml-6 lg:-ml-8">
            <svg
              className="w-full h-full max-h-[600px] drop-shadow-md"
              viewBox="0 0 500 600"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="novalab-smooth-curve">
                  <path d="M 0,0 L 220,0 C 310,0 375,120 405,240 C 425,300 425,300 405,360 C 375,480 310,600 220,600 L 0,600 Z" />
                </clipPath>
              </defs>

              <g clipPath="url(#novalab-smooth-curve)">
                <image
                  href="/images/lab-researcher.jpg"
                  x="0"
                  y="0"
                  width="500"
                  height="600"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 py-6 lg:py-8 flex flex-col justify-center pr-2 lg:pr-10 xl:pr-14">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              What Makes C-FLOW Different
            </h2>

            {/* 2 Side-by-Side Paragraph Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              <div>
                <p className="text-slate-600">
                  <strong className="text-slate-900 font-semibold block mb-1">
                    Co-creation & Inclusion:
                  </strong>
                  Communities define what river heights mean &apos;watch&apos; or &apos;danger&apos; for their specific location. SMS alerts reach households with no smartphone or internet access, ensuring vulnerable populations receive critical warnings before flood waters rise.
                </p>
              </div>
              <div>
                <p className="text-slate-600">
                  <strong className="text-slate-900 font-semibold block mb-1">
                    Open Source & Local Ownership:
                  </strong>
                  All sensor firmware, AI models, and alert software will be published freely for replication across Africa. The system is designed to be managed and maintained by the community and the Pangani Basin Water Board long after the project ends.
                </p>
              </div>
            </div>

            {/* Horizontal Separator Line */}
            <div className="w-full max-w-2xl border-t border-slate-200/90 my-8" />

            {/* KEY IMPACT NUMBERS Label */}
            <span className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-6 block">
              KEY IMPACT NUMBERS
            </span>

            {/* 4 Clean Static Circular Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-start max-w-2xl">
              {FOUR_KEY_NUMBERS.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="44"
                        stroke="#f1f5f9"
                        strokeWidth="3.5"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="44"
                        stroke="#E85D5D"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="276"
                        strokeDashoffset={stat.dashOffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <span className="mt-3 text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-wider leading-tight max-w-[100px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
