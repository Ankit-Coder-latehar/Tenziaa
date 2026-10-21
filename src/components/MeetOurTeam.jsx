import React from 'react';

const TEAM = [
  {
    name: 'Clinical Specialist',
    role: 'Wellness & Aesthetic Consultant',
    image: '/images/team-member-square.jpg',
  },
];

export default function MeetOurTeam() {
  return (
    <section id="team" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2.5">
            {/* Heartbeat pulse wave icon */}
            <svg
              className="w-5 h-5 text-rose-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-[#0284c7] font-bold text-xs sm:text-sm uppercase tracking-widest">
              Tenziaa  Dharmapuri
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2a4a] tracking-tight">
            Meet Our Team
          </h2>

          <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At Tenziaa Wellness &amp; Aesthetic Clinic, our team is committed to providing personalised guidance and patient-focused care. We work with you to understand your goals, explore suitable treatment options, and support you throughout your wellness journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex justify-center max-w-sm mx-auto">
          {TEAM.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center group w-full">

              {/* Doctor Avatar Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
                {/* Subtle soft background ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-50 via-emerald-50 to-white -z-10 scale-105 transition-transform duration-300 group-hover:scale-110"></div>

                {/* Circular image frame */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-100 shadow-md bg-white p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Green ★ EXPERT Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md border-2 border-white whitespace-nowrap">
                  <span className="text-emerald-200 text-xs leading-none">★</span>
                  <span>EXPERT</span>
                </div>
              </div>

              {/* Floating Name Card */}
              <div className="mt-7 w-full max-w-[270px] bg-white rounded-2xl py-4 px-6 text-center shadow-[0_6px_25px_-5px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0f2a4a] tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
