import React from 'react';
import { ClipboardList, ShieldBan, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhoAreWe() {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14h.01" />
          <path d="M13 14h2" />
          <path d="M9 18h.01" />
          <path d="M13 18h2" />
          {/* subtle apple / leaf accent */}
          <circle cx="16" cy="11" r="2.5" />
          <path d="M16 8.5c.5-.8 1.5-.8 1.5-.8" />
        </svg>
      ),
      title: 'Personalised Weight Loss plans',
      desc: 'Customized protocols calibrated to your metabolic rate, lifestyle, and inch loss goals.',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* No injection / non-surgical syringe crossed out */}
          <path d="m18 2 4 4" />
          <path d="m17 7 3-3" />
          <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9" />
          <path d="m9 11 4 4" />
          <line x1="2" y1="2" x2="22" y2="22" stroke="#EF4444" strokeWidth="2.2" />
        </svg>
      ),
      title: 'Non Surgical & Safe Treatments',
      desc: '100% non-invasive, US-FDA cleared technologies with zero incisions, needles, or downtime.',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Experienced doctors & medical team */}
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          {/* Stethoscope touch */}
          <path d="M9 13v2a2 2 0 0 0 4 0v-2" />
        </svg>
      ),
      title: 'Experienced Doctors',
      desc: 'Supervised directly by certified aesthetic physicians and clinical dietitians.',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Person happy, beaming with light sparks / no side effects */}
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
          <path d="M12 1v2" />
          <path d="M4 8l1.5.5" />
          <path d="M20 8l-1.5.5" />
          <path d="M5 3l1 1" />
          <path d="M19 3l-1 1" />
        </svg>
      ),
      title: 'No Side Effects',
      desc: 'Clinically proven biological elimination of fat cells naturally via the lymphatic system.',
    },
  ];

  return (
    <section id="about" className="py-18 bg-white border-y border-emerald-100/70 relative overflow-hidden">
      {/* Subtle light green background glows */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row matching the user reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left: Subtitle, Heading and Red/Emerald Accent Bar */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-sm sm:text-base font-serif text-slate-700 tracking-wide block">
              Tenziaa Clinic Salem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Who are we?
            </h2>
            {/* The distinct horizontal accent line from the reference image */}
            <div className="pt-2">
              <div className="w-16 h-1 bg-[#E11D48] rounded-full"></div>
            </div>
          </div>

          {/* Middle Paragraph */}
          <div className="lg:col-span-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Your trusted destination for safe, effective, and result-driven weight loss and inch-loss treatments. We understand that weight gain is not just about appearance, it affects confidence, lifestyle, and overall health. At Tenziaa, we focus on real transformations, not temporary fixes.
            </p>
          </div>

          {/* Right Paragraph */}
          <div className="lg:col-span-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Easily the Slimming &amp; Body Contouring Clinic in Salem, which comprises advanced AI slimming technologies, expert guidance, and personalized care to help you achieve your dream body in a healthy and sustainable way.
            </p>
          </div>

        </div>

        {/* 4 Cards Grid - Styled in Light Green and Crisp White theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-white to-emerald-50/30 rounded-2xl p-6 sm:p-7 border-2 border-[#84cc16] shadow-md hover:shadow-xl hover:border-[#65a30d] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle top green accent border line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Circular Icon Container matching reference structure */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-100 shadow-sm flex items-center justify-center text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700 group-hover:scale-105 transition-all duration-300 mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                {item.desc}
              </p>

              {/* Verified check badge */}
              <div className="mt-4 pt-3 border-t border-emerald-100/60 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Clinically Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
