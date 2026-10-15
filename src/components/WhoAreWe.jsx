import React from 'react';
import { ClipboardCheck, ShieldCheck, Stethoscope, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhoAreWe() {
  const cards = [
    {
      icon: <ClipboardCheck className="w-8 h-8" strokeWidth={1.8} />,
      title: 'Personalised Wellness Plans',
      desc: 'Treatment plans tailored to your individual goals, lifestyle, and consultation findings.',
      tag: 'Personalised Approach',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.8} />,
      title: 'Non-Surgical Treatment Options',
      desc: 'Explore non-invasive treatment options with guidance from qualified healthcare professionals.',
      tag: 'Care-Focused Treatments',
    },
    {
      icon: <Stethoscope className="w-8 h-8" strokeWidth={1.8} />,
      title: 'Professional Medical Guidance',
      desc: 'Receive individual assessment and treatment guidance from appropriately qualified medical professionals.',
      tag: 'Expert-Led Consultation',
    },
    {
      icon: <HeartHandshake className="w-8 h-8" strokeWidth={1.8} />,
      title: 'Comfortable, Patient-Centred Care',
      desc: 'Experience treatments in a supportive, welcoming clinical environment designed around your comfort and safety.',
      tag: 'Patient-Centred Care',
    },
  ];

  return (
    <section id="about" className="py-18 bg-white border-y border-emerald-100/70 relative overflow-hidden">
      {/* Subtle light green background glows */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Middle Center Section Tag */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            About us
          </span>
        </div>

        {/* Top Header Row matching the user reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">

          {/* Left: Subtitle, Heading and Red/Emerald Accent Bar */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-sm sm:text-base font-serif text-slate-700 tracking-wide block">
              Tenziaa Dharmapuri
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
              Tenziaa is a clinic built around one goal: helping you reshape your body safely and confidently. We know that stubborn fat and weight gain are about more than looks. They shape how you feel, how you dress, and how you live. That's why every plan is designed for lasting progress rather than quick fixes.
            </p>
          </div>

          {/* Right Paragraph */}
          <div className="lg:col-span-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              As Dharmapuri's first dedicated slimming and body contouring clinic, we combine advanced slimming technologies, expert guidance, and personalized care to help you achieve your dream body in a healthy and sustainable way.
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

              {/* Verified check badge / tag */}
              <div className="mt-4 pt-3 border-t border-emerald-100/60 w-full flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#65a30d]" />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
