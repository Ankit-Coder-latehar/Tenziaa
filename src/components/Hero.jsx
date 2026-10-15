import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Star, Award } from 'lucide-react';

export default function Hero({ onOpenBooking, onScrollToConsultation }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative light green soft glow circles */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[350px] bg-emerald-200/25 blur-3xl rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-100/40 blur-2xl rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-2xs">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Dharmapuri's 1st Exclusive Weight Loss Clinic</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl">
          Slim Down. Shape Up.{' '}
          <span className="block mt-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Without Surgery or Pain.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed">
          Smarter body shaping for real results. Tenziaa combines clinically proven technology with doctor-led plans to help you lose inches, tone up, and feel confident <strong className="text-emerald-900 font-semibold">without a single day off.</strong>
        </p>

        {/* Key Value Points */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-3xl pt-8 text-left">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs py-2 px-3 rounded-xl border border-emerald-100/70">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Non-Invasive Treatment Options</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs py-2 px-3 rounded-xl border border-emerald-100/70">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Convenient Appointment Slots</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs py-2 px-3 rounded-xl border border-emerald-100/70">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Professional Medical Supervision</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs py-2 px-3 rounded-xl border border-emerald-100/70">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Individualised Treatment Planning</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs py-2 px-3 rounded-xl border border-emerald-100/70">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Patient-Centred Care</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs py-2 px-3 rounded-xl border border-emerald-100/70">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Advanced Aesthetic Technology</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-8">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-200 group cursor-pointer"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* Social Proof Bar */}
        <div className="pt-10 mt-10 border-t border-slate-200/80 flex flex-wrap items-center justify-start gap-6 sm:gap-12">


          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

          <div className="flex items-center gap-2 text-left">

          </div>
        </div>
      </div>
    </section>
  );
}
