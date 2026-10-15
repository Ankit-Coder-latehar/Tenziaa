import React from 'react';
import { ShieldCheck, Award, Users, HeartPulse, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking, onOpenBCA }) {
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

      </div>
    </section>
  );
}
