import React from 'react';
import { Phone } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Help Card */}
        <div className="p-5 sm:p-8 bg-emerald-50/70 border border-emerald-200/80 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left shadow-xs">
          <div className="max-w-xl">
            <h4 className="font-bold text-slate-900 text-lg sm:text-xl">Still have specific medical questions?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Speak directly with our senior clinical consultant on phone or WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:+919363721689"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 93637 21689</span>
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full border border-emerald-700 text-emerald-800 font-bold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
