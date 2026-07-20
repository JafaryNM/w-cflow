"use client";

const TEAM_MEMBERS = [
  {
    id: "lawrence",
    name: "Dr. Lawrence Mdegela",
    role: "Project Leader",
    institution: "NM-AIST / ComTech Alliance",
    image: "/images/team/lawrence.png",
    imgConfig: { x: 12, y: 8, width: 295, height: 310 },
  },
  {
    id: "devotha",
    name: "Dr. Devotha Godfrey Nyambo",
    role: "Community Engagement Lead",
    institution: "ComTech Alliance (NGO)",
    image: "/images/team/devotha.png",
    imgConfig: { x: 20, y: 8, width: 280, height: 305 },
  },
  {
    id: "yorick",
    name: "Yorick De Bock",
    role: "IoT & Systems Advisor",
    institution: "imec / University of Antwerp",
    image: "/images/team/yorick.png",
    imgConfig: { x: 0, y: 0, width: 320, height: 330 },
  },
  {
    id: "magafu",
    name: "Magafu Timba",
    role: "Hydrology & Liaison",
    institution: "Ministry of Water, Tanzania",
    image: "/images/team/magafu.png",
    imgConfig: { x: 0, y: 0, width: 320, height: 330 },
  },
];

export default function Team() {
  return (
    <section className="relative w-full bg-[#1D4E89] py-20 lg:py-28 text-white font-sans overflow-hidden">
      {/* Background Accent Mesh Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>OUR TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Experts & Leadership
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mx-auto">
            Meet the dedicated researchers, engineers, and community leads driving the C-FLOW flood early warning project across the Pangani Basin.
          </p>
        </div>

        {/* 4 Team Member Hexagonal Cards Grid: Brand Blue BG, Brand Colored Buttons, Fine-Tuned Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl bg-white text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 p-4 sm:p-5 text-center flex flex-col items-center justify-between transform hover:-translate-y-2"
            >
              {/* Top Pointy-Top Hexagonal Photo Mask */}
              <div className="relative w-full aspect-[320/330] max-w-[260px] mx-auto">
                <svg
                  className="w-full h-full drop-shadow-md"
                  viewBox="0 0 320 330"
                >
                  <defs>
                    <clipPath id={`team-hex-clip-${member.id}`}>
                      <path d="M 145,15 Q 160,5 175,15 L 295,75 Q 310,85 310,100 L 310,230 Q 310,245 295,255 L 175,315 Q 160,323 145,315 L 25,255 Q 10,245 10,230 L 10,100 Q 10,85 25,75 Z" />
                    </clipPath>
                  </defs>

                  <g clipPath={`url(#team-hex-clip-${member.id})`}>
                    <rect x="0" y="0" width="320" height="330" fill="#f8fafc" />
                    <image
                      href={member.image}
                      x={member.imgConfig.x}
                      y={member.imgConfig.y}
                      width={member.imgConfig.width}
                      height={member.imgConfig.height}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>
                </svg>
              </div>

              {/* Card Details (Eyebrow Role, Brand Blue Name, Sub-institution, Brand Blue Outline Social Vector Icons) */}
              <div className="mt-4 flex flex-col items-center w-full">
                {/* Eyebrow Role */}
                <span className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase mb-1 leading-tight">
                  {member.role}
                </span>

                {/* Name in Brand Blue */}
                <h3 className="text-sm sm:text-base lg:text-lg font-extrabold text-[#1D4E89] tracking-tight leading-snug">
                  {member.name}
                </h3>

                {/* Institution */}
                <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1 mb-4 max-w-[200px] leading-relaxed">
                  {member.institution}
                </p>

                {/* 3 Brand Blue Outline Social Vector Buttons (Facebook, X, LinkedIn) */}
                <div className="flex items-center justify-center gap-2">
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label={`${member.name} Facebook`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-[#1D4E89] text-[#1D4E89] flex items-center justify-center hover:bg-[#1D4E89] hover:text-white transition-all duration-200 shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.79 5.6c1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="#"
                    aria-label={`${member.name} X`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-[#1D4E89] text-[#1D4E89] flex items-center justify-center hover:bg-[#1D4E89] hover:text-white transition-all duration-200 shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-[#1D4E89] text-[#1D4E89] flex items-center justify-center hover:bg-[#1D4E89] hover:text-white transition-all duration-200 shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
