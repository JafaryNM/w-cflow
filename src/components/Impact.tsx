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
    <section className="relative w-full bg-white text-slate-900 font-sans overflow-hidden py-12 lg:py-20 border-t border-slate-100">
      {/* Full-width container: Left image is flush to left viewport edge */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column: Flush 0px Left Margin with Rounded Right V-Cutout */}
        <div className="w-full lg:w-[46%] xl:w-[48%] relative min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] flex items-center justify-start shrink-0">
          <svg
            className="w-full h-full max-h-[620px] drop-shadow-xl"
            viewBox="0 0 520 600"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Rounded V-shape clip path starting flush at X=0 on left */}
              <clipPath id="novalab-v-clip-full">
                <path d="M 0,0 L 410,0 L 498,268 Q 520,300 498,332 L 410,600 L 0,600 Z" />
              </clipPath>
            </defs>

            <g clipPath="url(#novalab-v-clip-full)">
              <image
                href="/images/lab-researcher.jpg"
                x="0"
                y="0"
                width="520"
                height="600"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </div>

        {/* Right Column: Text Content & Circular Stat Counters */}
        <div className="w-full lg:w-[54%] xl:w-[52%] px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-12 flex flex-col justify-center max-w-4xl">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            What Makes C-FLOW Different
          </h2>

          {/* 2 Side-by-Side Paragraph Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
          <div className="w-full border-t border-slate-200/90 my-8" />

          {/* C-FLOW IN NUMBERS Label */}
          <span className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-6 block">
            C-FLOW IN NUMBERS
          </span>

          {/* 4 Circular Stat Counters with Red Arc Strokes (Matching NOVALAB Template Exactly) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-start">
            {FOUR_KEY_NUMBERS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
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
                <span className="mt-3 text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-wider leading-tight max-w-[110px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
