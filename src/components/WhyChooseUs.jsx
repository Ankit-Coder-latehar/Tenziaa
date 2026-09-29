import React from 'react';
import { ShieldCheck, Award, Users, HeartPulse, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking }) {
  const points = [
    {
      icon: ShieldCheck,
      title: 'US-FDA Cleared Technologies',
      description: 'We only deploy gold-standard, clinically validated medical devices certified for non-surgical fat reduction and skin tightening.',
    },
    {
      icon: Clock,
      title: 'Zero Downtime & Painless',
      description: 'No anesthesia, no stitches, and no recovery bed rest. Walk in during your lunch break and resume your daily routine immediately.',
    },
    {
      icon: HeartPulse,
      title: '3D Ultrasound Fat Analysis',
      description: 'We assess visceral vs. subcutaneous fat layers with medical precision to prescribe treatments tailored to your exact metabolic phenotype.',
    },
    {
      icon: Users,
      title: 'Board-Certified Specialists',
      description: 'Every session is guided by senior aesthetic physicians, clinical dietitians, and trained therapists with over a decade of clinical excellence.',
    },
    {
      icon: Sparkles,
      title: 'Permanent Fat Destruction',
      description: 'Cryolipolysis induces apoptosis (natural cell death) of adipocytes. Once eliminated, these fat cells are gone for good.',
    },
    {
      icon: Award,
      title: '15,000+ Proven Success Cases',
      description: 'Consistently rated 4.9/5 stars across all centers with documented centimeter-by-centimeter before and after results.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            The Tenziaa Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Discerning Clients Choose Tenziaa™
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Say goodbye to exhausting crash diets and painful surgical liposuction. Experience medical-grade body shaping that is safe, relaxing, and scientifically proven.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/50 via-white to-white border border-emerald-100/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle className="w-4 h-4" />
                  <span>Clinically Certified Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Patient Journey inside Why Us */}
        <div className="mt-20 bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-700/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-12">
            <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest block mb-2">
              Simple &amp; Painless
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight">Your 4-Step Journey to a Sculpted Silhouette</h3>
            <p className="mt-2 text-emerald-100 text-sm sm:text-base">
              From your initial consultation to long-lasting inch reduction, we guide you every single step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              {
                step: '01',
                title: '3D Body Scan',
                desc: 'Complimentary computerized body composition scan measuring subcutaneous fat, BMI, and water retention.',
              },
              {
                step: '02',
                title: 'Doctor Roadmap',
                desc: 'One-on-one consultation with an aesthetic physician to map out your target zones and ideal treatments.',
              },
              {
                step: '03',
                title: 'Painless Session',
                desc: 'Relax in our luxury suite with soothing music while targeted non-invasive applicators sculpt your body.',
              },
              {
                step: '04',
                title: 'Lasting Results',
                desc: 'Watch inches melt away over 3 to 6 weeks, supported by our ongoing metabolic and nutrition check-ins.',
              },
            ].map((st) => (
              <div key={st.step} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-emerald-400 block mb-2">{st.step}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{st.title}</h4>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-emerald-100">
              ⚡ Over 94% of our clients see measurable inch loss within the very first month.
            </span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer shrink-0"
            >
              Book Complimentary Step 01 Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
