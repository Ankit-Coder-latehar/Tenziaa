import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';

const FAQS = [
  {
    q: 'How does non-invasive fat freezing (Cryolipolysis) work, and is it permanent?',
    a: 'Cryolipolysis targets fat cells by cooling them to temperatures that trigger apoptosis (natural controlled cell death) without harming skin, muscles, or nerve endings. Over the subsequent 3 to 8 weeks, your lymphatic system naturally metabolizes and clears these dead fat cells forever. Once gone, adult fat cells do not regenerate.',
  },
  {
    q: 'Is there any pain, injections, or downtime involved?',
    a: 'None! There are zero needles, zero anesthesia, and no surgical incisions. You may feel a firm pulling sensation and intense cold for the first 4-5 minutes, after which the area becomes numb. Most clients relax, read, or work on their laptops during the 45-minute procedure and return to office immediately afterward.',
  },
  {
    q: 'How many inches can I expect to lose?',
    a: 'Most clients lose between 2 to 5 inches across a typical 3 to 4 session protocol. Single session treatments routinely achieve 20% to 25% localized subcutaneous fat thickness reduction in the targeted zone.',
  },
  {
    q: 'How soon will I see visible results?',
    a: 'Initial changes often appear around 2 to 3 weeks as the body begins processing the crystallized fat cells. The most dramatic and defined results become apparent between 6 to 10 weeks post-treatment.',
  },
  {
    q: 'Is the treatment US-FDA cleared and safe?',
    a: 'Yes. All our clinical hardware is US-FDA cleared and CE medical marked. Treatments are performed in sterile, doctor-supervised aesthetic clinical rooms with advanced temperature sensors that prevent thermal injury.',
  },
  {
    q: 'How is Tenziaa different from crash dieting or regular gyms?',
    a: 'Diet and exercise shrink the size of existing fat cells throughout the body indiscriminately, often leaving stubborn pockets like lower belly fat or love handles untouched. Tenziaa physically eliminates the targeted fat cells in problem areas while maintaining your lean muscle mass.',
  },
  {
    q: 'What if I gain weight after my treatments?',
    a: 'The fat cells eliminated during your Tenziaa sessions are permanently destroyed. If you gain weight in the future, fat will distribute more evenly throughout remaining cells across your entire body rather than piling up in the treated problem areas.',
  },
];

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Got questions about our slimming procedures? Here are answers to what our clients ask most.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-emerald-100/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs hover:border-emerald-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-emerald-50/40 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50 bg-emerald-50/20">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 p-6 sm:p-8 bg-emerald-50/70 border border-emerald-200/80 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Still have specific medical questions?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Speak directly with our senior clinical consultant on phone or WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+917030034567"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              +91 7030034567
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-full border border-emerald-700 text-emerald-800 font-bold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Book Consult
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
