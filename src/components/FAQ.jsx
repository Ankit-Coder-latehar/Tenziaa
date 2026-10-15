import React from 'react';
import { Phone } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Help Card */}
        <div className="p-6 sm:p-8 bg-emerald-50/70 border border-emerald-200/80 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left shadow-xs">
          <div className="max-w-xl">
            <h4 className="font-bold text-slate-900 text-lg sm:text-xl">Still have specific medical questions?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Speak directly with our senior clinical consultant on phone or WhatsApp.
            </p>
          </div>
          <div className="flex flex-row flex-nowrap items-center justify-center md:justify-end gap-2.5 sm:gap-3 shrink-0">
            <a
              href="tel:+919363721689"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-emerald-700 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>+91 93637 21689</span>
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full border border-emerald-700 text-emerald-800 font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
